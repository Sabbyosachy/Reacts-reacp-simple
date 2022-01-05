import React, { useEffect, useState } from 'react';
import Users from '../../Users/Users';

const Home = () => {
    const[control,setControl]=useState(false);
  const[user,setUser]=useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUser(data));
  },[control])
  console.log(control);
  return (
    <div>
     <h1>Welcome</h1>
     {
       user.map(users=> <Users users={users}></Users>)
     }
     <button onClick={()=>setControl(true)}>Clicked</button>
    </div>
    );
};

export default Home;