import { Link } from "react-router-dom"

const Dashboard = () => {
  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-md-4 ">
          <Link to="/Admin/Manageuser">  <div className="card d-flex align-items-center bg-warning bg-opacity-25  py-2 px-5  justify-content-center shadow ">
            <p className="fs-3 fw-semibold  text-black" style={{fontFamily:"serif"}} >User Details</p>
          </div>
          </Link>
        </div>
        <div className="col-md-4 ">
          <Link to="/Admin/ManageReviews">  <div className="card  d-flex align-items-center justify-content-center py-2 px-5 bg-primary bg-opacity-25 shadow">
            <p className="fs-3 fw-semibold font-serif text-black" >Reviews and Rating</p>
          </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Dashboard