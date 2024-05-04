import React from 'react'
import { Link } from 'react-router-dom'
import { IoStarSharp } from "react-icons/io5";


const Home = () => {
  return (
    <>

<>


<<<<<<< HEAD
<div className="conatiner-fluid " style={{ height: "80vh" }}>
=======
      <div className="conatiner-fluid " style={{ height: "70vh" }}>
>>>>>>> 59ec61a9386b093fb4e8f1ead43fad03a700fd01
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
              <Link to="/College"> <button className="w-50 mt-4 fs-4 bg-blue-900 text-white py-1 font-serif hover:bg-blue-700  " style={{ borderRadius: "30px" }}>Learn More..</button>    </Link> </p>

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

  {/* Start block */}

  
  <section className="bg-gray-50 dark:bg-gray-800">
    <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
      {/* Row */}
      <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
           <img
          className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
          src="https://media.istockphoto.com/id/1279856650/photo/mid-air-shot-of-a-child-jumping-in-a-puddle-of-water-wearing-yellow-rubber-boots-and-a.jpg?s=612x612&w=0&k=20&c=ZWDHofOTcksbtWgzd9JeosG4wr4ZtbRR7QgcZ5y_NPY="
          alt="dashboard feature image"
        />
        <div className="text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Work with tools you already use
          </h2>
          <p className="mb-8 font-light lg:text-xl">
            Deliver great service experiences fast - without the complexity of
            traditional ITSM solutions. Accelerate critical development work,
            eliminate toil, and deploy changes with ease.
          </p>
          {/* List */}
          <ul
            role="list"
            className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
          >
            <li className="flex space-x-3">
              {/* Icon */}
              <svg
                className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                Continuous integration and deployment
              </span>
            </li>
            <li className="flex space-x-3">
              {/* Icon */}
              <svg
                className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                Development workflow
              </span>
            </li>
            <li className="flex space-x-3">
              {/* Icon */}
              <svg
                className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                Knowledge management
              </span>
            </li>
          </ul>
          <p className="mb-8 font-light lg:text-xl">
            Deliver great service experiences fast - without the complexity of
            traditional ITSM solutions.
          </p>
        </div>
     
      </div>
      {/* Row */}
      <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
    
        <div className="text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            We invest in the world’s potential
          </h2>
          <p className="mb-8 font-light lg:text-xl">
            Deliver great service experiences fast - without the complexity of
            traditional ITSM solutions. Accelerate critical development work,
            eliminate toil, and deploy changes with ease.
          </p>
          {/* List */}
          <ul
            role="list"
            className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
          >
            <li className="flex space-x-3">
         
              <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                Dynamic reports and dashboards
              </span>
            </li>
            <li className="flex space-x-3">
              {/* Icon */}
            
              <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                Templates for everyone
              </span>
            </li>
            <li className="flex space-x-3">
         
           
              <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                Development workflow
              </span>
            </li>
            <li className="flex space-x-3">
              {/* Icon */}
             
              <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                Limitless business automation
              </span>
            </li>
            <li className="flex space-x-3">
              {/* Icon */}
            
              <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                Knowledge management
              </span>
            </li>
          </ul>
          <p className="font-light lg:text-xl">
            Deliver great service experiences fast - without the complexity of
            traditional ITSM solutions.
          </p>
        </div>
        <img
          className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
          src="https://media.istockphoto.com/id/1409722748/photo/students-raising-hands-while-teacher-asking-them-questions-in-classroom.jpg?s=612x612&w=0&k=20&c=NbVChOV9wIbQOhUD6BqpouZHHBbyQ2rkSjaVfIhpMv8="
          alt="feature image 2"
        />
      </div>
    </div>
  </section>

  {/* <section className="bg-white dark:bg-gray-900">
    <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
      <div className="  lg:col-span-7">
        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
       Eduguru Spotlight: Unveiling the Best
        </h1>
        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
          This free and open-source landing page template was built using the
          utility classes from{" "}
          <a href="https://tailwindcss.com" className="hover:underline">
            Tailwind CSS
          </a>{" "}
          and based on the components from the{" "}
          <a
            href="https://flowbite.com/docs/getting-started/introduction/"
            className="hover:underline"
          >
            Flowbite Library
          </a>{" "}
          and the{" "}
          <a href="https://flowbite.com/blocks/" className="hover:underline">
            Blocks System
          </a>
          .
        </p>
       
      </div>
      <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
        <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202206/Best-colleges-commerce-a.jpg?VersionId=li4rgeqFtk6gbD5CNq8wdr3E2J9TVuXj&size=690:388" alt="hero image" />
      </div>
    </div>
  </section>
  */}


  {/* End block */}
  {/* Start block */}
  <section className="bg-white dark:bg-gray-900">
    <div className="items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6">
      <div className="col-span-2 mb-8">
        <p className="text-lg font-medium text-purple-600 dark:text-purple-500">
          Trusted Worldwide
        </p>
        <h2 className="mt-3 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl dark:text-white">
          Trusted by over 600 million users and 10,000 teams
        </h2>
        <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
          Our rigorous security and compliance standards are at the heart of all
          we do. We work tirelessly to protect you and your customers.
        </p>
        <div className="pt-6 mt-6 space-y-4 border-t border-gray-200 dark:border-gray-700">
          <div>
            <a
              href="#"
              className="inline-flex items-center text-base font-medium text-purple-600 hover:text-purple-800 dark:text-purple-500 dark:hover:text-purple-700"
            >
              Explore Legality Guide
              <svg
                className="w-5 h-5 ml-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
          <div>
            <a
              href="#"
              className="inline-flex items-center text-base font-medium text-purple-600 hover:text-purple-800 dark:text-purple-500 dark:hover:text-purple-700"
            >
              Visit the Trust Center
              <svg
                className="w-5 h-5 ml-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
        <div>
          <svg
            className="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z"
              clipRule="evenodd"
            />
          </svg>
          <h3 className="mb-2 text-2xl font-bold dark:text-white">
            99.99% uptime
          </h3>
          <p className="font-light text-gray-500 dark:text-gray-400">
            For Landwind, with zero maintenance downtime
          </p>
        </div>
        <div>
          <svg
            className="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
          </svg>
          <h3 className="mb-2 text-2xl font-bold dark:text-white">
            600M+ Users
          </h3>
          <p className="font-light text-gray-500 dark:text-gray-400">
            Trusted by over 600 milion users around the world
          </p>
        </div>
        <div>
          <svg
            className="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
              clipRule="evenodd"
            />
          </svg>
          <h3 className="mb-2 text-2xl font-bold dark:text-white">
            100+ countries
          </h3>
          <p className="font-light text-gray-500 dark:text-gray-400">
            Have used Landwind to create functional websites
          </p>
        </div>
        <div>
          <svg
            className="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
          </svg>
          <h3 className="mb-2 text-2xl font-bold dark:text-white">
            5+ Million
          </h3>
          <p className="font-light text-gray-500 dark:text-gray-400">
            Transactions per day
          </p>
        </div>
      </div>
    </div>
  </section>
  {/* End block */}
  {/* Start block */}
  <section className="bg-gray-50 dark:bg-gray-800">
    <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-24 lg:px-6">
      <figure className="max-w-screen-md mx-auto">
        <svg
          className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
          viewBox="0 0 24 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
            fill="currentColor"
          />
        </svg>
        <blockquote>
          <p className="text-xl font-medium text-gray-900 md:text-2xl dark:text-white">
            "Landwind is just awesome. It contains tons of predesigned
            components and pages starting from login screen to complex
            dashboard. Perfect choice for your next SaaS application."
          </p>
        </blockquote>
        <figcaption className="flex items-center justify-center mt-6 space-x-3">
          <img
            className="w-6 h-6 rounded-full"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
            alt="profile picture"
          />
          <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
            <div className="pr-3 font-medium text-gray-900 dark:text-white">
              Micheal Gough
            </div>
            <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
              CEO at Google
            </div>
          </div>
        </figcaption>
      </figure>
    </div>
  </section>
  {/* End block */}
  {/* Start block */}
 

 
</>



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