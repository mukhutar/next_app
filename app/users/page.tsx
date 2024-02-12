import React from 'react'

interface User{
  id:number,
  name:string,
  email:string
}

const UsersPage = async() => {

 const res = await fetch('https://jsonplaceholder.typicode.com/users')
 const users : User[] = await res.json() 
  return (
    <div className="overflow-x-auto">
      <h1>Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <table className='table table-zebra w-30' >
        <thead>
          <tr className="bg-base-200">
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
           {users.map(user => (
          <tr >
            <td>{user.name}</td>  
            <td>{user.email}</td>
          </tr>
        ))}
        </tbody>
       
      </table>
    </div>
  )
}

export default UsersPage
