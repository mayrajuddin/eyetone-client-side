import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="bg-blue-800">
            <div className='container mx-auto '>
                <div className="p-2 mx-auto grid md:grid-cols-2 grid-cols-1 items-center">
                    <div className='ml-4'>
                        <h1 className="text-bold text-5xl text-white capitalize">the highest  quatily<br /> care with a <br /> personal touch</h1>
                        <Link to='' className='btn tealish-blue-bg border-0 hover:bg-blue-700 px-7 mt-3'>services</Link>
                    </div>
                    <div className='hidden md:block' >
                        <img className='h-72 w-80 py-9 rounded-lg' src='https://img.freepik.com/free-photo/eye-doctor-with-female-patient-during-examination-modern-clinic-ophthalmologist-is-using-special-medical-equipment-eye-health_657921-165.jpg?w=2000' alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;