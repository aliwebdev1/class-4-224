import React, { useState } from 'react';
import chair from '../../../assets/images/chair 1.png'
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';

const AppintmentmentBanner = ({ selectedDate, setSelectedDate }) => {


    return (
        <div className='banner row py-5 my-5'>
            <div className="col-12 col-md-6 mb-5 mb-md-0">
                <DayPicker
                    mode='single'
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                />
            </div>
            <div className="col-12 col-md-6">
                <img className='img-fluid' src={chair} alt="chair" />
            </div>
        </div>
    );
};

export default AppintmentmentBanner;