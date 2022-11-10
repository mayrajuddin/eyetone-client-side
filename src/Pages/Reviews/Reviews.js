import React, { useContext, useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { authContext } from '../../AuthContext/AuthProvider';

const Reviews = () => {
    const { user } = useContext(authContext)
    const [reviews, setReviews] = useState([])
    console.log(user);
    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [user?.email])
    return (
        <div>
            <h4 className="text-2xl">total reviews :{reviews.length} </h4>
            <div className="container">
                <div className="grid md:grid-cols-4 gap-4">
                    {
                        reviews.map(review => (
                            <div key={review._id} className="flex flex-col  p-6 divide-y rounded-md tealish-blue-bg text-white">
                                <div className="flex justify-between p-4 items-center">
                                    <div className="flex space-x-4">
                                        <div>
                                            <img src={user?.photoURL} alt="" className="object-cover w-12 h-12 rounded-full" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold">{user?.displayName}</h4>
                                            <span className="text-xs ">2 days ago</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <span className="text-xl font-bold text-yellow-500">{review.ratings} <FaStar className='inline' /> </span>
                                    </div>
                                </div>
                                <div className=" text-sm ">
                                    <p className='p-4'>{review.message}</p>
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