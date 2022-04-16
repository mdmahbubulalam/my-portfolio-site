import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer className="text-center footer-bg p-2">
            <p className="text-white">&copy; {(new Date()).getFullYear()} Copyright <span className='text-color'>Mohammad Mahbubul Alam</span>. All Rights Reserved</p>
        </footer>
    );
};

export default Footer;