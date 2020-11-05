import React, { useContext, useEffect, useState } from 'react';
import AppointmentsByDate from '../AppointmentsByDate/AppointmentsByDate';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { userContext } from '../../../App';
const Dashboard = () => {
    const containerStyle={
        backgroundColor:"#F4FDFB",
        height:"100%"
    }
    const [loggedInUser,setLoggedInUser]=useContext(userContext)
    const [selectedDate,setSelectedDate]=useState(new Date())
    const [appointments,setAppointments]=useState([])
    const handleDateChange=date=>{
        setSelectedDate(date)    
    }
    useEffect(()=>{
        fetch('http://localhost:5000/AppointmentsByDate',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify({date:selectedDate,email:loggedInUser.email})
        })
        .then(res=>res.json())
        .then(data=>setAppointments(data))
    },[selectedDate])
    return (

            <div style={containerStyle} className="container-fluid row">
                <div className="col-md-2 mr-5">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-4">
                    <Calendar 
                        onChange={handleDateChange}
                        value={new Date()}
                    />
                </div>
                <div className="col-md-4">
                    <AppointmentsByDate appointments={appointments}></AppointmentsByDate>
                </div>
            </div>

     
    );
};

export default Dashboard;