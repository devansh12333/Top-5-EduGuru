import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Manageschool = () => {
    const [Data, setData] = useState([]);
    const fetchschoolData = async () => {
        const res = await fetch("http://localhost:3000/school/getall")
        console.log(res.status)
        if (res.status === 200) {
            const data = await res.json();
            console.log(data);
            setData(data);
        }
    }
    useEffect(() => {
        fetchschoolData();
    }, [])

    const deletefunction = async (id) => {
        console.log(id);
        const res = await fetch("http://localhost:3000/school/delete/" + id, { method: 'DELETE' })

        if (res.status === 200) {
            fetchschoolData();
        }
    }

    const displayschool = () => {
        return Data.map((school) => {

            return <tr>
                <td>{school.schoolname}</td>
                <td>{school.email}</td>
                <td>
                    <button className='btn btn-danger' onClick={() => {deletefunction(school._id)}}>Delete</button>
                </td>
                <td>
                    <Link to={`/Update/${school._id}`}>Update</Link>
                </td>
            </tr>

        })
    }
    return (
        <div>
           <Link to="/Addschool"> <button className="btn btn-primary mt-4 py-2 px-5 ms-5 fs-5">Add school</button>
           </Link>
            <div className='container mt-5'>
                <table className='table table-dark'>
                    <thead>
                        <tr>
                            <th>school</th>
                            <th>Email</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayschool()}
                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default Manageschool