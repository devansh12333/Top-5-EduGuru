import React from 'react'

const Home = () => {
  return (
    
   <>
    <>
  {/* Carousel wrapper */}
  <div
    id="carouselBasicExample"
    className="carousel slide carousel-fade"
    data-mdb-ride="carousel"
  >
    {/* Indicators */}
    <div className="carousel-indicators">
      <button
        type="button"
        data-mdb-target="#carouselBasicExample"
        data-mdb-slide-to={0}
        className="active"
        aria-current="true"
        aria-label="Slide 1"
      />
      <button
        type="button"
        data-mdb-target="#carouselBasicExample"
        data-mdb-slide-to={1}
        aria-label="Slide 2"
      />
      <button
        type="button"
        data-mdb-target="#carouselBasicExample"
        data-mdb-slide-to={2}
        aria-label="Slide 3"
      />
    </div>
    {/* Inner */}
    <div className="carousel-inner">
      {/* Single item */}
      <div className="carousel-item active">
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp"
          className="d-block w-100"
          alt="Sunset Over the City"
        />
        <div className="carousel-caption d-none d-md-block">
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
      </div>
      {/* Single item */}
      <div className="carousel-item">
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp"
          className="d-block w-100"
          alt="Canyon at Nigh"
        />
        <div className="carousel-caption d-none d-md-block">
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      {/* Single item */}
      <div className="carousel-item">
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp"
          className="d-block w-100"
          alt="Cliff Above a Stormy Sea"
        />
        <div className="carousel-caption d-none d-md-block">
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </div>
      </div>
    </div>
    {/* Inner */}
    {/* Controls */}
    <button
      className="carousel-control-prev"
      type="button"
      data-mdb-target="#carouselBasicExample"
      data-mdb-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-mdb-target="#carouselBasicExample"
      data-mdb-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  {/* Carousel wrapper */}
  <>
  {/* Carousel wrapper */}
  <div
    id="carouselMultiItemExample"
    className="carousel slide carousel-dark text-center"
    data-mdb-ride="carousel"
  >
    {/* Controls */}
    <div className="d-flex justify-content-center mb-4">
      <button
        className="carousel-control-prev position-relative"
        type="button"
        data-mdb-target="#carouselMultiItemExample"
        data-mdb-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next position-relative"
        type="button"
        data-mdb-target="#carouselMultiItemExample"
        data-mdb-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    {/* Inner */}
    <div className="carousel-inner py-4">
      {/* Single item */}
      <div className="carousel-item active">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="card">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/standard/nature/181.webp"
                  className="card-img-top"
                  alt="Waterfall"
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#!" className="btn btn-primary">
                    Button
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 d-none d-lg-block">
              <div className="card">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/standard/nature/182.webp"
                  className="card-img-top"
                  alt="Sunset Over the Sea"
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#!" className="btn btn-primary">
                    Button
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 d-none d-lg-block">
              <div className="card">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/standard/nature/183.webp"
                  className="card-img-top"
                  alt="Sunset over the Sea"
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#!" className="btn btn-primary">
                    Button
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Single item */}
      <div className="carousel-item">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12">
              <div className="card">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp"
                  className="card-img-top"
                  alt="Fissure in Sandstone"
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#!" className="btn btn-primary">
                    Button
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 d-none d-lg-block">
              <div className="card">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/standard/nature/185.webp"
                  className="card-img-top"
                  alt="Storm Clouds"
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#!" className="btn btn-primary">
                    Button
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 d-none d-lg-block">
              <div className="card">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/standard/nature/186.webp"
                  className="card-img-top"
                  alt="Hot Air Balloons"
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#!" className="btn btn-primary">
                    Button
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Single item */}
      <div className="carousel-item">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
              <div className="card">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/standard/nature/187.webp"
                  className="card-img-top"
                  alt="Peaks Against the Starry Sky"
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#!" className="btn btn-primary">
                    Button
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4 mb-lg-0 d-none d-lg-block">
              <div className="card">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/standard/nature/188.webp"
                  className="card-img-top"
                  alt="Bridge Over Water"
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#!" className="btn btn-primary">
                    Button
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4 mb-lg-0 d-none d-lg-block">
              <div className="card">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/standard/nature/189.webp"
                  className="card-img-top"
                  alt="Purbeck Heritage Coast"
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#!" className="btn btn-primary">
                    Button
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Inner */}
  </div>
  {/* Carousel wrapper */}
  <>
  {/* Modal gallery */}
  <section className="">
    {/* Section: Images */}
    <section className="">
      <div className="row">
        <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
          <div
            className="bg-image hover-overlay ripple shadow-1-strong rounded"
            data-ripple-color="light"
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/screens/yt/screen-video-1.webp"
              className="w-100"
            />
            <a
              href="#!"
              data-mdb-toggle="modal"
              data-mdb-target="#exampleModal1"
            >
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
              />
            </a>
          </div>
        </div>
        <div className="col-lg-4 mb-4 mb-lg-0">
          <div
            className="bg-image hover-overlay ripple shadow-1-strong rounded"
            data-ripple-color="light"
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/screens/yt/screen-video-2.webp"
              className="w-100"
            />
            <a
              href="#!"
              data-mdb-toggle="modal"
              data-mdb-target="#exampleModal2"
            >
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
              />
            </a>
          </div>
        </div>
        <div className="col-lg-4 mb-4 mb-lg-0">
          <div
            className="bg-image hover-overlay ripple shadow-1-strong rounded"
            data-ripple-color="light"
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/screens/yt/screen-video-3.webp"
              className="w-100"
            />
            <a
              href="#!"
              data-mdb-toggle="modal"
              data-mdb-target="#exampleModal3"
            >
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
    {/* Section: Images */}
    {/* Section: Modals */}
    <section className="">
      {/* Modal 1 */}
      <div
        className="modal fade"
        id="exampleModal1"
        tabIndex={-1}
        aria-labelledby="exampleModal1Label"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/A3PDXmYoF5U"
                title="YouTube video"
                allowFullScreen=""
              />
            </div>
            <div className="text-center py-3">
              <button
                type="button"
                className="btn btn-secondary"
                data-mdb-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Modal 2 */}
      <div
        className="modal fade"
        id="exampleModal2"
        tabIndex={-1}
        aria-labelledby="exampleModal2Label"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/wTcNtgA6gHs"
                title="YouTube video"
                allowFullScreen=""
              />
            </div>
            <div className="text-center py-3">
              <button
                type="button"
                className="btn btn-secondary"
                data-mdb-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Modal 3 */}
      <div
        className="modal fade"
        id="exampleModal3"
        tabIndex={-1}
        aria-labelledby="exampleModal3Label"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/vlDzYIIOYmM"
                title="YouTube video"
                allowFullScreen=""
              />
            </div>
            <div className="text-center py-3">
              <button
                type="button"
                className="btn btn-secondary"
                data-mdb-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Section: Modals */}
  </section>
  {/* Modal gallery */}
</>

</>

</>

   </>
  )
}



export default Home