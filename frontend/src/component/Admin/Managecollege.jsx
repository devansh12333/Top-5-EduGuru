import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Managecollege = () => {
    const [Data, setData] = useState([]);
    const fetchCollegeData = async () => {
        const res = await fetch("http://localhost:3000/college/getall")
        console.log(res.status)
        if (res.status === 200) {
            const data = await res.json();
            console.log(data);
            setData(data);
        }
    }
    useEffect(() => {
        fetchCollegeData();
    }, [])

    const deletefunction = async (id) => {
        console.log(id);
        const res = await fetch("http://localhost:3000/college/delete/" + id, { method: 'DELETE' })

        if (res.status === 200) {
            fetchCollegeData();
        }
    }

    const displaycollege = () => {
        return Data.map((college) => {

            return <tr>
                <td>{college.collegename}</td>
                <td>{college.email}</td>
                <td>
                    <button className='btn btn-danger' onClick={() => {deletefunction(college._id)}}>Delete</button>
                </td>
                <td>
                    <Link to={`/Update/${college._id}`}>Update</Link>
                </td>
            </tr>

        })
    }
    return (
        <div>
           <Link to="/AddCollege"> <button className="btn btn-primary mt-4 py-2 px-5 ms-5 fs-5">Add College</button>
           </Link>
            <div className='container mt-5'>
                <table className='table table-dark'>
                    <thead>
                        <tr>
                            <th>College</th>
                            <th>Email</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {displaycollege()}
                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default Managecollege