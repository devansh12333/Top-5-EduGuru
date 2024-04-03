import { FaSearchDollar } from "react-icons/fa";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { MdContactPage } from "react-icons/md";
import { FaBalanceScale } from "react-icons/fa";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import "App.css"


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Home = () => {
  return (
    <>

<div className="conatiner" style={{ height: "90vh" }}>
        <div className="row px-5 shadow-lg py-5">
          <div className="col-md-7  py-3 mt-5 px-16 pt-16">
            <p className="fs-2 fw-semibold font-serif text-yellow-600">Discover and Compare Schools,Universities, Colleges, and Playway Centers Near You</p>
            <p className="mt-3 fs-5">  Whether you&apos;re searching for top-notch colleges, reputable schools, or nurturing playway centers, we&apos;ve got you covered. From academic excellence to engaging playway programs, EducationHub is your trusted guide in navigating the educational landscape. Start your journey towards quality education today!</p>
          </div>
          <div className="col-md-5">
            <img className=' w-75 pt-12' src="https://img.freepik.com/premium-vector/young-man-searching-internet_456660-290.jpg?w=740" alt="" />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row bg-primary  mb-5" style={{borderRadius:"30px",height:"30vh"}}>
          <div className="col-md-3  d-flex align-items-center justify-content-center ">
          <p className="fs-1  text-warning   mb-3"><FaSearchDollar /></p>
          <p className="fs-5 fw-semibold font-mono text-white text-center">Save 100s of hour <br /> on Searching</p>
          </div>
          <div className="col-md-3  d-flex align-items-center justify-content-center ">
          <p className="fs-1  text-warning mb-3"><MdContactPage  /></p>
          <p className="fs-5 fw-semibold font-mono text-white text-center">Playway,School,College and University in one place</p>
          </div>
          <div className="col-md-3  d-flex align-items-center justify-content-center">
          <p className="fs-1  text-warning mb-3"><FaBalanceScale /></p>
          <p className="fs-5 fw-semibold font-mono text-white text-center">Merit and Scholarship</p>
          </div>
          <div className="col-md-3  d-flex align-items-center justify-content-center">
          <p className="fs-1  text-warning mb-3"><FaSearchDollar /></p>
          <p className="fs-5 fw-semibold font-mono text-white text-center">Save 100s of hour <br /> on Searching</p>
          </div>
       
        </div>
      </div>

      <div className="container-fluid bg-dark bg-opacity-25 " style={{ background: "linear-gradient(to bottom,#e0c374,white,white" }}>
        <div className="row  ">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="bg-img background-size:cover">
                <div className="card bg-light bg-opacity-25" style={{ height: "80vh" }}>
                    <img src="data:image/jpeg;base64,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" alt="" />
                  {/* <InputGroup className="mb-3 w-75 mx-auto pt-5">
              
                    <InputGroup.Text id="basic-addon2" className="px-4 fs-5 bg-dark bg-opacity-75 text-white">
                      <FaSearch />
                    </InputGroup.Text>
                  </InputGroup> */}
                  <h1 className="px-5  text-center  text-white bg-dark bg-opacity-75 py-3" style={{ fontSize: "35px", fontFamily: "serif", marginTop: "120px" }}>Exploring Top-Tier Educational Institutions: <br /> Unveiling the Best 5 Colleges for Academic Excellence</h1>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-img-1">
                <div className="card bg-light bg-opacity-25" style={{ height: "80vh" }}>
                    <img src="https://www.lamartinierelucknow.org/wp-content/uploads/Aerial-View-of-Constantia1-1000x450.jpg" alt="" />
                    
                  {/* <InputGroup className="mb-3 w-75 mx-auto pt-5">
                    <Form.Control
                      className="bg-dark bg-opacity-75 search py-2 text-white"
                      placeholder="Search"
                      aria-label="Search"
                      aria-describedby="basic-addon2"
                    />
                    <InputGroup.Text id="basic-addon2" className="px-4 fs-5 bg-dark bg-opacity-75 text-white">
                      <FaSearch />
                    </InputGroup.Text>
                  </InputGroup> */}
                  <h1 className="px-5 text-center  text-white bg-dark bg-opacity-75 py-3" style={{ fontSize: "35px", marginTop: "120px", fontFamily: "serif" }} >Exploring Top-Tier Educational Institutions: <br /> Unveiling the Best 5 Colleges for Academic Excellence</h1>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      






       <div className="py-5 mb-5" style={{ height: "90vh", background: "linear-gradient(to bottom,white,white,#e0c374" }}>
        <div className="container  ">
          <div className="row py-4 px-4 shadow-lg  mt-5">
            <div className="col-md-6 px-3  mt-5">

              <h1 className="mt-3 " style={{ fontFamily: "fantasy", letterSpacing: "1px", fontSize: "35px" }}>Discover, Compare, Choose</h1>
              <p className="fs-5 mt-4">Top5 Eduguru simplify your decision-making process by curating a list of the best five institutions in each category. Our mission is to provide comprehensive insights, helping you make informed choices that align with your educational goals. With Top 5 Eduguru, embark on your academic journey with confidence and find excellence in education.
                <br /> <button className="w-50 btn mt-3 fs-5 btn-primary rounded-lg" >Learn More..</button>  </p>
            </div>
            <div className="col-md-3 mt-5">
              <img src="https://i.pinimg.com/236x/88/c7/a2/88c7a23546a9ea851b888a6a51dcecf6.jpg" alt="" />
            </div>

            <div className="col-md-3 mt-5">

              <img src="https://i.pinimg.com/236x/7b/d1/dd/7bd1dd8219e3a12afa53f61c1ac84f97.jpg" alt="" />
            </div>
            {/* <div className="col-md-3">
            <img src="https://i.pinimg.com/236x/9a/09/3e/9a093ee803c8ad6dd488f74ba71778ba.jpg" alt="" />

          </div> */}
          </div>
        </div>
      </div>  

    </>

  )
}

export default Home