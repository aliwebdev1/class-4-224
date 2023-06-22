import React, { useState } from 'react';
import AppintmentmentBanner from '../AppointmentBanner/AppintmentmentBanner';
import AvailableAppointments from '../AvailableAppointments/AvailableAppointments';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <div>
            <AppintmentmentBanner
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            ></AppintmentmentBanner>
            <AvailableAppointments
                selectedDate={selectedDate}
            ></AvailableAppointments>

        </div>
    );
};

export default Appointment;