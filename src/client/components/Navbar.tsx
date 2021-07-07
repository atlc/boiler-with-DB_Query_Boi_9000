import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <Link to='/' className='btn btn-success'>Home</Link>
            <Link to='/authors' className='btn btn-success'>Authors</Link>
            <Link to='/posts' className='btn btn-success'>Posts</Link>
            <Link to='/login' className='btn btn-success'>Login</Link>
        </div>
    );
}

export default Navbar
