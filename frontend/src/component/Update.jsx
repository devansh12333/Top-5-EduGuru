import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProduct = () => {
    const { id } = useParams();
    const [productData, setProductData] = useState(null);
    const [selFile, setSelFile] = useState("");

    const navigate = useNavigate();

    const fetchschool = async () => {
        const res = await fetch("http://localhost:3000/school/getbyid/" + id);
        const data = await res.json();

        console.log(data);
        setProductData(data);
    };

    useEffect(() => {
        fetchschool();
    }, []);

    const submitForm = async (values) => {
        console.log(values);
        values.simage = selFile;
        const res = await fetch('http://localhost:3000/school/update/' + id, {
            method: 'PUT',
            body: JSON.stringify(values),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        console.log(res.status);

        if (res.status === 200) {
            navigate('/Browse');
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
            <div className="col-md-3 mx-auto pt-5">
                <div className="card">
                    <div className="card-body">
                        <h3 className="text-center my-5">Update Service</h3>
                        {productData !== null ? (
                            <Formik initialValues={productData} onSubmit={submitForm}>

                                {(addSchoolForm) => (

                                    <form onSubmit={addSchoolForm.handleSubmit}>
                                        <label>School Name</label>

                                        <span
                                            style={{ color: "red", fontSize: 10, marginLeft: 10 }}
                                        >
                                            {addSchoolForm.errors.schoolname}
                                        </span>
                                        <input
                                            id="schoolname"
                                            onChange={addSchoolForm.handleChange}
                                            value={addSchoolForm.values.schoolname}
                                            type="text"
                                            className="form-control mb-4"
                                        />

                                        <label>Product Details</label>
                                        <span
                                            style={{ color: "red", fontSize: 10, marginLeft: 10 }}
                                        >
                                            {addSchoolForm.errors.schooldetails}
                                        </span>
                                        <input
                                            id="schooldetails"
                                            onChange={addSchoolForm.handleChange}
                                            value={addSchoolForm.values.schooldetails}
                                            type="text"
                                            className="form-control mb-4"
                                        />

                                        <label>Product Address</label>
                                        <span
                                            style={{ color: "red", fontSize: 10, marginLeft: 10 }}
                                        >
                                            {addSchoolForm.errors.schooladdress}
                                        </span>
                                        <input
                                            id="schooladdress"
                                            onChange={addSchoolForm.handleChange}
                                            value={addSchoolForm.values.schooladdress}
                                            type="text"
                                            className="form-control mb-4"
                                        />
                                        <label>Phone Number</label>
                                        <span
                                            style={{ color: "red", fontSize: 10, marginLeft: 10 }}
                                        >
                                            {addSchoolForm.errors.phone}
                                        </span>
                                        <input
                                            id="phone"
                                            onChange={addSchoolForm.handleChange}
                                            value={addSchoolForm.values.phone}
                                            type="number"
                                            className="form-control mb-4"
                                        />

                                        <label>Fees</label>
                                        <span
                                            style={{ color: "red", fontSize: 10, marginLeft: 10 }}
                                        >
                                            {addSchoolForm.errors.fees}
                                        </span>
                                        <input
                                            id="fees"
                                            onChange={addSchoolForm.handleChange}
                                            value={addSchoolForm.values.fees}
                                            type="number"
                                            className="form-control mb-4"
                                        />

<label>Email</label>
                                        <span
                                            style={{ color: "red", fontSize: 10, marginLeft: 10 }}
                                        >
                                            {addSchoolForm.errors.email}
                                        </span>
                                        <input
                                            id="email"
                                            onChange={addSchoolForm.handleChange}
                                            value={addSchoolForm.values.email}
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

                                        <button type="submit" className="btn btn-primary w-100">
                                            Submit
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

export default UpdateProduct;