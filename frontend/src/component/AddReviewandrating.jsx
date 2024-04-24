import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
const addCollegeSchema = Yup.object().shape({});

import toast from 'react-hot-toast';


const AddReviewandrating = () => {


    const Navigate = useNavigate();
    const [selFile, setSelFile] = useState("");

    const reviewForm = useFormik({
        initialValues: {
            fullName: "",
            email: "", 
            phone: "",
            message: "",
           
        },

        onSubmit: async (values, action) => {
            values.image = selFile;
            console.log(values);
            const res = await fetch("http://localhost:3000/Reviewandrating/add", {
                method: "POST",
                body: JSON.stringify(values),
                headers: { "Content-type": "application/json" },
            });
            console.log(res.status);
            action.resetForm();
            if (res.status === 200) {
                toast("Item uploaded successfully")
               
            }
            else {
                toast("Something went wrong")
            }
        },
      

    });

  





    return (
        <>


            <p className="text-yellow-600 mb-3 font-mono bg-dark w-50 mx-auto rounded fs-1 text-center mt-3  fw-bold ">Feedback</p>
            <form onSubmit={reviewForm.handleSubmit} className="mb-3 w-50 m-auto ">
                <div className="form-group ">
                    <label htmlFor="imageUrl" className="mb-2  "></label>
                    <input
                        type="file"
                        name="image"
                        onChange={uploadFile}
                        className="form-control mb-3 input"
                        required=''
                    />
                </div>
                <div className="form-floating ">
                    <input type="text" className="form-control input mb-2" id="floatingInput"
                        name='fullName'
                        onChange={reviewForm.handleChange}
                        value={reviewForm.values.fullName}

                        required="" placeholder="fullName" />
                    <label htmlFor="floatingInput" className='font-serif '>Full Name</label>
                </div>
                
                <div className="form-floating">
                    <input
                        name="email"
                        id="floatingInput"
                        onChange={reviewForm.handleChange}
                        value={reviewForm.values.email}
                        className="form-control mb-2 input"
                        required=''
                        placeholder="Email"
                    />
                    <label htmlFor="floatingInput" className="mb-2 font-serif ">Email</label>

                </div>
                <div className="form-floating">
                    <input
                        name="phone"
                        id="floatingInput"
                        onChange={reviewForm.handleChange}
                        value={reviewForm.values.phone}
                        className="form-control mb-2 input"
                        required=''
                        placeholder="Phone"
                    />
                    <label htmlFor="floatingInput" className="mb-2 font-serif">Phone Number</label>

                </div>
                <div className="form-floating mb-2">
                    <input
                        type="text"
                        name='message'
                        id="floatingInput"
                        onChange={reviewForm.handleChange}
                        value={reviewForm.values.message}
                        className="form-control mb-2 input"
                        required=""
                        placeholder="message"
                    />
                    <label htmlFor="floatingInput" className=" mb-2 font-serif ">Message</label>

                </div>
               



               
                <button type="submit" className="bg-black font-semibold py-2  text-yellow-600 fs-5 mx-auto d-block rounded mb-5 w-50">Send Message</button>


            </form>

        </>
    )
}


export default AddReviewandrating