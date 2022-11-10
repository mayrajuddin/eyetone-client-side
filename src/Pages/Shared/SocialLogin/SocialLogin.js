import React, { useContext } from 'react';
import { authContext } from '../../../AuthContext/AuthProvider';
import { FaGoogle } from "react-icons/fa";
const SocialLogin = () => {
    const { googleLogin } = useContext(authContext)

    const hangleGoogle = () => {
        googleLogin()
            .then(result => {

            }).then(err => console.error(err))
    }
    return (
        <div>
            <div className="divider">OR</div>
            <button className='btn bg-blue-800 border-0 hover:bg-blue-700 w-full capitalize' type='button' onClick={hangleGoogle}>  <FaGoogle className='mr-3' /> google</button>
        </div>
    );
};

export default SocialLogin;