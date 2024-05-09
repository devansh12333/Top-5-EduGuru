import React from 'react'

const University = () => {
<<<<<<< HEAD
=======
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
      
        <div className="row h-50 shadow mb-3">
          <div className="col-md-3">
            <Link to={`/Mainpage/ViewUniversity/${col._id}`}> <img src={'http://localhost:3000/' + col.image} alt="" className="card-img-top p-3 img-fluid" style={{ objectFit: "cover", height: 200 }} />
            </Link>
          <div className="col-md-6 py-4">
            <h2 className=' fw-semibold fs-5 mt-3 mb-3 ' style={{ fontFamily: "serif" }}>{col.universityname}</h2>
            <p className='text-muted me-3' style={{ fontFamily: "serif" }}>{col.courses}</p>
            <p className='text-muted me-3' style={{ fontFamily: "cursive" }}>{col.phone}</p>
            <p className='text-muted ' style={{ fontFamily: "cursive" }}>{col.email}</p>


          </div>


          <div className="col-md-3">

          </div>
        </div>

      </div>
      </>
  ))
  }

>>>>>>> 8e86fdeffe18f03d934e077d6661e42eaeba5c0e
  return (
    <div>
      uinversity
    </div>
  )
}

export default University
