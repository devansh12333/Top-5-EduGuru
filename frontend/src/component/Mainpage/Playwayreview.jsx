import { useNavigate, useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
const PlaywayreviewSchema = Yup.object().shape({});
import toast from 'react-hot-toast';
import { useEffect, useState } from 'react';
// import RatingComponent from './Rating';

const Playwayreview = () => {



    // Catch Rating value


    const { id } = useParams();
    const [playway, setplayway] = useState([]);
    const fetchUserData = async () => {
        const res = await fetch('http://localhost:3000/playway/getbyid/' + id);
        console.log(res.status);
        if (res.status === 200) {
            const data = await res.json();
            console.log(data);
            setplayway(data);
        }
    };

    useEffect(() => {
        fetchUserData();
    }, []);

    const Navigate = useNavigate();

    const PlaywayreviewForm = useFormik({
        initialValues: {
            name: "",
            comment: "",
            rating: "",
        },

        onSubmit: async (values, action) => {
            console.log(values);
            const res = await fetch("http://localhost:3000/Playwayreview/add", {
                method: "POST",
                body: JSON.stringify(values),
                headers: { "Content-type": "application/json" },
            });
            console.log(res.status);
            action.resetForm();
            if (res.status === 200) {
                toast("Item uploaded successfully")
                Navigate("/playway")
            }
            else {
                toast("Something went wrong")
            }
        },
        validationSchema: PlaywayreviewSchema,

    });

    return (
        <>


            {
                playway !== null ? (

                    <div className="conatiner p-5" style={{ background: "linear-gradient(to bottom,white,#e0c374,#e0c374" }}>
                            <div className="card p-3 border-none bg-transparent shadow">
                        <div className="row px-5">

                                <div className="col-md-4  flex items-center justify-center">
                                    <img src={'http://localhost:3000/' + playway.Image} onClick={window.scrollTo(0, 0)} alt="" className="img-fluid mb-3" />

                                </div>
                                <div className="col-md-8  px-5">
                                    <h1 className=' fw-semibold text-red-500 fs-2 mt-3 mb-3' style={{ fontFamily: "serif" }}>{playway.playwayname}</h1>
                                    <form onSubmit={PlaywayreviewForm.handleSubmit} className=" ">

                                        <div className="form-group">
                                            <label htmlFor="name" className="mb-2">Name</label>
                                            <input
                                                type="text"
                                                name='name'
                                                onChange={PlaywayreviewForm.handleChange}
                                                value={PlaywayreviewForm.values.name}
                                                className="form-control mb-3"
                                                required=""
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="comment" className=" mb-2">Comment</label>
                                            <textarea
                                                type="text"
                                                name='comment'
                                                onChange={PlaywayreviewForm.handleChange}
                                                value={PlaywayreviewForm.values.comment}
                                                className="form-control mb-3"
                                                required=""
                                            />
                                        </div>

                                        
                                        <div className="form-group">
                                            <label htmlFor="rating" className=" mb-2">Rating</label><br />
                                            <input type="number"
                                                name='rating'
                                                min={0}
                                                max={5}
                                                className='form-control mb-3'
                                                onChange={PlaywayreviewForm.handleChange}
                                                value={PlaywayreviewForm.values.rating} />
                                        </div>


                                        <button type="submit" className="bg-blue-500 font-semibold py-2  text-white rounded mb-5  fs-5 font-serif px-3">Submit Playwayreview</button>
                                        
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                ) : (
                    <div>
                        Loading
                    </div>
                )
            }


            {/* <RatingComponent /> */}
        </>
    )
}

export default Playwayreview