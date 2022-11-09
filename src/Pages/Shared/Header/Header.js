import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../../AuthContext/AuthProvider';
import './Header.css'
import logo from '../../../a.png'
const Header = () => {
    const { user, logOut } = useContext(authContext)
    const handleLogOut = () => {
        logOut()
            .then(result => { }).catch(err => console.error(err))
    }
    return (
        <div className="navbar tealish-blue-bg">
            <div className="container mx-auto">
                <div className="navbar text-white">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 tealish-blue-bg shadow rounded-box w-52">
                            <li className='text-white capitalize'><Link to='/'>Home</Link></li>
                            <li className='text-white capitalize'><Link to='/blog'>blog</Link></li>
                        </ul>
                    </div>
                    <img src={logo} alt="" className='h-8' />
                    <Link to='/' className="normal-case ml-2 text-2xl font">Eyetone</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li className='text-white hover:bg-blue-700 rounded mr-2 capitalize text-xl'><Link to='/'>Home</Link></li>
                        <li className='text-white hover:bg-blue-700 rounded mr-2 capitalize text-xl'><Link to='/blog'>blog</Link></li>
                        <li className='text-white hover:bg-blue-700 rounded mr-2 capitalize text-xl'><Link to='/services'>Services</Link></li>
                    </ul>
                </div>
                {user ? <span className='text-white'>{user?.email}</span> : <span className="hidden">none</span>}
                <div className="navbar justify-end ">
                    {user ? <button onClick={handleLogOut} type="button" className='btn bg-blue-800 border-0 hover:bg-blue-700 px-7'>Log out</button> :
                        <><Link to='/login' className='btn bg-blue-800 border-0 hover:bg-blue-700 px-7 mr-2'>Login</Link>
                            <Link to='/register' className='btn bg-blue-800 border-0 hover:bg-blue-700 px-7'>Register</Link>
                        </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;