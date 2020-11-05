import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div className="contact-container text-white d-flex justify-content-center align-items-center mt-5">
            <form action="">
                <div className="text-center">
                <h5 className="text-primary">CONTACT US</h5>
                <br/>
                <h2 className="text-secondary">Always Connect With Us</h2>
                <br/>
                </div>
                <input type="text" className="input-field mt-5" placeholder="Email address"/><br/>
                <input type="text" className="input-field mt-5" placeholder="Subject"/><br/>
                <input type="text" className="input-field mt-5" placeholder="Your message"/> 
            </form>
        </div>
    );
};

export default Contact;