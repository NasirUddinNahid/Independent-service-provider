import React from 'react';
import './Footer.css';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div>
            <footer className='footer-design'>
                <p><small>copyright @ {year} </small></p>
            </footer>
        </div>
    );
};

export default Footer;