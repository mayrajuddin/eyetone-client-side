import React from 'react';
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';
import logo from '../../../a.png'
const Footer = () => {
    return (
        <div className='tealish-blue-bg'>
            <footer className="container mx-auto footer items-center p-4  text-neutral-content">
                <div className="items-center grid-flow-col">
                    <img src={logo} alt="" className='h-8' />
                    <p className='capitalize text-md'>Copyright © 2022 - All right reserved by <span className='font-bold text-lg'>eyetone</span> </p>
                </div>
                <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <a href='https://www.youtube.com/' target='blank'>  <FaYoutube size={28} /> </a>
                    <a href='https://www.twitter.com/' target='blank'> <FaTwitter size={28} /> </a>
                    <a href='https://www.facebook.com/' target='blank'> <FaFacebookF size={28} /> </a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;