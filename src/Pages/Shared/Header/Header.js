import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className="navbar tealish-blue-bg">
            <div className="container mx-auto">
                <div className="navbar-start text-white">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 tealish-blue-bg shadow rounded-box w-52">
                            <li className='text-white'><Link to='/'>Home</Link></li>
                            <li className='text-white'><Link to='/blog'>blog</Link></li>
                        </ul>
                    </div>
                    <Link to='/' className="normal-case text-2xl font">Eyetone</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li className='text-white'><Link to='/'>Home</Link></li>
                        <li className='text-white' tabIndex={0}>
                            <Link to=''>Parent</Link>
                        </li>
                        <li className='text-white'><Link to='/blog'>blog</Link></li>
                    </ul>
                </div>
                <div className="navbar-end text-end">
                    <Link to='/login' className='btn bg-blue-800 border-0 hover:bg-blue-700 px-7'>Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;