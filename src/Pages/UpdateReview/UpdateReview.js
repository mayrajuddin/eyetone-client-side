import React, { useContext } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';
import { authContext } from '../../AuthContext/AuthProvider';

const UpdateReview = () => {
    const { token } = useContext(authContext)
    const review = useLoaderData()
    const updateComments = e => {
        e.preventDefault()
        const form = e.target
        const ratings = form.ratings.value
        const message = form.message.value
        const value = {
            ratings, message
        }
        fetch(`http://localhost:5000/reviews/${review._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                Authorization: 'Bearer ' + token
            },
            body: JSON.stringify(value)
        }).then(res => res.json())
            .then(data => {
                if (data.matchedCount > 0) {
                    toast.success('Update Successfull')
                }
            })
    }
    return (
        <div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <form onSubmit={updateComments} className="">
                <div className="bg-slate-200 p-12 rounded">
                    <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">

                        <div className="form-control col-span-2">
                            <label className="label">
                                <span className="label-text">Ratings</span>
                            </label>
                            <input type="text" name='ratings' placeholder="ratings" className="input input-bordered" defaultValue={review.ratings} />
                        </div>
                        <div className="form-control col-span-2">
                            <label className="label">
                                <span className="label-text">Your Message</span>
                            </label>
                            <textarea name='message' className="textarea h-32 textarea-bordered" placeholder="Discription" defaultValue={review.message}></textarea>
                        </div>
                    </div>
                    <div className="form-control mt-6 ">
                        <Link to='/reviews' className="w-50 btn bg-blue-800 border-0 hover:bg-blue-700 px-7 mr-3 capitalize">back to review</Link>
                        <button className="btn tealish-blue-bg hover:bg-blue-900 border-0" type='submit'> add review </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default UpdateReview;