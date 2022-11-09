import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const details = useLoaderData()
    return (
        <div className='my-9'>
            <div className="container mx-auto">
                <div className="grid md:grid-cols-12 gap-4">
                    <div className="md:col-span-8">
                        <img src={details.img} alt="" className='h-56 w-full' />
                        <h2 className="text-2xl font-bold py-3">{details.serviceName}</h2>
                        <h3 className='font-semibold text-lg pb-2'>Price : {details.price} TK</h3>
                        <p> {details.description} </p>
                    </div>
                    <div className="md:col-span-4">
                        <div className="tealish-blue-bg text-white p-5 text-center">
                            <p className='capitalize text-2xl font-bold'>consultation on the {details.serviceName}</p>
                            <Link to='' className='btn bg-blue-700 border-0 hover:bg-blue-800 px-7 mt-5'>Book Consultation</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;