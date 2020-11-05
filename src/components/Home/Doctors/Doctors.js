import React, { useEffect, useState } from 'react';
import doctor from '../../../images/doctor.png'
import DoctorInfo from '../DoctorInfo/DoctorInfo';

const Doctors = () => {
    // const doctors=[
    //     {
    //         name:"Dr Leo",
    //         phone:"+16374926493648",
    //         image:doctor,
    //         icon:faPhone
    //     },
    //     {
    //         name:"Dr Trincao",
    //         phone:"+18395739473947",
    //         image:doctor,
    //         icon:faPhone,
    //     },
    //     {
    //         name:"Dr Dest",
    //         phone:"+13329745073656",
    //         image:doctor,
    //         icon:faPhone,
    //     },
    // ]
    const [doctors,setDoctors]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/doctors')
        .then(res=>res.json())
        .then(data=>setDoctors(data))
    },[])
    return (
        <div>
            <div className="m-10 text-center">
                <h2>Our Doctor's</h2>
            </div>
            <div className="row">
                {
                    doctors.map(doctor=><DoctorInfo doctor={doctor}></DoctorInfo>)
                }
            </div>
        </div>
    );
};

export default Doctors;