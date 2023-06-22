import React from 'react';
import fluoride from '../../../assets/images/fluoride 1.png'
import cavity from '../../../assets/images/cavity 1.png'
import whitening from '../../../assets/images/whitening 1.png'
import expectional from '../../../assets/images/treatment 1.png'
import Service from './Service';


const Services = () => {
    const servicesData = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: fluoride
        },
        {
            id: 2,
            name: 'Cavity Filling',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: cavity
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: whitening
        },
    ]
    return (
        <div className='my-5'>
            <div className='text-center'>
                <h6 className='text-primari'>OUR SERVICES</h6>
                <h3>Services We Provide</h3>
            </div>
            <div className="mt-3 row row-cols-1 row-cols-md-3 g-4">
                {
                    servicesData.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }

            </div>
            <div className="expectional-dental">
                <div className="row align-items-center">
                    <div className="col-12 col-md-6">
                        <img className='img-fluid' src={expectional} alt="image" />
                    </div>
                    <div className="col-12 col-md-6">
                        <h1>Exceptional Dental Care, on Your Terms</h1>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>

                        <button className='btn btn-primari bg-primari'>GET STARTED</button>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Services;