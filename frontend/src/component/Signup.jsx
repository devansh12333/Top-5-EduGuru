import React from 'react'
import { useFormik } from "formik"
import { enqueueSnackbar } from "notistack"
import { Link, useNavigate } from 'react-router-dom'


const Signup = () => {

  const navigate = useNavigate();

  const signupForm = useFormik({
    initialValues: {
      name: "",
      email: "",
      avatar: "",
      password: "",
      cpassword: ""
    },

    onSubmit: async (values) => {
      console.log(values);

      const res = await fetch("http://localhost:3000/user/add", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json"
        },


      })
      console.log(res.status);
      if (res.status === 200) {
        enqueueSnackbar("user Added Successfully", { variant: "success" })
        navigate("/login")
      } else {
        enqueueSnackbar("somthing went wrong", { variant: "warning" })
      }
    }
  });

  const uploadFile = (e) => {
    const file = e.target.files[0];
    console.log(file);
    const fd = new FormData();
    fd.append('myfile', file);
    fetch('http://localhost:5000/util/uploadfile', {
      method: 'POST',
      body: fd

    })
      .then((response) => {
        if (response.status === 200) {
          toast.success('Photo Upload');
          response.json()
            .then((data) => {
              signupForm.values.avatar = data.savedFile;
            })
        } else {
          toast.error('some error occured')
        }
      }).catch((err) => {
        console.log(err);
        toast.error('some error occured')
      });
  }

  return (
    <>

      <>
        {/* component */}
        <style
          dangerouslySetInnerHTML={{
            __html:
              "@import url('https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css')"
          }}
        />
        <form className="mx-1 mx-md-4" onSubmit={signupForm.handleSubmit}>
          <div className="min-w-screen min-h-screen  flex items-center justify-center px-5 py-5">
            <div
              className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden"
              style={{ maxWidth: 1000 }}
            >
              <div className="md:flex w-full">
                <div className="hidden md:block w-1/2 py-10 px-10">
                  <img className='h-full' src="https://static.vecteezy.com/system/resources/previews/010/308/207/original/online-education-cartoon-icon-illustration-education-technology-icon-concept-isolated-premium-flat-cartoon-style-vector.jpg" alt="" />

                </div>
                <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
                  <div className="text-center mb-10">
                    <h1 className="font-bold text-3xl text-blue-900">REGISTER</h1>
                    <p>Enter your information to register</p>
                  </div>
                  <div>


                    <div className="flex -mx-3">
                      <div className="w-full px-3 mb-3">
                        <label htmlFor="" className="text-xs font-semibold px-1">
                          Name
                        </label>
                        <div className="flex">
                          <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                            <i className="mdi mdi-account-outline text-gray-400 text-lg" />

                          </div>
                          <input
                            type="text"
                            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                            placeholder="Devansh"
                            id="name"
                            value={signupForm.values.name}
                            onChange={signupForm.handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex -mx-3">
                      <div className="w-full px-3 mb-3">
                        <label htmlFor="" className="text-xs font-semibold px-1">
                          Email
                        </label>
                        <div className="flex">
                          <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                            <i className="mdi mdi-email-outline text-gray-400 text-lg" />
                          </div>
                          <input
                            type="email"
                            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                            placeholder="Sudhanshu@example.com"
                            id="email"
                            value={signupForm.values.email}
                            onChange={signupForm.handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex -mx-3">
                      <div className="w-full px-3 mb-2">
                        <label htmlFor="" className="text-xs font-semibold px-1">
                          Image
                        </label>
                        <div className="flex">
                          <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">

                          </div>
                          <input
                            type="file"
                            onChange={uploadFile}
                            required=''
                            value={signupForm.values.avatar}
                            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                            placeholder="johnsmith@example.com"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="flex -mx-3 w-1/2">
                        <div className="w-full px-3 mb-3">
                          <label htmlFor="" className="text-xs font-semibold px-1">
                            Password
                          </label>
                          <div className="flex">
                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                              <i className="mdi mdi-lock-outline text-gray-400 text-lg" />
                            </div>
                            <input
                              type="password"
                              className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500 "
                              placeholder="************"
                              id="password"
                              value={signupForm.values.password}
                              onChange={signupForm.handleChange}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex -mx-3 w-1/2">
                        <div className="w-full px-3 mb-3">
                          <label htmlFor="" className="text-xs font-semibold px-1">
                            Confirm Password
                          </label>
                          <div className="flex">
                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                              <i className="mdi mdi-lock-outline text-gray-400 text-lg" />
                            </div>
                            <input
                              type="password"
                              className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                              placeholder="***********"
                              id="cpassword"
                              value={signupForm.values.cpassword}
                              onChange={signupForm.handleChange}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex -mx-3">
                      <div className="w-full px-3 mb-5">
                        <button className="block w-full max-w-xs mx-auto bg-blue-900 hover:bg-blue-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">
                          REGISTER NOW
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      
      </>





    </>
  )
}

export default Signup