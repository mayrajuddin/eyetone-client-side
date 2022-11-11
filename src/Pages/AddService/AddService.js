import React, { useContext, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { authContext } from '../../AuthContext/AuthProvider';

const AddService = () => {
    const { token } = useContext(authContext)
    const [item, setItem] = useState({})
    const addService = e => {
        e.preventDefault()
        const form = e.target

        fetch(`${process.env.REACT_APP_API_URI}/services`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                Authorization: 'Bearer ' + token
            },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Sevice Add Successfull')
                    form.reset()
                }
            })
    }
    const input = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newItem = { ...item }
        newItem[field] = value
        setItem(newItem)
    }
    return (
        <div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className="container mx-auto">
                <h2 className='text-2xl text-center font-bold capitalize py-5'>add Service</h2>
                <form onSubmit={addService} className="">
                    <div className="bg-slate-200 p-6 rounded">
                        <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Service Name</span>
                                </label>
                                <input onBlur={input} type="text" name='serviceName' placeholder="service name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Title</span>
                                </label>
                                <input onBlur={input} type="text" name='title' placeholder="Title" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image URL</span>
                                </label>
                                <input onBlur={input} type="text" name='img' placeholder="image Url" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Ratings</span>
                                </label>
                                <input onBlur={input} type="text" name='rating' placeholder="ratings" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input onBlur={input} type="text" name='price' placeholder="Price" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Discription</span>
                                </label>
                                <textarea onBlur={input} name='description' className="textarea textarea-bordered" placeholder="Discription"></textarea>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary w-40" type='submit'> submit </button>
                        </div>
                    </div>
                </form>
            </div>
        </div >
    );
};

export default AddService;