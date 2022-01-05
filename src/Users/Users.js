import React from 'react';
import { Link } from 'react-router-dom';

const Users = (props) => {
    const{name,email,id}=props.users;
    return (
        <div>
            <h3>{name}</h3>
         <p>{email}</p>
         < Link to={`/details/${id}`}><button>See Details</button></Link>
        </div>
    );
};

export default Users;