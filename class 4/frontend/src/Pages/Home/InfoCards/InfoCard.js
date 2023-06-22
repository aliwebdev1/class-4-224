import React from 'react';
import './infoCard.css'

const InfoCard = ({ card }) => {
    const { bgClass, icon, description, name } = card;
    return (
        <div className='col'>
            <div className={`info d-flex justify-content-between align-items-center rounded text-white p-3 ${bgClass}`}>
                <img src={icon} className="img-fluid" alt="..." />
                <div className="ps-2 text-white">
                    <h5 className="card-title text-white">{name}</h5>
                    <p className="card-text text-white">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;