import React from 'react';

const ReviewItems = ({ reviewItem }) => {
    const { img, name, review } = reviewItem;
    return (
        <div className='col'>
            <div className="service p-5">
                <div className="ps-2">
                    <p className="card-text ">{review}</p>
                </div>
                <div className='d-flex mt-3'>
                    <img src={img} className="img-fluid" alt="..." />
                    <div className='ms-3'>
                        <h5 className="card-title my-3">{name}</h5>
                        <p>California</p>
                    </div>
                </div>

            </div>
        </div >
    );
};

export default ReviewItems;