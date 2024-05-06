import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

const Main = () => {
  return (
    <div>
   <div className="row">
    {/* <div className="col-md-2">
      <Sidebar />
    </div> */}
    <div className=" px-16 py-5 bg-blue-50">
      <Outlet />
    </div>
   </div>
    </div>
  )
}

export default Main