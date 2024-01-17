import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Users = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios("https://jsonplaceholder.typicode.com/comments?_limit=100")
        .then((res) => {
            setData(res.data)
        })
    }, [])
  return (
    <>
    <table className='border bg-slate-600
     text-white'>
        <tr className='border'>
            <th className='bg-blue-300'>PostID</th>
            <th className='bg-blue-300'>Name</th>
            <th className='bg-blue-300'>Email</th>
            <th className='bg-blue-300'>Comments</th>
        </tr>
      {data.map((item) => {
          return(
              <tr key={item.id} className='border text-center'>
                <td className='bg-rose-800'>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.body}</td>
            </tr>
        )
    })}
    </table>
    </>
  )
}

export default Users