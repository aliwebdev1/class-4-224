import React, { useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import { Button } from 'react-bootstrap';

const AppointmentOption = ({ appointmentOption, selectedDate, refetch }) => {
    const { name, slots } = appointmentOption;

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    return (
        <div className='col text-center'>
            <div className="service p-3">
                <h5 className="card-title my-3">{name}</h5>
                <p className="card-text ">{slots.length > 0 ? slots[0] : 'Try another day'}</p>
                <p>{slots.length} {slots.length > 1 ? "Spaces" : "Space"} Available</p>


                <Button className='btn btn-primari bg-primari' onClick={handleShow}>
                    Book Appointment
                </Button>

                <BookingModal
                    appointmentOption={appointmentOption}
                    show={show}
                    setShow={setShow}
                    selectedDate={selectedDate}
                    refetch={refetch}
                ></BookingModal>
            </div>
        </div >
    );
};

export default AppointmentOption;