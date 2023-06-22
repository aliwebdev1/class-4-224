import React from 'react';
import './Banner.css'
import chair from '../../../assets/images/chair 1.png'


const Banner = () => {
    return (
        <div className='banner row py-5 my-5'>
            <div className="col-12 col-md-6 mb-5 mb-md-0">
                <h1>Your New Smile Starts Here</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                <button className='btn-primari'>GET STARTED</button>
            </div>
            <div className="col-12 col-md-6">
                <img className='img-fluid' src={chair} alt="chair" />
            </div>

        </div>
    );
};

export default Banner;