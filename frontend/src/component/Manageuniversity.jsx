import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Manageuniversity = () => {
    const [Data, setData] = useState([]);
    const fetchuniversityData = async () => {
        const res = await fetch("http://localhost:3000/university/getall")
        console.log(res.status)
        if (res.status === 200) {
            const data = await res.json();
            console.log(data);
            setData(data);
        }
    }
    useEffect(() => {
        fetchuniversityData();
    }, [])

    const deletefunction = async (id) => {
        console.log(id);
        const res = await fetch("http://localhost:3000/university/delete/" + id, { method: 'DELETE' })

        if (res.status === 200) {
            fetchuniversityData();
        }
    }

    const displayuniversity = () => {
        return Data.map((university) => {

            return <tr>
                <td>{university.universityname}</td>
                <td>{university.email}</td>
                <td>
                    <button className='btn btn-danger' onClick={() => {deletefunction(university._id)}}>Delete</button>
                </td>
                <td>
                    <Link to={`/Update/${university._id}`}>Update</Link>
                </td>
            </tr>

        })
    }
    return (
        <div>
           <Link to="/Adduniversity"> <button className="btn btn-primary mt-4 py-2 px-5 ms-5 fs-5">Add university</button>
           </Link>
            <div className='container mt-5'>
                <table className='table table-dark'>
                    <thead>
                        <tr>
                            <th>university</th>
                            <th>Email</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayuniversity()}
                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default Manageuniversity