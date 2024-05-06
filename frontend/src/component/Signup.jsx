import React from 'react'
import {useFormik} from "formik"
import {enqueueSnackbar} from "notistack"
import { useNavigate } from 'react-router-dom'


const Signup = () => {

  const navigate = useNavigate();

  const signupForm = useFormik({
    initialValues:{
      name: "",
      email: "",
      password: "",
      cpassword: ""
    },

    onSubmit : async(values) => {
      console.log(values);

      const res = await fetch("http://localhost:3000/user/add",{
        method: "POST",
        body: JSON.stringify(values),
        headers:{
          "Content-Type" : "application/json"
        },

        
      })
      console.log(res.status);
      if(res.status === 200) {
        enqueueSnackbar("user Added Successfully", {variant:"success"})
        navigate("/login")
      }else{
        enqueueSnackbar("somthing went wrong", {variant:"warning"})
      }
    }
  });
  
  return(
    <>
    <section className="vh-100" style={{ backgroundColor: "#eee" }}>
  <div className="container  justify-content-center  h-100">
    <div className="row my-5 ">
      <div className="col-md-12 ">
        <div className="card text-black" style={{ borderRadius: 25, width:900}}>
          <div className="card-body  p-md-5 col d-flex ">
            <div className="row ">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                  Sign up
                </p>
                <form className="mx-1 mx-md-4" onSubmit={signupForm.handleSubmit}>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                    <label className="form-label" htmlFor="form3Example1c">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={signupForm.values.name}
                        onChange={signupForm.handleChange}
                        className="form-control"
                      />
                     
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                    <label className="form-label" htmlFor="form3Example3c">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={signupForm.values.email}
                        onChange={signupForm.handleChange}
                        className="form-control"
                      />
                     
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                    <label className="form-label" htmlFor="form3Example4c">
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        value={signupForm.values.password}
                        onChange={signupForm.handleChange}
                        className="form-control"
                      />
                      
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                    <label className="form-label" htmlFor="form3Example4cd">
                        Repeat your password
                      </label>
                      <input
                        type="cpassword"
                        id="cpassword"
                        value={signupForm.values.cpassword}
                        onChange={signupForm.handleChange}
                        className="form-control"
                      />
                      
                    </div>
                  </div>
                  {/* <div className="form-check d-flex justify-content-center mb-5">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      defaultValue=""
                      id="form2Example3c"
                    />
                    <label className="form-check-label" htmlFor="form2Example3">
                      I agree all statements in{" "}
                      <a href="#!">Terms of service</a>
                    </label>
                  </div> */}
                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="submit" className="btn btn-primary btn-lg">
                      Register
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  className="img-fluid"
                  alt="Sample image" style={{height: 500, width:500 }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Signup