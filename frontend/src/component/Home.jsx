import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
<div
  id="carouselExampleControls"
  className="carousel slide"
  data-bs-ride="carousel"
>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://images.shiksha.com/mediadata/images/1558510681phphTCZL5.jpeg" className="d-block w-30" alt="..." style={{height:500, width:1600}}/>
    </div>
    <div className="carousel-item">
      <img src="https://img.staticmb.com/mbcontent/images/uploads/2023/8/DPS-Eldeco%20(1).jpg" className="d-block w-30" alt="..."style={{height:500, width:1600}} />
    </div>
    <div className="carousel-item">
  <img src="https://lucknowkindergarten.com.au/wp-content/uploads/2022/09/benefits-img1.jpg" className="d-block w-30" alt="..." style={{height:500, width:1600}}/>
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleControls"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleControls"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
<hr />

<div className="container py-5">
  <div className="row">
    <div className="col-md-3">
    <div className="card" style={{ width: "18rem" }}>
  <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/BBDU_Main_Building.jpg" className="card-img-top" alt="..." style={{height:250, width:287}}/>
  <div className="card-body">
    <h5 className="card-title">University</h5>
    <p className="card-text">
       get top 5 University in Lucknow
    </p>
    <a href="#" className="btn btn-primary">
      Explore University
    </a>
  </div>
</div>
    </div>
    <div className="col-md-3">
    <div className="card" style={{ width: "18rem" }}>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROBlFINSMGLeG4EMAMvPo2guNNivTXfbw0DoPTTkoh5Q&s" className="card-img-top" alt="..."style={{height:250, width:287}} />
  <div className="card-body">
    <h5 className="card-title">College</h5>
    <p className="card-text">
       get top 5 College in Lucknow
    </p>
    <a href="#" className="btn btn-primary">
      Explore College
    </a>
  </div>
</div>
    </div>
    <div className="col-md-3">
    <div className="card" style={{ width: "18rem" }}>
  <img src="https://img.staticmb.com/mbcontent/images/uploads/2023/8/Lucknow-public-school.jpg" className="card-img-top" alt="..."style={{height:250, width:287}} />
  <div className="card-body">
    <h5 className="card-title">School</h5>
    <p className="card-text">
       get top 5 school in Lucknow
    </p>
    <a href="#" className="btn btn-primary">
      Explore School
    </a>
  </div>
</div>
    </div>
    <div className="col-md-3">
    <div className="card" style={{ width: "18rem" }}>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuZUSgEsJuUcJTqsd34ptrj208NMULis__X-LPMZgNcw&s" className="card-img-top" alt="..."style={{height:250, width:287}} />
  <div className="card-body">
    <h5 className="card-title">Playway</h5>
    <p className="card-text">
       get top 5 Playway in Lucknow
    </p>
    <a href="#" className="btn btn-primary">
      Explore Playway
    </a>
  </div>
</div>
    </div>
    </div>
    
  </div>
  

  <>
  {/* Background image */}
  <div
    className="bg-image  text-center shadow-1-strong rounded mb-5 text-white"
    style={{
      backgroundImage:
        'url("https://s26162.pcdn.co/wp-content/uploads/sites/3/2023/02/used-books.jpg")',
        height: "30rem", width:"101rem", backgroundRepeat:"no-repeat",WebkitBackgroundSize:"cover", opacity:"0.8"
    }}
  >
    <div className='container d-flex justify-content-center py-5'>
<div className='me-4 text-white col-md-3'>
<i class="  bi bi-mortarboard-fill"style={{fontSize:"5rem"}}></i>
<h4>University</h4>
<h5>125</h5>
</div>
<div className='me-4 text-white col-md-3'>
<i class="  bi bi-book-half"style={{fontSize:"5rem"}}></i>
<h4>College</h4>
<h5>175</h5>
</div>
<div className='me-4 text-white col-md-3' >
<i class="  bi bi-backpack4-fill"style={{fontSize:"5rem"}}></i>
<h4>School</h4>
<h5>130</h5>
</div>
<div className='me-4 text-white col-md-3'>
<i class="bi bi-dribbble"style={{fontSize:"5rem"}}></i>
<h4>Playway</h4>
<h5>110</h5>
</div>

</div>
  </div>
 
</>

 <>
{/* Footer */}
  <footer className="text-center text-lg-start bg-body-tertiary text-muted ">
    {/* Section: Social media */}
    <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom text-white bg-dark">
      {/* Left */}
      <div className="ms-5 d-none d-lg-block ">
        <span>Get connected with us on social networks:</span>
      </div>
      {/* Left */}
      {/* Right */}
      <div>
        <Link href="" className="me-4 text-reset">
        <i class="bi bi-facebook"></i>
        </Link>
        <Link href="" className="me-4 text-reset">
        <i class="bi bi-twitter"></i>
        </Link>
        <Link href="" className="me-4 text-reset">
        <i class="bi bi-google"></i>
        </Link>
        <Link href="" className="me-4 text-reset">
        <i class="bi bi-instagram"></i>
        </Link>
        <Link href="" className="me-4 text-reset">
        <i class="bi bi-linkedin"></i>
        </Link>
        <a href="" className="me-4 text-reset">
        <i class="bi bi-github"></i>
        </a>
      </div>
      {/* Right */}
    </section>
    {/* Section: Social media */}
    {/* Section: Links  */}
    <section className="text-white bg-dark">
      <div className="container text-center text-md-start">
        {/* Grid row */}
        <div className="row py-5">
          {/* Grid column */}
          <div className="col-md-4 col-lg-4 col-xl-3 mx-auto mb-4">
            {/* Content */}
            <h6 className="text-uppercase fw-bold mb-4">
              <i className="fas fa-gem me-3" />
              Company name
            </h6>
            <p>
              Here you can use rows and columns to organize your footer content.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            {/* Links */}
            <h6 className="text-uppercase fw-bold mb-4">Products</h6>
            <p>
              <a href="#!" className="text-reset">
                Angular
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                React
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Vue
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Laravel
              </a>
            </p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            {/* Links */}
            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
            <p>
              <i className="fas fa-home me-3" /> New York, NY 10012, US
            </p>
            <p>
              <i className="fas fa-envelope me-3" />
              info@example.com
            </p>
            <p>
              <i className="fas fa-phone me-3" /> + 01 234 567 88
            </p>
            <p>
              <i className="fas fa-print me-3" /> + 01 234 567 89
            </p>
          </div>
          {/* Grid column */}
        </div>
        {/* Grid row */}
      </div>
    </section>
    {/* Section: Links  */}
    {/* Copyright */}
    <div
      className="text-center p-4 text-white bg-dark"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
    >
      © 2021 Copyright:
      <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
        MDBootstrap.com
      </a>
    </div>
    {/* Copyright */}
  </footer>
  {/* Footer */}
</>











    </>
  )
}

export default Home