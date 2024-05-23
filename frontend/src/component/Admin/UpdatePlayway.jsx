import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdatePlayway = () => {
    const { id } = useParams();
    const [productData, setProductData] = useState(null);
    const [selFile, setSelFile] = useState("");

    const navigate = useNavigate();

    const fetchPlayway = async () => {
        const res = await fetch("http://localhost:3000/playway/getbyid/" + id);
        const data = await res.json();

        console.log(data);
        setProductData(data);
    };

    useEffect(() => {
        fetchPlayway();
    }, []);

    const submitForm = async (values) => {
        console.log(values);
        values.simage = selFile;
        const res = await fetch('http://localhost:3000/playway/update/' + id, {
            method: 'PUT',
            body: JSON.stringify(values),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        console.log(res.status);

        if (res.status === 200) {
            navigate('/Admin/ManagePlayway');
        }
    };

    const uploadFile = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        setSelFile(file.name);
        const fd = new FormData();
        fd.append("myfile", file);
        fetch("http://localhost:3000/util/uploadfile", {
            method: "POST",
            body: fd,
        }).then((res) => {
            if (res.status === 200) {
                console.log("file uploaded");
            }
        });
    };

    return (
        <div>
            <div className="col-md-3 mx-auto w-1/2 ">
                <div className="card">
                    <div className="card-body">
                        <h3 className="text-center text-black bg-blue-900 mb-5 text-white py-2 text-xl  ">Update Playway</h3>
                        {productData !== null ? (
                            <Formik initialValues={productData} onSubmit={submitForm}>

                                {(addplaywayForm) => (

                                    <form onSubmit={addplaywayForm.handleSubmit}>
                                        <label>Playway Name</label>

                                        <span
                                            style={{ color: "red", fontSize: 10, marginLeft: 10 }}
                                        >
                                            {addplaywayForm.errors.playwayname}
                                        </span>
                                        <input
                                            id="playwayname"
                                            onChange={addplaywayForm.handleChange}
                                            value={addplaywayForm.values.playwayname}
                                            type="text"
                                            className="form-control mb-4"
                                        />

                                        <label>Courses</label>
                                        <span
                                            style={{ color: "red", fontSize: 10, marginLeft: 10 }}
                                        >
                                            {addplaywayForm.errors.courses}
                                        </span>
                                        <input
                                            id="Playwaydetails"
                                            onChange={addplaywayForm.handleChange}
                                            value={addplaywayForm.values.courses}
                                            type="text"
                                            className="form-control mb-4"
                                        />

                                        <label>Address</label>
                                        <span
                                            style={{ color: "red", fontSize: 10, marginLeft: 10 }}
                                        >
                                            {addplaywayForm.errors.playwayaddress}
                                        </span>
                                        <input
                                            id="playwayaddress"
                                            onChange={addplaywayForm.handleChange}
                                            value={addplaywayForm.values.playwayaddress}
                                            type="text"
                                            className="form-control mb-4"
                                        />
                                        <label>Phone Number</label>
                                        <span
                                            style={{ color: "red", fontSize: 10, marginLeft: 10 }}
                                        >
                                            {addplaywayForm.errors.phone}
                                        </span>
                                        <input
                                            id="phone"
                                            onChange={addplaywayForm.handleChange}
                                            value={addplaywayForm.values.phone}
                                            type="number"
                                            className="form-control mb-4"
                                        />



                                        <label>Email</label>
                                        <span
                                            style={{ color: "red", fontSize: 10, marginLeft: 10 }}
                                        >
                                            {addplaywayForm.errors.email}
                                        </span>
                                        <input
                                            id="email"
                                            onChange={addplaywayForm.handleChange}
                                            value={addplaywayForm.values.email}
                                            type="email"
                                            className="form-control mb-4"
                                        />

                                        <label>Upload Image</label>
                                        <input
                                            type="file"
                                            id="image"
                                            className="form-control mb-4"
                                            placeholder="Upload Image"
                                            onChange={uploadFile} />

                                        <button type="submit" className="py-2 bg-blue-900 text-white w-100">
                                            Update
                                        </button>
                                    </form>
                                )}
                            </Formik>
                        ) : (
                            <h1 className="text-center my-5">Loading ... </h1>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdatePlayway;