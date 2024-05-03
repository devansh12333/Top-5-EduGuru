import React from 'react'
import { Link } from 'react-router-dom'
import { IoStarSharp } from "react-icons/io5";

const Home = () => {
  return (
    <>



      <div className="conatiner-fluid " style={{ height: "70vh" }}>
        <div className="row p-5">
          <div className="col-md-6">
            <span className='d-flex fs-5 ' style={{ color: "rgb(209, 189, 8)" }}> <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp /></span>
            <p className="">Trusted by 1M+ users</p>
            <p className="mt-3 " style={{ fontFamily: "fantasy", letterSpacing: "1px", fontSize: "35px" }}>Discover, Compare, Choose</p>
            <p className="fs-5 mt-4">Top5 Eduguru simplify your decision-making process by curating a list of the best five institutions in each category. Our mission is to provide comprehensive insights, helping you make informed choices that align with your educational goals. With Top 5 Eduguru, embark on your academic journey with confidence and find excellence in education.
              <br />
              <Link to="/College"> <button className="w-50 mt-4 fs-4 navbar-2 " style={{ borderRadius: "30px" }}>Learn More..</button>    </Link> </p>

          </div>
          <div className="col-md-6">
            <img
              className="img-fluid rounded w-100"
              loading="lazy"
              src="https://image.cnbcfm.com/api/v1/image/106922887-1628206615260-gettyimages-887132600-as1700__08.jpeg?v=1628206641"
              alt=""

            />
          </div>
        </div>
      </div>



      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://images.shiksha.com/mediadata/images/1558510681phphTCZL5.jpeg" className="d-block w-30" alt="..." style={{ height: 500, width: 1600 }} />
          </div>
          <div className="carousel-item">
            <img src="https://img.staticmb.com/mbcontent/images/uploads/2023/8/DPS-Eldeco%20(1).jpg" className="d-block w-30" alt="..." style={{ height: 500, width: 1600 }} />
          </div>
          <div className="carousel-item">
            <img src="https://lucknowkindergarten.com.au/wp-content/uploads/2022/09/benefits-img1.jpg" className="d-block w-30" alt="..." style={{ height: 500, width: 1600 }} />
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

      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-md-3">
            <div className="card shadow" style={{ border: "none"}}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/BBDU_Main_Building.jpg" className="card-img-top img-fluid w-100" alt="..." />
              <div className="card-body">
                <p className=" fs-5 fw-semibold">University</p>
                <p className="mb-3">
                  Get top 5 University in Lucknow
                </p>
                <Link to="/University" style={{ fontFamily: "serif" }} className="btn mx-auto d-block btn-primary">
                  Explore University
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card shadow" style={{ border: "none" }}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROBlFINSMGLeG4EMAMvPo2guNNivTXfbw0DoPTTkoh5Q&s" className="card-img-top img-fluid w-100" alt="..." />
              <div className="card-body">
                <p className="fs-5 fw-semibold">College</p>
                <p className="mb-3">
                  Get top 5 College in Lucknow
                </p>
                <Link to="/College" style={{ fontFamily: "serif" }} className="btn mx-auto d-block btn-primary">
                  Explore College
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card shadow" style={{ border: "none" }}>
              <img src="https://indusvalleylucknow.in/wp-content/uploads/2023/01/Indus-Valley-Public-School-Lucknow-Best-CBSE-School-in-Jankipuram-Lucknow-1.webp" className="card-img-top img-fluid w-100" alt="..." />
              <div className="card-body">
                <p className="fs-5 fw-semibold">School</p>
                <p className="mb-3">
                  Get top 5 school in Lucknow
                </p>
                <Link to="/School" className="btn btn-primary mx-auto d-block">
                  Explore School
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card shadow" style={{ border: "none" }}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuZUSgEsJuUcJTqsd34ptrj208NMULis__X-LPMZgNcw&s" className="card-img-top img-fluid w-100" alt="..." />
              <div className="card-body">
                <p className="fs-5 fw-semibold">Playway</p>
                <p className="mb-3">
                  Get top5 Playway in Lucknow
                </p>
                <Link to="Playway" className="btn btn-primary mx-auto d-block">
                  Explore Playway
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>


      <>
        {/* Background image */}
        <div
          className="bg-image  d-flex justify-content-center align-items-center  text-center shadow-1-strong rounded mb-5 text-white"
          style={{
            backgroundImage:
              'url("https://s26162.pcdn.co/wp-content/uploads/sites/3/2023/02/used-books.jpg")',
            height: "15rem", backgroundRepeat: "no-repeat", WebkitBackgroundSize: "cover"
          }}
        >
          <div className='container d-flex justify-content-center py-5 bg-black bg-opacity-50'>
            <div className=' text-center text-white col-md-3'>
              <i class="  bi bi-mortarboard-fill" style={{ fontSize: "5rem" }}></i>
              <h4>University</h4>
              <h5>125</h5>
            </div>
            <div className='text-center text-white col-md-3'>
              <i class="  bi bi-book-half" style={{ fontSize: "5rem" }}></i>
              <h4>College</h4>
              <h5>175</h5>
            </div>
            <div className='text-center text-white col-md-3' >
              <i class="  bi bi-backpack4-fill" style={{ fontSize: "5rem" }}></i>
              <h4>School</h4>
              <h5>130</h5>
            </div>
            <div className='text-center text-white col-md-3'>
              <i class="bi bi-dribbble" style={{ fontSize: "5rem" }}></i>
              <h4>Playway</h4>
              <h5>110</h5>
            </div>

          </div>
        </div>

      </>



      <>
        {/* About 1 - Bootstrap Brain Component */}
        <section className="py-3 py-md-5 py-xl-8">
          <div className="container d-flex justify-content-center">
            <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">

              <div className="col-md-3 mt-5">
                <img src="https://i.pinimg.com/236x/88/c7/a2/88c7a23546a9ea851b888a6a51dcecf6.jpg" className='w-100' alt="" />
              </div>

              <div className="col-md-3 mt-5">

                <img src="https://i.pinimg.com/236x/7b/d1/dd/7bd1dd8219e3a12afa53f61c1ac84f97.jpg" className='w-100' alt="" />
              </div>

              <div className="col-md-6  mt-5 ">
                <div className="row justify-content-xl-center">
                  <div className="col-12 col-xl-11">
                    <p className="fs-2 fw-semibold  mb-3">Who Are We?</p>
                    <p className="lead mb-5 fs-4 text-secondary mb-3">
                      Top 5 Eduguru simplifies the educational decision-making process by offering a central platform with comprehensive institution information and user reviews for students and parents.
                    </p>

                    <div className="row gy-4 gy-md-0 gx-xxl-5X">
                      <div className="col-12 col-md-6 shadow -lg p-4 bg-primary bg-opacity-25 rounded">
                        <div className="d-flex">
                          <div className="me-4 text-primary">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={32}
                              height={32}
                              fill="currentColor"
                              className="bi bi-gear-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                            </svg>
                          </div>
                          <div>
                            <p className="mb-2 fs-5 fw-semibold">24x7</p>
                            <p className="text-secondary mb-0">
                              We are crafting a digital method that subsists life
                              across all mediums.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-1"></div>
                      <div className="col-12 col-md-5 shadow -lg p-4 bg-primary bg-opacity-25 rounded ">
                        <div className="d-flex">
                          <div className="me-4 text-primary">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={32}
                              height={32}
                              fill="currentColor"
                              className="bi bi-fire"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z" />
                            </svg>
                          </div>
                          <div>
                            <p className="mb-2 fs-5">Digital Agency</p>
                            <p className="text-secondary mb-0">
                              We believe in innovation by merging primary with
                              elaborate ideas.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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