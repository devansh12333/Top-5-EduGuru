import { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FaRegStar } from "react-icons/fa";
import StarRatings from 'react-star-ratings';
import { enqueueSnackbar } from 'notistack';

const ViewCollege = () => {
    const { id } = useParams();
    const [CollegeList, setCollegeList] = useState([]);
    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));
    const reviewRef = useRef();
    const [rating, setRating] = useState(3);
    // console.log(currentUser);

    const fetchUserData = async () => {
        const res = await fetch('http://localhost:3000/college/getbyid/' + id);
        console.log(res.status);
        if (res.status === 200) {
            const data = await res.json();
            console.log(data);
            setCollegeList(data);
        }
    };

    useEffect(() => {
        fetchUserData();
    }, []);

    const [reviews, setreviews] = useState([])

    const fetchreviewsDAta = async () => {
        const res = await fetch("http://localhost:3000/reviews/getbycollege/" + id);
        console.log(res.status);
        if (res.status === 200) {
            const data = await res.json();
            console.log(data);
            setreviews(data)
        }
    }

    useEffect(() => {
        fetchreviewsDAta()
    }, [])

    const ReviewsData = () => {
        if (reviews.length === 0) {
            return <h1 className='text-center fw-bold' style={{ color: "seagreen" }}>No Data Found</h1>
        }

        return reviews.map((rev) => (
            <>
                <div className="row h-50">
                    <div className="rev-md-6 py-4">
                        <p className='text-warning ' style={{ fontFamily: "cursive" }}>{rev.rating}Star</p>
                        <p className=' fw-semibold fs-5  ' style={{ fontFamily: "serif" }}>{rev.name}</p>
                        <p className=' '>{rev.comment}</p>
                    </div>
                </div>
                <hr />
            </>
        ))
    }


    const ratingForm = () => {
        if (currentUser !== null) {
            return <div>
                <StarRatings
                    rating={rating}
                    starRatedColor="blue"
                    changeRating={setRating}
                    numberOfStars={5}
                />

                <textarea ref={reviewRef}></textarea>
                <button onClick={submitReview}>Submit Review</button>
            </div>
        } else {
            return <p>login to give review</p>
        }
    }

    const submitReview = async () => {
        const res = await fetch('http://localhost:3000/reviews/add', {
            method: 'POST',
            body: JSON.stringify({
                comment: reviewRef.current.value,
                rating: rating,
                user: currentUser._id,
                college: id
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log(res.status);
        if(res.status === 200){
            console.log('review submitted');
            enqueueSnackbar('Review submitted', {variant: 'success'});
            fetchreviewsDAta();
        }else{

        }
    }


    return (
        <>
            {
                CollegeList !== null ? (

                    <div className="container px-10 mb-5">
                        <div className="row text-center flex align-items-center  flex-col me-5">
                            <div className="col-md-5" style={{border:"none", width:600}}>
                                <img src={'http://localhost:3000/' + CollegeList.image} onClick={window.scrollTo(0, 0)} alt="" className="img-fluid d-block mx-auto mb-3" style={{ height: 500, width: 1000 }} />

                            </div>
                        </div>
                        <div>

                            <p className=' fw-semibold text-danger fs-2 mt-3 mb-1' style={{ fontFamily: "serif" }}>{CollegeList.collegename}</p>
                            <p className=' fs-5 fw-semibold mb-5'>{CollegeList.fees}</p>
                            <p className=' fs-5 fw-semibold mb-5'>{CollegeList.phone}</p>
                            <p className='text-secondary  mb-3 fs-5' style={{ fontFamily: "serif" }}>{CollegeList.collegeaddress}</p>


                            <p className=' fs-5 fw-semibold mb-5'>{CollegeList.collegedetail}</p>



                            {/* <p className=' mb-2  ' ><span className="fw-bold me-1">Phone no:</span>{CollegeList.phone}</p>
                            <p className="mb-5"><span className="fw-bold me-1">Email:</span>{CollegeList.email}</p> */}

                        </div>

                    </div>




                ) : (
                    <div>
                        Loading
                    </div>
                )
            }
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <p className="fs-4 mb-2">Reviews and Ratings</p>
                        {ratingForm()}

                        {/* <Link to={`/collegeReview/${CollegeList._id}`}><button type="button" className="btn mb-4 btn-outline-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2  dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">Add Review</button>
                        </Link> */}
                    </div>
                </div>
                <div className="row">
                    {ReviewsData()}
                </div>
            </div>
        </>




    )
}


export default ViewCollege