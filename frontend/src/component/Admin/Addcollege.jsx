import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
const addCollegeSchema = Yup.object().shape({});

import toast from 'react-hot-toast';


const AddCollege = () => {


    const Navigate = useNavigate();
    const [selFile, setSelFile] = useState("");

    const addCollegeForm = useFormik({
        initialValues: {
            collegename: "",      
            collegedetail: "",
            collegeaddress: "",
            phone: "",  
            email: "",
            fees: "",
            image: "",
            courses: "",
        },

        onSubmit: async (values, action) => {
            values.image = selFile;
            console.log(values);
            const res = await fetch("http://localhost:3000/college/add", {
                method: "POST",
                body: JSON.stringify(values),
                headers: { "Content-type": "application/json" },
            });
            console.log(res.status);
            action.resetForm();
            if (res.status === 200) {
                toast("Item uploaded successfully")
                Navigate("/College")
            }
            else {
                toast("Something went wrong")
            }
        },
        validationSchema: addCollegeSchema,

    });

    const uploadFile = async (e) => {
        let file = e.target.files[0];
        setSelFile(file.name);
        const fd = new FormData();
        fd.append('myfile', file);

        const res = await fetch('http://localhost:3000/util/uploadfile', {
            method: 'POST',
            body: fd
        })
        console.log(res.status);
    }





    return (
        <>


            <p className="text-warning mb-3 font-mono bg-dark w-50 mx-auto rounded fs-1 text-center mt-3  fw-bold ">College</p>
            <form onSubmit={addCollegeForm.handleSubmit} className="mb-3 w-50 m-auto ">
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
                        name='collegename'
                        onChange={addCollegeForm.handleChange}
                        value={addCollegeForm.values.collegename}

                        required="" placeholder="College" />
                    <label htmlFor="floatingInput" className='font-serif '>College Name</label>
                </div>
                
                <div className="form-floating">
                    <input
                        name="email"
                        id="floatingInput"
                        onChange={addCollegeForm.handleChange}
                        value={addCollegeForm.values.email}
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
                        onChange={addCollegeForm.handleChange}
                        value={addCollegeForm.values.phone}
                        className="form-control mb-2 input"
                        required=''
                        placeholder="Phone"
                    />
                    <label htmlFor="floatingInput" className="mb-2 font-serif">Phone</label>

                </div>
                <div className="form-floating mb-2">
                    <input
                        type="text"
                        name='collegedetail'
                        id="floatingInput"
                        onChange={addCollegeForm.handleChange}
                        value={addCollegeForm.values.collegedetail}
                        className="form-control mb-2 input"
                        required=""
                        placeholder="Timings"
                    />
                    <label htmlFor="floatingInput" className=" mb-2 font-serif ">Details</label>

                </div>
                <div className="form-floating">
                    <input
                        type="text"
                        name='collegeaddress'
                        id="floatingInput"
                        onChange={addCollegeForm.handleChange}
                        value={addCollegeForm.values.collegeaddress}
                        className="form-control mb-2 input"
                        required=""
                        placeholder="Address"
                    />
                    <label htmlFor="floatingInput" className=" mb-2 font-serif ">Address</label>

                </div>



                <div className="form-floating">
                    <input
                        name="fees"
                        id="floatingInput"
                        onChange={addCollegeForm.handleChange}
                        value={addCollegeForm.values.fees}
                        className="form-control mb-4 input"
                        required=''
                        placeholder="Fees"
                    />
                    <label htmlFor="floatingInput" className="mb-2 font-serif">fees</label>

                </div>
                <div className="form-floating ">
                    <input type="text" className="form-control input mb-2" id="floatingInput"
                        name='courses'
                        onChange={addCollegeForm.handleChange}
                        value={addCollegeForm.values.courses}

                        required="" placeholder="Courses" />
                    <label htmlFor="floatingInput" className='font-serif '>Courses</label>
                </div>

                <button type="submit" className="bg-black font-semibold py-2  text-warning fs-5 mx-auto d-block rounded mb-5 w-50">Add</button>


            </form>

        </>
    )
}


export default AddCollege