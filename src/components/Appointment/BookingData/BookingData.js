import React from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';
import './BookingData.css'
const BookingData = (props) => {
    const {id,subject,visitingHour,totalSpace}=props.booking
    var subtitle;
    const [modalIsOpen,setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal(){
        setIsOpen(false);
    }
    return (
        <div className="col-md-4 text-center">
            <div className="booking-container">
                <h2 className="text-brand">{subject}</h2>
                <h5>{visitingHour}</h5>
                <p>{totalSpace} Space Available</p>
                <button onClick={openModal}className="btn btn-primary">Book Appointment</button>
                <AppointmentForm date={props.date} appointmentOn={subject} modalIsOpen={modalIsOpen} closeModal={closeModal} ></AppointmentForm>
            </div>
        </div>
    );
};

export default BookingData;