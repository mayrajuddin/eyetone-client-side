import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../../AuthContext/AuthProvider';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const Login = () => {
    const { loginUser } = useContext(authContext)

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value
        const password = form.password.value

        loginUser(email, password)
            .then(result => {
                navigate(from, { replace: true })
                form.reset()
            }).catch(err => console.error(err))
    }
    return (
        <div className="hero min-h-screen bg-base-200 py-7">
            <div className="container mx-auto">
                <div className="hero-content">
                    <form onSubmit={handleLogin} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className="text-4xl font-bold text-center">Login now!</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn tealish-blue-bg hover:bg-blue-800 bprder-0">Login</button>
                            </div>
                            <SocialLogin></SocialLogin>
                            <p className="text-md pt-3 text-center capitalize">don't have account ? <Link to='/register' className='tealish-blue-font font-semibold'>register</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;