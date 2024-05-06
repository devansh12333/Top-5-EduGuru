import { useEffect, useState } from "react"
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
      console.log(data);
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
      return (col.collegename.toLowerCase().includes(value.toLowerCase())),
        (col.courses.toLowerCase().includes(value.toLowerCase()))
    }))
  }


  const displayCollegeData = () => {
    if (College.length === 0) {
      return <h1 className='text-center fw-bold' style={{ color: "seagreen" }}>No Data Found</h1>
    }

    return College.slice(0, 5).map((col) => (
      <>
        <div className="row h-50 mt-5 shadow mb-3">
          <div className="col-md-3  ">
            <Link to={`/Main/ViewCollege/${col._id}`}> <img src={'http://localhost:3000/' + col.image} alt="" className="card-img-top p-3" style={{ objectFit: "cover", height: 200 }} />
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
          </div>
        </div>
      </div>

      <div className="text-white d-flex justify-content-between bg-blue-900 container font-serif text-xl">
        <span>MA</span>
        <span>BA</span>
        <span>BCA</span>
        <span>MCA</span>
        <span>BBA</span>
        <span>MBA</span>
        <span>Btech</span>
        <span>Mtech</span>
        <span>Bsc</span>
        <span>Msc</span>
      </div>


      <div className="">
        {displayCollegeData()}
      </div>

    </>
  )
}

export default College