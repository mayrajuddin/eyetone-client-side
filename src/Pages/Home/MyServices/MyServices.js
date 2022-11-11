import React, { useEffect, useState } from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MyServices = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URI}/services/?limit=3`)
            .then(res => res.json())
            .then(data => {
                setItems(data)
            })
    }, [])
    return (
        <div className='my-8'>
            <div className="container mx-auto">
                <h3 className="font text-3xl capitalize pb-7 font-semibold tealish-blue-font text-center md:text-start">My services  </h3>
                <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-x-4">
                    {
                        items.map(item => (
                            <div className="card bg-sky-50 shadow-xl pb-3 rounded-lg" key={item._id}>
                                <img src={item.img} alt="" />
                                <div className="py-3 pb-1 pl-2">
                                    <h2 className="card-title capitalize"> {item.serviceName}</h2>
                                </div>
                                <p className='p-2'>{item?.title?.slice(0, 60) + '...'}</p>
                                <div className='p-2 flex items-center justify-around'>
                                    <span className=' font-bold text-lg'> {item.price} TK </span>
                                    <Link to={`/service-details/${item._id}`} className=' ml-3 tealish-blue-font font-semibold  font-lg capitalize '>see more <FaLongArrowAltRight className='inline ml-3 tealish-blue-font' /></Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='text-center py-5'>
                    <Link to='/services' className='btn bg-blue-800 border-0 hover:bg-blue-700 px-7 '>view all</Link>
                </div>
            </div>
        </div>
    );
};

export default MyServices;