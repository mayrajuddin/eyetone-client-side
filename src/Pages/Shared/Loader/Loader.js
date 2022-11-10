import React, { } from 'react';
import { HashLoader } from 'react-spinners';

const Loader = () => {
    return (
        <div className='h-screen flex items-center justify-center bg-sky-50'>
            <HashLoader
                color="#082567"
                loading
                size={60}
            />
        </div>
    );
};

export default Loader;