import React, { useEffect, useState } from 'react'

const Manageschool = () => {
    const [Data, setData] = useState([])

    const fetchschoolData = async () => {
        const res = await fetch ("http://localhost:3000/school/getall")
        console.log(res.status)
        if (res.status === 200){
            const data = await res.json();
            console.log(data);
            setData(data);
        }
    }
    useEffect(() => {
        fetchschoolData();
    },[])
    
    const displaySchool = () => {
    return Data.map((school) => {
     
      <tr>
        <td>{school.name}</td>
        <td>{school.fees}</td>
        <td>
            <button className='btn btn-danger'>Delete</button>
        </td>
        <td>
            <button className='btn btn-primary' onClick={ () => {Navigate('/Update'+school._id)}}>Update</button>
        </td>
      </tr>
        
    })
}
  return (
    <div>
        <header className='bg-danger text-white'>
            <div className='container py-5'>
                <h1>Manage School</h1>

            </div>
        </header>
        <div className='container mt-5'>
            <table className='table table-dark'>
                <thead>
                    <tr>
                        <th>SchoolName</th>
                        <th>Fees</th>
                    </tr>
                </thead>
                <tbody>
                    {displaySchool()}
                </tbody>
            </table>

        </div>
    </div>
  )
}

export default Manageschool