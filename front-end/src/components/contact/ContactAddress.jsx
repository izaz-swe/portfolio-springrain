import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";

function ContactAddress({setMessage}) {
  return (
    <div className="contact-content">
              <h2>Contact Us</h2>
              <div>
                <div className="box">
                  <div className="icon">
                    <FontAwesomeIcon icon={faLocationDot}/>
                  </div>
                  <div className="text">
                    <h3>Address</h3>
                    <p>
                      DSC, Khagan, Savar <br />
                      Dhaka, Bangladesh
                    </p>
                  </div>
                </div>
                <div className="box">
                  <div className="icon">
                    {" "}
                    <FontAwesomeIcon icon={faPhone} />{" "}
                  </div>
                  <div className="text">
                    <h3>Mobile</h3>
                    <p>+8801918267179</p>
                  </div>
                </div>
                <div className="box">
                  <div className="icon">
                    {" "}
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  <div className="text">
                    <h3>Email</h3>
                    <p>izaz.swe@outlook.com</p>
                  </div>
                </div>
                <button
                  id="message-btn"
                  onClick={()=> setMessage(true)}
                  className="contact-btn"
                >
                  {" "}
                  Send A Message
                </button>
              </div>
            </div>
  )
}

export default ContactAddress