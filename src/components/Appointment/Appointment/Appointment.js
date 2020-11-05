import React, { useState } from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import AppointmentHeader from '../../Appointment/AppointmentHeader/AppointmentHeader'
import BookAppointments from '../BookAppointments/BookAppointments';
const Appointment = () => {

    const [selectedDate,setSelectedDate]=useState(new Date())
    const handleDateChange=date=>{
        setSelectedDate(date)
        console.log(selectedDate)
    }
    return (
        <div>
            <Navbar navbarColor={true}></Navbar>
            <AppointmentHeader handleDateChange={handleDateChange}></AppointmentHeader>
            <BookAppointments date={selectedDate}></BookAppointments>
        </div>
    );
};

export default Appointment;