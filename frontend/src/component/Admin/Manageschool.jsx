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
              <td><img src={'http://localhost:3000/' + school.image} /></td>
                <td>{school.schoolname}</td>
                <td>{school.email}</td>
                <td>{school.phone}</td>
                <td>{school.schooladdress}</td>
                <td>{school.fees}</td>
                <td>
                    <button className='btn btn-danger' onClick={() => {deletefunction(school._id)}}>Delete</button>
                </td>
                <td>
                    <Link to={`/Admin/updateSchool/${school._id}`} className='btn btn-success'>Update</Link>
                </td>
            </tr>

        })
    }
    return (
        <div>
           <Link to="/Admin/Addschool"> <button className="bg-blue-900 text-white rounded-lg mt-4 py-2 px-5 ms-5 fs-5">Add school</button>
           </Link>
            <div className='container mt-5'>
                <table className='table shadow'>
                    <thead>

                        <tr className='font-serif text-xl'>
                            <th>Image</th>
                            <th>school</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>Fees</th>
                            <th>Edit</th>
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