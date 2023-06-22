import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <div className='row'>
                <div className="col-12 col-md-4">
                    <h5>SERVICES</h5>
                    <p>Emergency Checkup</p>
                    <p>Emergency Checkup</p>
                    <p>Emergency Checkup</p>
                    <p>Emergency Checkup</p>
                </div>
                <div className="col-12 col-md-4">
                    <h5>ORAL HEALTH</h5>
                    <p>Fluoride Treatment</p>
                    <p>Fluoride Treatment</p>
                    <p>Fluoride Treatment</p>

                </div>
                <div className="col-12 col-md-4">
                    <h5>OUR ADDRESS</h5>
                    <p>New York - 101010 Hudson</p>
                </div>
            </div>
            <p className='text-center py-5'>
                Copyright 2023 All Rights Reserved
            </p>
        </footer>
    );
};

export default Footer;