import "./contact.css";
import React, {  useState } from "react";
import contactBg from "../../assets/images/bg1.png";
import ContactForm from "./ContactForm";
import ContactAddress from "./ContactAddress";
function Contact() {
  const [message, setMessage] = useState(false);
  return (
    <div id="contact">
      <div className="contact-form bg-gray-100">
        <h1>Contact Us</h1>
        <div className="contact-container">
          <div className="main">
            <ContactAddress setMessage={setMessage}/>
            <div className="form-img">
              {message ? (
                <div id="message">
                  <ContactForm setMessage={setMessage}/>
                </div>
              ) : (
                <img className="bg1" src={contactBg} alt="" />
              )}
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Contact;
