import React from 'react';
import doctor from '../../../assets/images/doctor-small 1.png'
import './Appointment.css'
const Appointment = () => {
    return (
        <div className='appoinment mb-5'>
            <div className="container">
                <div className="row align-items-center">
                    <div className=" col-12 col-md-5">
                        <img src={doctor} alt="" />
                    </div>
                    <div className=" col-12 col-md-7 pe-2 pe-4">
                        <h6 className='text-primari my-3'>Appointment</h6>
                        <h3 className='text-white'>Make an appointment Today</h3>
                        <p className='text-white'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button className='btn btn-primari bg-primari'>GET STARTED</button>

                    </div>
                </div>
            </div>


        </div>
    );
};

export default Appointment;