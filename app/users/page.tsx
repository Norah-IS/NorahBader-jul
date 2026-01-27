import React from 'react'
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
}
async function page() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data:User[] = await res.json();
  return (
    <div>
      <h1>Users List</h1>
      {data.map(user =><li key ={user.id}>{user.name} </li>)}
    </div>
  )
}

export default page;