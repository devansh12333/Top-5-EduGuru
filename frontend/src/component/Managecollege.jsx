import React, { useEffect, useState } from 'react'

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
    const displaycollege = () => {
        return Data.map((college) => {

            return <tr>
                <td>{college.collegename}</td>
                <td>{college.email}</td>
                <td>
                    <button className='btn btn-danger'>Delete</button>
                </td>
            </tr>

        })
    }
    return (
        <div>
            <header className='bg-danger text-white'>
                <div className='container py-5'>
                    <h1>Manage college</h1>

                </div>
            </header>
            <div className='container mt-5'>
                <table className='table table-dark'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
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