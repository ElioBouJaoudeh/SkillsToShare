import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
       <>
       <nav className="navbar">
        <div className="navbar-conatiner">
            <Link to="/" className="navbar-logo">
                STS
            </Link>
        </div>
       </nav>
       </>       
    )
}

export default Navbar