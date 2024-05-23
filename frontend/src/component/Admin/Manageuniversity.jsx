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
              <td><img src={'http://localhost:3000/' + university.image} /></td>
                <td>{university.universityname}</td>
                <td>{university.email}</td>
                <td>{university.phone}</td>
                <td>{university.universityaddress}</td>
                <td>{university.fees}</td>
                <td>
                    <button className='btn btn-danger' onClick={() => {deletefunction(university._id)}}>Delete</button>
                </td>
                <td>
                    <Link to={`/Admin/updateuniversity/${university._id}`} className='btn btn-success'>Update</Link>
                </td>
            </tr>

        })
    }
    return (
        <div>
           <Link to="/Admin/Adduniversity"> <button className="bg-blue-900 text-white rounded-lg mt-4 py-2 px-5 ms-5 fs-5">Add university</button>
           </Link>
            <div className='container mt-5'>
                <table className='table shadow'>
                    <thead>

                        <tr className='font-serif text-xl'>
                            <th>Image</th>
                            <th>university</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>Fees</th>
                            <th>Edit</th>
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