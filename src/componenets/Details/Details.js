import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';


const Details = () => {
    const[user,setUser]=useState([]);
   const{userId}=useParams();
   useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUser(data));
  },[])
  const userDetails=user.find((users)=>users.id==userId);
    return (
        <div>
       <h2>{userDetails?.name}</h2>
       <h5>{userDetails?.email}</h5>
        </div>
    );
};

export default Details;