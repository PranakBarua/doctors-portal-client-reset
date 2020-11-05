import React, { useEffect, useState } from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import PatientsList from '../PatientsList/PatientsList';

const AllPatients = () => {
    const [patients,setPatients]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/patients')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setPatients(data)
        })
    },[])
    return (
        <div className="row">
            <div className="col-md-2">
               <Sidebar></Sidebar>
           </div>
           <div className="col-md-10">
           <table className="table table-borderless">
                <thead>
                    <tr>
                        <th>Sr No</th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Age</th>
                        <th>Weight</th>
                        <th>Phone</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        patients.map((patient,index)=>
                           <tr>
                               <td>{index+1}</td>
                               <td>{patient.name}</td>
                               <td>{patient.gender}</td>
                               <td>{patient.age}</td>
                               <td>{patient.weight}</td>
                               <td>{patient.phone}</td>
                               <td>{patient.email}</td>
                               
                           </tr> 
                            
                            )
                    }
                </tbody>

            </table>
           </div>
        </div>
    );
};

export default AllPatients;