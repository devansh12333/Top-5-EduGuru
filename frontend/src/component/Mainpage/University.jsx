import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import Sidebar from "./Sidebar"
import { FaSearch } from "react-icons/fa"

const University = () => {
  const [University, setUniversity] = useState([])

  const [filterList, setfilterList] = useState([])
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products and ratings data from backend
    fetch('/api/products-ratings')
      .then((response) => response.json())
      .then((data) => {
        // Process data to calculate average rating for each product
        const processedProducts = data.products.map((product) => {
          const ratings = product.ratings;
          const totalRating = ratings.reduce((sum, rating) => sum + rating, 0);
          const averageRating = totalRating / ratings.length;

          return {
            id: product._id,
            name: product.Universityname,
            averageRating,
          };
        });

        // Sort products by average rating in descending order
        const sortedProducts = processedProducts.sort((a, b) => b.averageRating - a.averageRating);

        // Set top 5 products to state
        setProducts(sortedProducts.slice(0, 5));
      });
  }, []);

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
    setUniversity(filterList.filter((col) => {
      return (col.Universityname.toLowerCase().includes(value.toLowerCase())),
        (col.courses.toLowerCase().includes(value.toLowerCase()))
    }))
  }


  const displayUniversityData = () => {
    if (University.length === 0) {
      return <h1 className='text-center fw-bold' style={{ color: "seagreen" }}>No Data Found</h1>
    }

    return University.map((col) => (
      <>
        <div className="row h-50 mt-5 shadow mb-3">
          <div className="col-md-3  ">
            <Link to={`/Mainpage/ViewUniversity/${col._id}`}> <img src={'http://localhost:3000/' + col.image} alt="" className="card-img-top p-3" style={{ objectFit: "cover", height: 200 }} />
            </Link>
          </div>


          <div className="col-md-6 py-4">
            <h2 className=' fw-semibold fs-5 mt-3 mb-3 ' style={{ fontFamily: "serif" }}>{col.universityname}</h2>
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
          <h5 className="font-serif text-2xl text-blue-900 font-bold text-center py-2">An Easier way to find your University</h5>
          <div class="input-group mb-3 w-75 mx-auto">
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
        {displayUniversityData()}
      </div>

    </>
  )
}

export default University