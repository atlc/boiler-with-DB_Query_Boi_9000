import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';

const Navbar = (props: NavbarProps) => {
    const history = useHistory();

    const handleLogout = (e: React.MouseEvent<HTMLButtonElement>) => {
        props.setIsLoggedIn(false);
        localStorage.removeItem('token');
        history.push('/');
    }

    return (
        <div className="bg-info mb-3 shadow">
            <NavLink exact activeClassName="border border-dark" to='/' className='btn btn-outline-info text-dark m-2'>Home</NavLink>
            {props.isLoggedIn && <NavLink exact activeClassName="border border-dark" to='/profile' className='btn btn-outline-info text-dark m-2'>My Profile</NavLink>}
            {props.isLoggedIn ? 
                <button onClick={handleLogout} className='btn btn-outline-info text-dark m-2'>Logout</button>
                : <NavLink exact activeClassName="border border-dark" to='/login' className='btn btn-outline-info text-dark m-2'>Login</NavLink>
            }
        </div>
    );
}

interface NavbarProps {
    isLoggedIn: boolean;
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
}

export default Navbar;
