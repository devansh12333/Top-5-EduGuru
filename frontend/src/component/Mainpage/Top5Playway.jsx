import { useEffect, useState } from "react"
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom'
import StarRatings from "react-star-ratings";

const TopPlayway = () => {
  const [Playway, setPlayway] = useState([])
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
  const calculateAvgRating = (reviews, playwayId) => {
    const playwayReviews = reviews.filter(review => review.playway === playwayId);
    if (playwayReviews.length === 0) {
      return 0;
    }
    const totalRating = playwayReviews.reduce((acc, review) => acc + review.rating, 0);
    return totalRating / playwayReviews.length;
  }
  const fetchPlaywayData = async () => {
    const res = await fetch("http://localhost:3000/playway/getall");
    console.log(res.status);
    if (res.status === 200) {
      const data = await res.json();
      console.log(data);
      setfilterList(data)
      const ratingsData = await fetchReviews();
      let temp = data.map(playway => (
        {
          ...playway,
          avgRating: calculateAvgRating(ratingsData, playway._id)
        }
      ));
      // sort Playways according to avg rating
      temp.sort((a, b) => b.avgRating - a.avgRating);
      console.log(temp);
      setPlayway(temp);

    }
  }
  useEffect(() => {
    fetchPlaywayData()
  }, [])
  const filterByCourses = (course) => {
    console.log(course);
    const filteredPlayway = filterList.filter(col => col.courses.toLowerCase().includes(course.toLowerCase()));
    setPlayway(filteredPlayway);
  }
  const displayPlaywayData = () => {
    if (Playway.length === 0) {
      return <h1 className='text-center fw-bold' style={{ color: "seagreen" }}>No Data Found</h1>
    }
    return Playway.slice(0, 5).map((col) => (
      <>
        <div className="row h-50 mt-5 shadow mb-3">
          <div className="col-md-3  ">
            <Link to={`/Mainpage/ViewPlayway/${col._id}`}> <img src={'http://localhost:3000/' + col.Image} alt="" className="card-img-top p-3" style={{ objectFit: "cover", height: 200 }} />
            </Link>
          </div>
          <div className="col-md-6 py-4">
            <h2 className=' fw-semibold fs-5 mt-3 mb-3 ' style={{ fontFamily: "serif" }}>{col.playwayname}</h2>
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
      <div className="text-white d-flex justify-content-between bg-blue-900 container font-serif text-xl">
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
      </div>
      <div className="">
        {displayPlaywayData()}
      </div>

    </>
  )
}

export default TopPlayway