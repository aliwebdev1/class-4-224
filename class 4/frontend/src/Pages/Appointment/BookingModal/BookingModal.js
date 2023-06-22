import { format } from 'date-fns';
import React, { useContext } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AuthContext } from '../../../contexts/AuthProvider';
import { toast } from 'react-hot-toast';

const BookingModal = ({ show, setShow, appointmentOption, selectedDate, refetch }) => {
    const { name, slots } = appointmentOption;
    const handleClose = () => setShow(false);
    const date = format(selectedDate, 'PP');
    const { user } = useContext(AuthContext);


    const handleBooking = event => {
        event.preventDefault()
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const phone = form.phone.value;
        const email = form.email.value;

        const booking = {
            appointmentDate: date,
            treatment: appointmentOption.name,
            patient: name,
            slot,
            phone,
            email,
        }

        fetch('http://localhost:7000/bookings', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('Booking Confiremed')
                    refetch()
                }
                else {
                    toast.error(data.message)
                }
            })




        setShow(false)
    }
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleBooking}>
                        <div className="mb-3">
                            <input type="text" name='date' value={date} disabled className="form-control" />
                        </div>
                        <div className="mb-3">
                            <select className="form-select" name="slot">
                                {
                                    slots.map((slot, i) => <option
                                        key={i}
                                        value={slot}>{slot}</option>)
                                }

                            </select>
                        </div>

                        <div className="mb-3">
                            <input type="text" defaultValue={user?.displayName} disabled name='name' placeholder='Name' className="form-control" />
                        </div>

                        <div className="mb-3">
                            <input type="email" name='email' defaultValue={user?.email} disabled placeholder='Email' className="form-control" />
                        </div>

                        <div className="mb-3">
                            <input type="number" name='phone' placeholder='Phone' className="form-control" />
                        </div>

                        <button type="submit" className="btn btn-secondary w-100">Submit</button>
                    </form>
                </Modal.Body>

            </Modal>
        </>
    );
};

export default BookingModal;