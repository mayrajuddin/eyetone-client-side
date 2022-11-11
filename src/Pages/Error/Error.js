import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <div className="relative h-screen ">
                <img className='absolute inset-0 h-screen w-full ' src="https://cdn.dribbble.com/users/1794722/screenshots/10492899/media/8586750abce7764179e9637e9331100c.jpg" alt="" />
                <div className="absolute top-3/4 left-1/4 right-1/4 text-center">
                    <p className='text-lg capitalize tealish-blue-font mt-5'>sorry... we can't find the page you are looking for</p>
                    <Link to='/' className='py-3 px-9 tealish-blue-bg btn text-white text-lg mt-4 hover:bg-blue-900 border-0'>back to home</Link>
                </div>
            </div>
        </div>
    );
};

export default Error;