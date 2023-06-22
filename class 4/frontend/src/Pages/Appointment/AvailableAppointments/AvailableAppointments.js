import { format } from 'date-fns';
import AppointmentOption from './AppointmentOption';
import { useQuery } from '@tanstack/react-query';

const AvailableAppointments = ({ selectedDate }) => {
    const date = format(selectedDate, 'PP');


    const { data: appointmentOptions = [], refetch } = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: async () => {
            const res = await fetch(`http://localhost:7000/appointmentOptions?date=${date}`);
            const data = await res.json();
            return data;
        }
    });

    return (
        <div>
            <div className='text-center mb-5'>
                <h6 className='text-primari'>Available Services on {format(selectedDate, 'PP')}</h6>
                <p>Please select a service.</p>
            </div>

            <div className="mt-3 row row-cols-1 row-cols-md-3 g-4 mb-5 pb-5">
                {
                    appointmentOptions.map(option => <AppointmentOption
                        key={option._id}
                        appointmentOption={option}
                        selectedDate={selectedDate}
                        refetch={refetch}
                    ></AppointmentOption>)
                }

            </div>

        </div>
    );
};

export default AvailableAppointments;