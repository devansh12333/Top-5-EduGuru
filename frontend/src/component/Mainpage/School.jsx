import { useEffect, useState } from "react"
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom'
import StarRatings from "react-star-ratings";

const School = () => {
  const [School, setSchool] = useState([])

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

  const calculateAvgRating = (reviews, schoolId) => {
    const SchoolReviews = reviews.filter(review => review.school === schoolId);
    if (SchoolReviews.length === 0) {
      return 0;
    }
    const totalRating = SchoolReviews.reduce((acc, review) => acc + review.rating, 0);
    return totalRating / SchoolReviews.length;
  }

  const fetchSchoolData = async () => {
    const res = await fetch("http://localhost:3000/school/getall");
    console.log(res.status);
    if (res.status === 200) {
      const data = await res.json();
      console.log(data);
      setfilterList(data);
      const ratingsData = await fetchReviews();
      let temp = data.map(School => (
        {
          ...School,
          avgRating: calculateAvgRating(ratingsData, School._id)
        }
      ));
      // sort Schools according to avg rating
      temp.sort((a, b) => b.avgRating - a.avgRating);
      console.log(temp);
      setSchool(temp);

    }
  }

  useEffect(() => {
    fetchSchoolData()
  }, [])

  const filterproduct = (e) => {
    const value = e.target.value;
    setSchool(filterList.filter((col) => {
      return (col.schoolname.toLowerCase().includes(value.toLowerCase()))
    }))
  }


  const displaySchoolData = () => {
    if (School.length === 0) {
      return <h1 className='text-center fw-bold' style={{ color: "seagreen" }}>No Data Found</h1>
    }

    return School.map((col) => (
      <>
        <div className="row h-50 mt-5 shadow mb-3">
          <div className="col-md-3  ">
            <Link to={`/Mainpage/Viewschool/${col._id}`}> <img src={'http://localhost:3000/' + col.image} alt="" className="card-img-top p-3" style={{ objectFit: "cover", height: 200 }} />
            </Link>
          </div>
          <div className="col-md-6 py-4">
            <h2 className=' fw-semibold fs-5 mt-3 mb-3 ' style={{ fontFamily: "serif" }}>{col.schoolname}</h2>
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
          <h5 className="font-serif text-2xl text-blue-900 font-bold text-center py-2">An Easier way to find your School</h5>
          <div className="input-group mb-3 w-75 mx-auto">
            <input type="text" onChange={filterproduct} className="form-control border-blue-900  text-blue-900" placeholder="Start Typing.." aria-describedby="basic-addon2" />
            <div className="input-group-append">
              <button className="input-group-text bg-blue-900 text-white text-2xl" id="basic-addon2"><FaSearch /></button>
            </div>
            <Link to='/Mainpage/Top5School'> <button className="bg-blue-900 mx-2 px-5  font-serif text-white rounded">Top 5</button>
            </Link>
          </div>
          <div>
          </div>
        </div>
      </div>



      <div className="">
        {displaySchoolData()}
      </div>

    </>
  )
}

export default School