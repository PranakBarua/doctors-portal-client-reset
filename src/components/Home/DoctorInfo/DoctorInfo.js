import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './DoctorInfo.css'
import {faPhone } from '@fortawesome/free-solid-svg-icons'
const DoctorInfo = ({doctor}) => {
    return (
        <div className="col-md-4">
            <div className="text-center doctor-container">
                <img style={{height:'300px'}} src={`data:image/png;base64,${doctor.image.img}`} alt="" className="img-fluid"/>
                <h4 className="mt-3">{doctor.name}</h4>
                <p className="mt-2"><FontAwesomeIcon style={{height:'15px'}} className="info-icon mr-2" icon={faPhone}></FontAwesomeIcon> +880-188-934789</p>
                
            </div>
        </div>
    );
};

export default DoctorInfo;