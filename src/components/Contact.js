import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const phoneNumber = '8086661953'; // Your phone number
  const whatsappLink = `https://wa.me/${8086661953}`; // WhatsApp link format

  return (
    <section className="contact">
      <h2>Get in Touch</h2>
      <p>If you're interested in collaborating or just want to say hello, I'd love to hear from you!</p>
      <div className="contact-info">
        <p>
          <FontAwesomeIcon icon={faEnvelope} /> Email: 
          <a href="mailto:akhilsuresh66762@gmail.com"> akhilsuresh66762@gmail.com</a>
        </p>
        <p>
          <FontAwesomeIcon icon={faPhone} /> Phone: 
          <a href={`tel:${8086661953}`}> Call: {8086661953}</a> | 
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer"> WhatsApp</a> | 
          <a href={`sms:${8086661953}`}> SMS</a>
        </p>
        <p>
          <FontAwesomeIcon icon={faGithub} /> GitHub: 
          <a href="https://github.com/Akhilsuresh66" target="_blank" rel="noopener noreferrer"> GIT-HUB Profile</a>
        </p>
        <p>
          <FontAwesomeIcon icon={faLinkedin} /> LinkedIn: 
          <a href="https://www.linkedin.com/in/akhil-72377a250/" target="_blank" rel="noopener noreferrer"> LinkedIn Profile</a>
        </p>
      </div>
      <p>Feel free to drop me a message or connect with me through any of the channels above. Looking forward to connecting!</p>
    </section>
  );
};

export default Contact;
