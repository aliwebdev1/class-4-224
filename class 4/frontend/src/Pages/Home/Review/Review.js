import React from 'react';
import './Review.css'
import block from '../../../assets/images/Mask Group 7@2x 1.png'
import people1 from '../../../assets/images/people-1 1.png'
import ReviewItems from './ReviewItems';

const Review = () => {

    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            img: people1,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California'
        },
        {
            _id: 2,
            name: 'Winson Herry',
            img: people1,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California'
        },
        {
            _id: 3,
            name: 'Winson Herry',
            img: people1,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California'
        },
    ]
    return (
        <div>
            <div className='d-flex justify-content-between align-items-center'>
                <div className="col-12 col-md-6">
                    <h5 className='text-primari'>Testimonial</h5>
                    <h4>What Our Patients Says</h4>
                </div>
                <div className="col-12 col-md-6 d-flex justify-content-end ">
                    <img src={block} alt="" />
                </div>

            </div>

            <div className="mt-3 row row-cols-1 row-cols-md-3 g-4 mb-5 pb-5">
                {
                    reviews.map(reviewItem => <ReviewItems
                        key={reviewItem._id}
                        reviewItem={reviewItem}
                    ></ReviewItems>)
                }

            </div>

        </div>
    );
};

export default Review;