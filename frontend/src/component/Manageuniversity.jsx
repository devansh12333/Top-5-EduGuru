import React, { useEffect } from 'react'

const Manageuniversity = () => {
    const [Data, setData] = userState([])
    const fetchUniversityData = async () => {
        const res = await fetch ("http://localhost:3000/university/getall")
        console.log(res.status)
        if (res.status === 200){
            const data = await res.json();
            console.log(data);
            setData(data);
        }
    }
    useEffect(() => {
        fetchUniversityData();
    },[])
    const displayUniversity = () => {
    return Data.map((university) => {
     
      <tr>
        <td>{university.name}</td>
        <td>{university.course}</td>
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
                <h1>Manage University</h1>

            </div>
        </header>
        <div className='container mt-5'>
            <table className='table table-dark'>
                <thead>
                    <tr>
                        <th>UniName</th>
                        <th>Course</th>
                    </tr>
                </thead>
                <tbody>
                    {displayUniversity()}
                </tbody>
            </table>

        </div>
    </div>
  )
}

export default Manageuniversity