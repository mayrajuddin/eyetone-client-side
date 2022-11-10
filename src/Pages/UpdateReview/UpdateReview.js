import React from 'react';

const UpdateReview = () => {
    const user = {}
    const a = e => {

    }
    return (
        <div>
            <form onSubmit={a} className="">
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
    );
};

export default UpdateReview;