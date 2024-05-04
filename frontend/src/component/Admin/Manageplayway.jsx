import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Manageplaway = () => {
    const [Data, setData] = useState([]);
    const fetchplawayData = async () => {
        const res = await fetch("http://localhost:3000/playway/getall")
        console.log(res.status)
        if (res.status === 200) {
            const data = await res.json();
            console.log(data);
            setData(data);
        }
    }
    useEffect(() => {
        fetchplawayData();
    }, [])

    const deletefunction = async (id) => {
        console.log(id);
        const res = await fetch("http://localhost:3000/playway/delete/" + id, { method: 'DELETE' })

        if (res.status === 200) {
            fetchplawayData();
        }
    }

    const displayplaway = () => {
        return Data.map((plaway) => {

            return <tr>
                <td>{plaway.playwayname}</td>
                <td>{plaway.email}</td>
                <td>
                    <button className='btn btn-danger' onClick={() => {deletefunction(plaway._id)}}>Delete</button>
                </td>
                <td>
                    <Link to={`/Update/${plaway._id}`}>Update</Link>
                </td>
            </tr>

        })
    }
    return (
        <div>
           <Link to="/Addplaway"> <button className="btn btn-primary mt-4 py-2 px-5 ms-5 fs-5">Add plaway</button>
           </Link>
            <div className='container mt-5'>
                <table className='table table-dark'>
                    <thead>
                        <tr>
                            <th>plaway</th>
                            <th>Email</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayplaway()}
                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default Manageplaway