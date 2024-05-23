import { useEffect, useState } from "react"
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom'
import StarRatings from "react-star-ratings";

const College = () => {
  const [College, setCollege] = useState([])

  const [filterList, setfilterList] = useState([])
  const [products, setProducts] = useState([]);
  const [reviewList, setReviewList] = useState([]);


  const fetchReviews = async () => {
    const res = await fetch("http://localhost:3000/reviews/getall");
    console.log(res.status);
    if (res.status === 200) {
      const data = await res.json();
      console.log(data)
      return data;
    }
  }

  const calculateAvgRating = (reviews, collegeId) => {
    const collegeReviews = reviews.filter(review => review.college === collegeId);
    if (collegeReviews.length === 0) {
      return 0;
    }
    const totalRating = collegeReviews.reduce((acc, review) => acc + review.rating, 0);
    return totalRating / collegeReviews.length;
  }

  const fetchCollegeData = async () => {
    const res = await fetch("http://localhost:3000/college/getall");
    console.log(res.status);
    if (res.status === 200) {
      const data = await res.json();
      console.log(data);
      setfilterList(data);
      const ratingsData = await fetchReviews();
      let temp = data.map(college => (
        {
          ...college,
          avgRating: calculateAvgRating(ratingsData, college._id)
        }
      ));
      // sort colleges according to avg rating
      temp.sort((a, b) => b.avgRating - a.avgRating);
      console.log(temp);
      setCollege(temp);

    }
  }

  useEffect(() => {
    fetchCollegeData()
  }, [])

  const filterproduct = (e) => {
    const value = e.target.value;
    setCollege(filterList.filter((col) => {
      return (col.collegename.toLowerCase().includes(value.toLowerCase()))
    }))
  }

  const filterByCourses = (course) => {
    console.log(course);
    const filteredColleges = filterList.filter(col => col.courses.toLowerCase().includes(course.toLowerCase()));
    setCollege(filteredColleges);
  }

  const displayCollegeData = () => {
    if (College.length === 0) {
      return <h1 className='text-center fw-bold' style={{ color: "seagreen" }}>No Data Found</h1>
    }

    return College.map((col) => (
      <>
        <div className="row h-50 mt-5 shadow mb-3">
          <div className="col-md-3  ">
            <Link to={`/Mainpage/ViewCollege/${col._id}`}> <img src={'http://localhost:3000/' + col.image} alt="" className="card-img-top p-3" style={{ objectFit: "cover", height: 200 }} />
            </Link>
          </div>
          <div className="col-md-6 py-4">
            <h2 className=' fw-semibold fs-5 mt-3 mb-3 ' style={{ fontFamily: "serif" }}>{col.collegename}</h2>
            <StarRatings
              rating={col.avgRating}
              starRatedColor="#ffbe00"
              numberOfStars={5}
              starDimension="20px"
              starSpacing="2px"
            />
            <p className='text-muted me-3' style={{ fontFamily: "serif" }}>{col.courses}</p>
            <p className='text-muted me-3' style={{ fontFamily: "cursive" }}>{col.phone}</p>
            <p className='text-muted ' style={{ fontFamily: "cursive" }}>{col.email}</p>
          </div>
          <div className="col-md-3">
          </div>
        </div>

      </>
    ))
  }



  return (


    <>


      <div className="container mb-4">
        <div className="card w-full shadow py-2 border-none">
          <h5 className="font-serif text-2xl text-blue-900 font-bold text-center py-2">An Easier way to find your College</h5>
          <div className="input-group mb-3 w-75 mx-auto">
            <input type="text" onChange={filterproduct} className="form-control border-blue-900  text-blue-900" placeholder="Start Typing.." aria-describedby="basic-addon2" />
            <div className="input-group-append">
              <button className="input-group-text bg-blue-900 text-white text-2xl" id="basic-addon2"><FaSearch /></button>
            </div>
            <Link to='/Mainpage/Top5College'> <button className="bg-blue-900 mx-2 px-5  font-serif text-white rounded">Top 5</button>
            </Link>
          </div>
          <div>
          </div>
        </div>
      </div>

      <div className="text-white d-flex justify-content-between bg-blue-900 container font-serif text-xl">
        <button id="MA" value='a' onClick={(e) => filterByCourses("MA")} >MA</button>
        <button id="BA" value='a' onClick={(e) => filterByCourses("BA")}>BA</button>
        <button id="BCA" value='a' onClick={(e) => filterByCourses("BCA")}>BCA</button>
        <button id="MCA" value='a' onClick={(e) => filterByCourses("MCA")}>MCA</button>
        <button id="BBA" value='a' onClick={(e) => filterByCourses("BBA")}>BBA</button>
        <button id="MBA" value='a' onClick={(e) => filterByCourses("MBA")}>MBA</button>
        <button id="Btech" value='a' onClick={(e) => filterByCourses("Btech")}>Btech</button>
        <button id="Mtech" value='a' onClick={(e) => filterByCourses("Mtech")}>Mtech</button>
        <button id="Bsc" value='a' onClick={(e) => filterByCourses("Bsc")}>Bsc</button>
        <button id="Msc" value='a' onClick={(e) => filterByCourses("Msc")}>Msc</button>
      </div>

      <div className="">
        {displayCollegeData()}
      </div>

    </>
  )
}

export default College