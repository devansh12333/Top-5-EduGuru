import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import Sidebar from "./Sidebar"
import { FaSearch } from "react-icons/fa"

const College = () => {
  const [College, setCollege] = useState([])

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
            name: product.collegename,
            averageRating,
          };
        });

        // Sort products by average rating in descending order
        const sortedProducts = processedProducts.sort((a, b) => b.averageRating - a.averageRating);

        // Set top 5 products to state
        setProducts(sortedProducts.slice(0, 5));
      });
  }, []);

  const fetchCollegeData = async () => {
    const res = await fetch("http://localhost:3000/college/getall");
    console.log(res.status);
    if (res.status === 200) {
      const data = await res.json();
      console.log(data);
      setCollege(data)
      setfilterList(data)
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

    return College.map((col) => (
      <>
        <div className="row h-50 mt-5 shadow mb-3">
          <div className="col-md-3  ">
            <Link to={`/Main/ViewCollege/${col._id}`}> <img src={'http://localhost:3000/' + col.image} alt="" className="card-img-top p-3" style={{ objectFit: "cover", height: 200 }} />
            </Link>
          </div>


          <div className="col-md-6 py-4">
            <h2 className=' fw-semibold fs-5 mt-3 mb-3 ' style={{ fontFamily: "serif" }}>{col.collegename}</h2>
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
        {displayCollegeData()}
      </div>

    </>
  )
}

export default College