import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'

const University = () => {
  const [University, setUniversity] = useState([])

  const fetchUniversityData = async () => {
    const res = await fetch("http://localhost:3000/university/getall");
    console.log(res.status);
    if (res.status === 200) {
      const data = await res.json();
      console.log(data);
      setUniversity(data)
    }
  }

  useEffect(() => {
    fetchUniversityData()
  }, [])

  const displayUniversityData = () => {
    if (University.length === 0) {
      return <h1 className='text-center fw-bold' style={{ color: "seagreen" }}>No Data Found</h1>
    }

    return University.map((col) => (
      <>
        <div className="row h-50">
          <div className="col-md-3">
            <Link to={`/ViewUniversity/${col._id}`}> <img src={'http://localhost:3000/' + col.image} alt="" className="card-img-top p-3 img-fluid" style={{ objectFit: "cover", height: 200 }} />
            </Link>
          </div>


          <div className="col-md-6 py-4">
            <h2 className=' fw-semibold fs-5 mt-3 mb-3 ' style={{ fontFamily: "serif" }}>{col.universityname}</h2>
            {/* <p className='text-red-700 mb-2' style={{ fontFamily: "cursive" }}>{col.universityaddress}</p> */}
            <p className='text-muted me-3' style={{ fontFamily: "cursive" }}>{col.phone}</p>
            <p className='text-muted ' style={{ fontFamily: "cursive" }}>{col.email}</p>
            {/* <p className='text-muted me-3' style={{ fontFamily: "cursive" }}>{col.fees}</p>
            <p className='text-red-700 mb-2' style={{ fontFamily: "cursive" }}>{col.universitydetail}</p> */}
          </div>
      

        <div className="col-md-3">
        </div>
        </div>
        <hr />
      </>
    ))
  }



  return (
    <>

      <div className="">
        {displayUniversityData()}
      </div>

    </>
  )
}

export default University