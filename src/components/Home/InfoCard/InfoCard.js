import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './InfoCard.css'
const InfoCard = ({info}) => {
    return (
        <div className="col-md-4 info-card">
           <div className={`d-flex text-white  justify-content-between info-container info-${info.background}`}>
                <div>
                    <FontAwesomeIcon className="info-icon" icon={info.icon}></FontAwesomeIcon>
                </div>
                <div>
                    <h2>{info.title}</h2>
                    <small>{info.description}</small>
                </div>
           </div>
        </div>
    );
};

export default InfoCard;