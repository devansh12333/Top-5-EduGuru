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
                <td><img src={'http://localhost:3000/' + college.image} className='' alt="loaDING" /> </td>
                <td>{college.collegename}</td>
                <td>{college.email}</td>
                <td>{college.phone}</td>
                <td>{college.fees}</td>
                <td>{college.collegeaddress}</td>

                <td>{college.courses}</td>
                <td>
                    <button className='btn btn-danger' onClick={() => {deletefunction(college._id)}}>Delete</button>
                </td>
                <td>
                    <Link to={`/Update/${college._id}`} className='btn btn-success'>Update</Link>
                </td>
            </tr>

        })
    }
    return (
        <div>
           <Link to="/AddCollege"> <button className="bg-blue-900 text-white rounded-lg mt-4 py-2 px-5 ms-5 fs-5">Add College</button>
           </Link>
            <div className='container mt-5'>
                <table className='table shadow'>
                    <thead>
                        <tr>
                            <th className='font-serif text-xl'>Image</th>
                            <th className='font-serif text-xl'>College</th>
                            <th className='font-serif text-xl'>Email</th>
                            <th className='font-serif text-xl'>Phone</th>
                            <th className='font-serif text-xl'>Fees</th>
                            <th className='font-serif text-xl'>Address</th>
                            <th className='font-serif text-xl'>Courses</th>
                            <th className='font-serif text-xl'>Edit</th>
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