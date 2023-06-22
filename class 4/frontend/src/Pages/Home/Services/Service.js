import React from 'react';
import './Service.css'

const Service = ({ service }) => {
    const { img, name, description } = service;
    return (
        <div className='col text-center'>
            <div className="service p-3">
                <img src={img} className="img-fluid" alt="..." />
                <div className="ps-2">
                    <h5 className="card-title my-3">{name}</h5>
                    <p className="card-text ">{description}</p>
                </div>
            </div>
        </div >
    );
};

export default Service;