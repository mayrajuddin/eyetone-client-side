import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="bg-blue-800 py-11">
            <div className='container mx-auto '>
                <div className="p-2 mx-auto grid md:grid-cols-2 grid-cols-1 items-center">
                    <div className='ml-4'>
                        <h1 className="text-bold text-5xl text-white capitalize">the highest  quatily<br /> care with a <br /> personal touch</h1>
                        <Link to='/services' className='btn tealish-blue-bg border-0 hover:bg-blue-700 px-7 mt-4'>services</Link>
                    </div>
                    <div className='hidden md:block' >
                        <div className="relative z-10">
                            <img className='h-72 w-80 py-9 rounded-lg' src='https://img.freepik.com/free-photo/eye-doctor-with-female-patient-during-examination-modern-clinic-ophthalmologist-is-using-special-medical-equipment-eye-health_657921-165.jpg?w=2000' alt="" />
                            <img className='absolute top-9 right-3 -z-[1] h-80  w-72 py-9 rounded-lg' src="https://images.unsplash.com/photo-1663151064065-cb334788f77d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;