import React from 'react';

const AppointmentsShortList = ({appointments}) => {
    console.log(appointments)
    return (
        <div>
            <table className="table table-borderless">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        appointments.map(appointment=>
                           <tr>
                               <td>{appointment.name}</td>
                               <td>{appointment.phone}</td>
                               <td>{appointment.email}</td>
                           </tr> 
                            
                            )
                    }
                </tbody>

            </table>
        </div>
    );
};

export default AppointmentsShortList;