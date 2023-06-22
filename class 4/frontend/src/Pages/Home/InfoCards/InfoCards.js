import React from 'react';
import clock from '../../../assets/icon/clock.png';
import marker from '../../../assets/icon/Path 7199.png';
import phone from '../../../assets/icon/Path 7196.png';
import InfoCard from './InfoCard';
import './infoCards.css'

const InfoCards = () => {
    const cardData = [
        {
            id: 1,
            name: 'Opening Hours',
            description: 'Open 9.00 am to 5.00pm everyday',
            icon: clock,
            bgClass: 'bg-primari'
        },
        {
            id: 2,
            name: 'Our Locations',
            description: 'Open 9.00 am to 5.00pm everyday',
            icon: marker,
            bgClass: 'bg-secondary'
        },
        {
            id: 3,
            name: 'Contact Us',
            description: 'Open 9.00 am to 5.00pm everyday',
            icon: phone,
            bgClass: 'bg-primari'
        },
    ]
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4 pb-5">
            {
                cardData.map(card => <InfoCard
                    key={card.id}
                    card={card}
                ></InfoCard>)
            }

        </div>
    );
};

export default InfoCards;