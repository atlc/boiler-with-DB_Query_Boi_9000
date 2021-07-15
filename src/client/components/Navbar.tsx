import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <Link to='/' className='btn btn-success m-2'>Home</Link>
            <Link to='/authors' className='btn btn-success m-2'>Authors</Link>
            <Link to='/posts' className='btn btn-success m-2'>Posts</Link>
            <Link to='/login' className='btn btn-success m-2'>Login</Link>
        </div>
    );
}

export default Navbar
