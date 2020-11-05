import React from 'react';
import feature from '../../../images/feature.png'
import './FeatureService.css'
const FeatureService = () => {
    return (
        <section className=" feature-container  d-flex justify-content-center  align-items-center">
            <div className="col-md-5 featureImage">
                <img className="ml-10" src={feature} alt=""/>
            </div>
            <div className="col-md-5">
                <h3>Exceptional Dental <br/> Care,on Your Terms</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro quis similique earum ipsam odio expedita reprehenderit possimus, ratione quae doloremque maxime, accusamus iste libero modi sit qui nesciunt fuga officia? Eligendi nemo facilis, delectus eum eaque quidem ea facere fuga?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro quis similique earum ipsam odio expedita reprehenderit possimus,Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro quis similique earum ipsam odio expedita reprehenderit possimus,</p>
                <button className="btn btn-primary">Learn More</button>
            </div>
            
        </section>
    );
};

export default FeatureService;