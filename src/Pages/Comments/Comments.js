import React, { useContext, useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { authContext } from '../../AuthContext/AuthProvider';

const Comments = () => {
    const { user } = useContext(authContext)
    const [comments, setComments] = useState([])
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URI}/reviews`)
            .then(res => res.json())
            .then(data => setComments(data))
    }, [])


    return (
        <div>
            <div className="container mx-auto">
                <div className="grid md:grid-cols-4 gap-4 my-4">
                    {
                        comments.map(review => (
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
                                    <p className='p-4 capitalize'>{review.name}</p>
                                </div>
                                <div className="text-sm ">
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

export default Comments;