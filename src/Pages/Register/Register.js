import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../../AuthContext/AuthProvider';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const Register = () => {
    const { createUser, updateInfo } = useContext(authContext)
    const [error, setError] = useState()

    const navigate = useNavigate()

    const handleRegister = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value
        const email = form.email.value
        const photo = form.photo.value
        const password = form.password.value
        const info = {
            displayName: name,
            photoURL: photo
        }
        createUser(email, password)
            .then(result => {
                updateInfo(info)
                navigate('/')
                setError('')
                form.reset()
            }).catch(err => {
                setError(err.message)
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200 py-7">
            <div className="container mx-auto">
                <div className="hero-content ">
                    <form onSubmit={handleRegister} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className="text-4xl font-bold capitalize text-center">register now</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="your name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name='photo' placeholder="PhotoURL" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            </div>
                            <label className="label">
                                <span className="label-text text-warning mt-2 text-capitalize text-sm">{error}</span>
                            </label>
                            <div className="form-control mt-6">
                                <button className="btn tealish-blue-bg hover:bg-blue-700 border-0">Register</button>
                            </div>
                            <SocialLogin></SocialLogin>
                            <p className="text-md pt-3 text-center capitalize">already have an account ? <Link to='/login' className='tealish-blue-font font-semibold '>login</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;