import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaLongArrowAltRight, } from "react-icons/fa";
import Loader from '../Shared/Loader/Loader';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


const Services = () => {
    const services = useLoaderData()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 500)
    }, [])
    if (loading) {
        return <Loader></Loader>
    }
    return (
        <PhotoProvider>
            <div className='my-8'>
                <div className="container mx-auto">
                    <h3 className="font text-3xl capitalize pb-7 font-semibold">eye care services  </h3>
                    <div className="grid md:grid-cols-3 gap-5">
                        {
                            services.map(service => (
                                <PhotoView src={service.img} key={service._id}>
                                    <div className="card bg-sky-50 shadow-xl pb-3 rounded-lg">
                                        <div className="py-3">
                                            <h2 className="card-title capitalize"> {service.serviceName}</h2>
                                        </div>
                                        <img src={service.img} alt="" />
                                        <p className='p-2'>{service?.title?.slice(0, 60) + '...'}</p>
                                        <div className='p-2 flex items-center justify-around'>
                                            <span className=' font-bold text-lg'> {service.price} TK </span>
                                            <Link to={`/service-details/${service._id}`} className=' ml-3 tealish-blue-font font-semibold  font-lg capitalize '>see more <FaLongArrowAltRight className='inline ml-3 tealish-blue-font' /></Link>
                                        </div>
                                    </div>
                                </PhotoView>
                            ))
                        }
                    </div>
                </div>
            </div>
        </PhotoProvider>
    );
};

export default Services;