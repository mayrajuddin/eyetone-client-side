import React, { useContext, useEffect, useState } from 'react';
import { FaStar, } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { authContext } from '../../AuthContext/AuthProvider';

const Reviews = () => {
    const { user } = useContext(authContext)
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [user?.email])
    return (
        <div>
            <div className="container mx-auto">
                <h4 className="text-2xl text-center font-bold capitalize py-5">my reviews </h4>
                <div className="grid md:grid-cols-4 gap-4 my-4">
                    {
                        reviews.map(review => (
                            <div key={review._id} className="flex flex-col  p-6 divide-y rounded-md tealish-blue-bg text-white">
                                <div className="flex justify-between p-4 items-center">
                                    <div className="flex space-x-4">
                                        <div>
                                            <img src={user?.photoURL} alt="" className="object-cover w-12 h-12 rounded-full" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm">{user?.displayName}</h4>
                                            <span className="text-xs ">2 days ago</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <span className="text-xl font-bold text-yellow-500">{review.ratings} <FaStar className='inline' /> </span>
                                    </div>
                                </div>
                                <div className=" text-sm ">
                                    <p className='p-4 capitalize'>service names</p>
                                </div>
                                <div className="text-sm ">
                                    <p className='p-4'>{review.message}</p>
                                    <div className='text-center text-xl mt-4'>
                                        <Link to={`/update/${review._id}`} className="btn bg-blue-800 border-0 hover:bg-blue-700 px-7 mr-3 capitalize">edit</Link>
                                        <button className="btn bg-blue-800 border-0 hover:bg-blue-700 px-6 capitalize">delete</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Reviews;