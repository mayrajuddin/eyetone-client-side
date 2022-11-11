import React from 'react';
import Page from '../../../components/Page';
import doctorImg from '../../../images/doctor-avater.jpg'
const AboutMe = () => {
    return (
        <div className='py-9'>
            <div className="container mx-auto">
                <h2 className="text-center md:text-start capitalize tealish-blue-font pb-7 font-semibold font text-3xl">about me</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 items-center border py-8 shadow-xl">
                    <div className='p-5 md:pl-7'>
                        <h2 className="font-semibold text-3xl capitalize tealish-blue-font">prof. dr. md. anisul rahman</h2>
                        <h4 className="uppercase text-lg ">mbbs (dmc) do (du) fcps (eye) </h4>
                        <p className="text-lg capitalize ">ophthalmology / eye specialist & surgeon</p>
                    </div>
                    <div>
                        <div className="flex justify-center">
                            <img src={doctorImg} alt="" className='h-80 rounded-full ' />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AboutMe;