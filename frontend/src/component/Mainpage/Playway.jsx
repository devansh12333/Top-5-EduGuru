import { useEffect, useState } from "react"
import { FaSearch } from "react-icons/fa"
import { Link } from 'react-router-dom'

const Playway = () => {
  const [Playway, setPlayway] = useState([])
  const [filterList, setfilterList] = useState([])


  const fetchPlaywayData = async () => {
    const res = await fetch("http://localhost:3000/playway/getall");
    console.log(res.status);
    if (res.status === 200) {
      const data = await res.json();
      console.log(data);
      setPlayway(data)
      setfilterList(data)
    }
  }

  useEffect(() => {
    fetchPlaywayData()
  }, [])

  const filterproduct = (e) => {
    const value = e.target.value;
    setPlayway(filterList.filter((col) => {
      return (col.playwayname.toLowerCase().includes(value.toLowerCase()))
    }))
  }

  const displayPlaywayData = () => {
    if (Playway.length === 0) {
      return <h1 className='text-center fw-bold' style={{ color: "seagreen" }}>No Data Found</h1>
    }

    return Playway.map((col) => (
      <>
        <div className="row h-50 shadow mb-3">
          <div className="col-md-3">
            <Link to={`/Main/ViewPlayway/${col._id}`}> <img src={'http://localhost:3000/' + col.Image} alt="" className="card-img-top p-3 img-fluid" style={{ objectFit: "cover", height: 200 }} />
            </Link>
          </div>


          <div className="col-md-6 py-4">
            <h2 className=' fw-semibold fs-5 mt-3 mb-3 ' style={{ fontFamily: "serif" }}>{col.playwayname}</h2>
            {/* <p className='text-red-700 mb-2' style={{ fontFamily: "cursive" }}>{col.playwayaddress}</p> */}
            <p className='text-muted me-3' style={{ fontFamily: "cursive" }}>{col.phone}</p>
            <p className='text-muted ' style={{ fontFamily: "cursive" }}>{col.email}</p>
            {/* <p className='text-red-700 mb-2' style={{ fontFamily: "cursive" }}>{col.playwaydetail}</p>
            <p className='text-muted me-3' style={{ fontFamily: "cursive" }}>{col.fees}</p> */}
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
          <div class="input-group mb-3 w-75 ">
            <input type="text" onChange={filterproduct} className="form-control border-blue-900  text-blue-900" placeholder="Start Typing.."  aria-describedby="basic-addon2" />
            <div className="input-group-append">
              <button className="input-group-text bg-blue-900 text-white text-2xl" id="basic-addon2"><FaSearch /></button>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        {displayPlaywayData()}
      </div>

    </>
  )
}

export default Playway