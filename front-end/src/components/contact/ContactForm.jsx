import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useState } from "react";

function ContactForm({setMessage}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [messageInfo, setMessageInfo] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name,
      email,
      message: messageInfo,
    };
    try {
      const response = await axios.post('http://localhost:8088/contact', formData);
      console.log('Form submitted successfully:', response.message);
      setName('');
      setEmail('');
      setMessageInfo('');
      setMessage(false);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  }
  return (
    <form method="post">
      <input
        type="text"
        name="name"
        placeholder="Enter Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        name="email"
        placeholder="Enter Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={messageInfo}
        onChange={(e) => setMessageInfo(e.target.value)}
      />
      <button onClick={handleSubmit} className="contact-btn">
        Send <FontAwesomeIcon icon={faPaperPlane} />
      </button>
    </form>
  );
}

export default ContactForm;
