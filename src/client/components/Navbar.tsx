import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <Link to='/' className='btn btn-success m-2'>Home</Link>
            <Link to='/profile' className='btn btn-success m-2'>My Profile</Link>
            <Link to='/login' className='btn btn-success m-2'>Login</Link>
        </div>
    );
}

export default Navbar
