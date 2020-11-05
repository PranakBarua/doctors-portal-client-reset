import React from 'react';
import AppointmentsShortList from '../AppointmentsShortList/AppointmentsShortList';

const AppointmentsByDate = ({appointments}) => {
    return (
        <div>
            <h1 className="text-brand text-center">Appointments</h1>
            {
                appointments.length?
                <AppointmentsShortList appointments={appointments}></AppointmentsShortList>
                :
                <h2 className="mt-5 text-center">No Appointments for this date</h2>
            }
        </div>
    );
};

export default AppointmentsByDate;