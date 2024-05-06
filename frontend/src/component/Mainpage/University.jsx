import { useEffect, useState } from "react"
import { FaSearch } from "react-icons/fa"
import { Link } from 'react-router-dom'

const University = () => {
  const [University, setUniversity] = useState([])
  const [filterList, setfilterList] = useState([])


  const fetchUniversityData = async () => {
    const res = await fetch("http://localhost:3000/university/getall");
    console.log(res.status);
    if (res.status === 200) {
      const data = await res.json();
      console.log(data);
      setUniversity(data)
      setfilterList(data)
    }
  }

  useEffect(() => {
    fetchUniversityData()
  }, [])

  const filterproduct = (e) => {
    const value = e.target.value;
    setUniversity(filterList.filter((uni) => {
      return (uni.universityname.toLowerCase().includes(value.toLowerCase()))
    }))
  }

  const displayUniversityData = () => {
    if (University.length === 0) {
      return <h1 className='text-center fw-bold' style={{ color: "seagreen" }}>No Data Found</h1>
    }

    return University.map((col) => (
      <>
        <div className="row h-50 shadow mb-3">
          <div className="col-md-3">
            <Link to={`/Mainpage/ViewUniversity/${col._id}`}> <img src={'http://localhost:3000/' + col.image} alt="" className="card-img-top p-3 img-fluid" style={{ objectFit: "cover", height: 200 }} />
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
    
      </>
    ))
  }



  return (
    <>

<div className="container mb-4">
        <div className="card w-full shadow py-2 border-none">
          <h5 className="font-serif text-2xl text-blue-900 font-bold text-center py-2">An Easier way to find your University</h5>
          <div class="input-group mb-3 w-75 mx-auto">
            <input type="text" onChange={filterproduct} className="form-control border-blue-900  text-blue-900" placeholder="Start Typing.."  aria-describedby="basic-addon2" />
            <div className="input-group-append">
              <button className="input-group-text bg-blue-900 text-white text-2xl" id="basic-addon2"><FaSearch /></button>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        {displayUniversityData()}
      </div>

    </>
  )
}

export default University