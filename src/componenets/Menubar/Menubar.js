import React from 'react';
import { Link } from 'react-router-dom';

const Menubar = () => {
    return (
        <div>
           
                <Link to="/"><p>Home</p></Link>
                <Link to="/about"><p>About</p></Link>
              
        </div>
    );
};

export default Menubar;