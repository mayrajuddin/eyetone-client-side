import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { authContext } from '../../AuthContext/AuthProvider';

const Register = () => {
    const { createUser } = useContext(authContext)

    const navigate = useNavigate()

    const handleRegister = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        console.log(name, email, password);
        createUser(email, password)
            .then(result => {
                navigate('/')
                form.reset()
            }).catch(err => console.error(err))
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="container mx-auto">
                <div className="hero-content flex-col lg:flex-row gap-8">
                    <form onSubmit={handleRegister} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="your name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </div>
                    </form>
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;