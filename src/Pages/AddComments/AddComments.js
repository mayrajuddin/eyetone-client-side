import React, { useContext, } from 'react';
import { authContext } from '../../AuthContext/AuthProvider';

const AddComments = () => {
    const { user } = useContext(authContext)
    const handleComments = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value;
        const email = form.email.value;
        const ratings = form.ratings.value
        const message = form.message.value

        const value = {
            name, email, ratings, message
        }
        console.log(value);
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(value)
        }).then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    form.reset()
                    console.log(data);
                }
            })

    }
    return (
        <div>
            <div className="container mx-auto">
                <h2 className='text-2xl text-center font-bold capitalize '>leave your comments</h2>
                <div className="divider"></div>
                <form onSubmit={handleComments} className="">
                    <div className="bg-slate-200 p-12 rounded">
                        <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" defaultValue={user?.displayName} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Ratings</span>
                                </label>
                                <input type="text" name='ratings' placeholder="ratings" className="input input-bordered" />
                            </div>
                            <div className="form-control col-span-2">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" defaultValue={user.email} className="input input-bordered" />
                            </div>
                            <div className="form-control col-span-2">
                                <label className="label">
                                    <span className="label-text">Your Message</span>
                                </label>
                                <textarea name='message' className="textarea h-32 textarea-bordered" placeholder="Discription"></textarea>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary w-40" type='submit'> add review </button>
                        </div>
                    </div>
                </form>
            </div>
        </div >
    );
};

export default AddComments;