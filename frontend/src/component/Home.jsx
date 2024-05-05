import React from 'react'
import { Link } from 'react-router-dom'
import { IoStarSharp } from "react-icons/io5";
import Logo from '../../public/Logo.png'


const Home = () => {
  return (
    <>

<>


<div className="conatiner-fluid " style={{ height: "80vh" }}>
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

<hr />
  <footer className="bg-blue-100 pt-5 shadow dark:bg-gray-900">
  <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
    <div className="md:flex md:justify-between">
      <div className="mb-6 md:mb-0">
        <a href="/" className="flex items-center">
          <img
            src={Logo}
            className="h-28 me-3"
            alt="Logo"
          />       
        </a>       
      </div>
      <div>
  <label
    htmlFor="price"
    className="block text-lg font-medium leading-6 text-gray-900"
  >
    Subscribe to our newsletter
  </label>
  <div className="relative mt-2 rounded-md shadow-sm">
    <input
      type="text"
      name="price"
      id="price"
      className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      placeholder="Subscribe"
    />
    <div className="absolute inset-y-0 right-0 flex items-center">
   <button className="bg-yellow-600 text-white py-1 px-3">Subscribe </button>
    </div>
  </div>
</div>


      <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
        <div>
          <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
            Resources
          </h2>
          <ul className="text-gray-500 dark:text-gray-400 font-medium">
            <li className="mb-4">
              <a href="/Main/College" className="hover:underline">
                College
              </a>
            </li>
            <li className='mb-4'>
              <a href="/Main/School" className="hover:underline">
                School
              </a>
            </li>
            <li className='mb-4'>
              <a href="/Main/Playway" className="hover:underline">
                Playway
              </a>
            </li>
            <li>
              <a href="/Main/University" className="hover:underline">
                University
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
            Follow us
          </h2>
          <ul className="text-gray-500 dark:text-gray-400 font-medium">
            <li className="mb-4">
              <a
                href="https://github.com/themesberg/flowbite"
                className="hover:underline "
              >
                Github
              </a>
            </li>
            <li>
              <a
                href="https://discord.gg/4eeurUVvTy"
                className="hover:underline"
              >
                Discord
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
            Legal
          </h2>
          <ul className="text-gray-500 dark:text-gray-400 font-medium">
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms &amp; Conditions
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <div className="sm:flex sm:items-center sm:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2023{" "}
        <a href="https://flowbite.com/" className="hover:underline">
          Flowbite™
        </a>
        . All Rights Reserved.
      </span>
      <div className="flex mt-4 sm:justify-center sm:mt-0">
        <a
          href="#"
          className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
        >
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 8 19"
          >
            <path
              fillRule="evenodd"
              d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
              clipRule="evenodd"
            />
          </svg>
          <span className="sr-only">Facebook page</span>
        </a>
        <a
          href="#"
          className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
        >
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 21 16"
          >
            <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
          </svg>
          <span className="sr-only">Discord community</span>
        </a>
        <a
          href="#"
          className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
        >
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 17"
          >
            <path
              fillRule="evenodd"
              d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
              clipRule="evenodd"
            />
          </svg>
          <span className="sr-only">Twitter page</span>
        </a>
        <a
          href="#"
          className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
        >
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
              clipRule="evenodd"
            />
          </svg>
          <span className="sr-only">GitHub account</span>
        </a>
        <a
          href="#"
          className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
        >
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
              clipRule="evenodd"
            />
          </svg>
          <span className="sr-only">Dribbble account</span>
        </a>
      </div>
    </div>
  </div>
</footer>

    </>
  )
}

export default Home