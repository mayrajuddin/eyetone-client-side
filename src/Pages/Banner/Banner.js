import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="bg-blue-800">
            <div className='container mx-auto '>
                <div className="p-2 mx-auto grid grid-cols-2  items-center">
                    <div className='ml-4'>
                        <h1 className="text-bold text-6xl text-white capitalize">the best <br /> doctor</h1>
                        <Link to='' className='btn tealish-blue-bg border-0 hover:bg-blue-700 px-7 mt-3'>services</Link>
                    </div>
                    <div>
                        <img className='h-72 w-80 py-9 rounded-lg' src='https://img.freepik.com/free-photo/eye-doctor-with-female-patient-during-examination-modern-clinic-ophthalmologist-is-using-special-medical-equipment-eye-health_657921-165.jpg?w=2000' alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;