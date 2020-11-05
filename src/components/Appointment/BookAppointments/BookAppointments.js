import React from 'react';
import BookingData from '../BookingData/BookingData';

const BookAppointments = ({date}) => {
    const booking=[
        {
            id:1,
            subject:'Teeth Orthodontics',
            visitingHour:'8:00 AM - 9:00 AM',
            totalSpace:10,
        },
        {
            id:2,
            subject:'Cosmetic Dentistry',
            visitingHour:'8:00 AM - 9:00 AM',
            totalSpace:10,
        },
        {
            id:3,
            subject:'Teeth Cleaning',
            visitingHour:'8:00 AM - 9:00 AM',
            totalSpace:10,
        },
        {
            id:4,
            subject:'Cavity Protection',
            visitingHour:'8:00 AM - 9:00 AM',
            totalSpace:10,
        },
        {
            id:5,
            subject:'Teeth Orthodontics',
            visitingHour:'8:00 AM - 9:00 AM',
            totalSpace:10,
        },
        {
            id:6,
            subject:'Teeth Orthodontics',
            visitingHour:'8:00 AM - 9:00 AM',
            totalSpace:10,
        },
    ]
    return (
        <section>
            <h3  className="text-center text-brand mb-5">Available Appointments on {date.toDateString()}</h3>
            <div className="row">
                {
                    booking.map(booking=><BookingData booking={booking} key={booking.id} date={date}></BookingData>)
                }
            </div>
        </section>
    );
};

export default BookAppointments;