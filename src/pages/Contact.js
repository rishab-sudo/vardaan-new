import React from 'react';
import { Container } from 'react-bootstrap';
import './Contact.css';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import { FaPhoneVolume } from "react-icons/fa6";
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <Container fluid className="contact-page">
      <Container className="contact-content-container">
<div className='contact-tag-heading-div'>
  <p className='page-tag-heading'>CONTACT</p>
</div>
<div className='contact-page-heading-div '>
  <h2 className='page-heading'>Reach Us At Anytime</h2>
  <h5 style={{marginTop:"-12px"}}>Have questions or need any help? We’re here to help you with that</h5>
</div>
        {/* Section 1 - Form on Left + Info Boxes on Right */}
        <section className="contact-main-section">
     

          {/* Left: Only Two Info Boxes */}
          <div className="contact-info-section">
            <div className="info-box">
                <div className='info-box-icon-div'>
              <FaPhoneVolume className="info-icon" />
              </div>
              <p>
                +91 9557077742,<br />
                +91 8979177743
              </p>
            </div>
            <div className="info-box">
              <div className='info-box-icon-div'>
              <FaEnvelope className="info-icon" />
              </div>
              <p>contact@vardaanev.com</p>
            </div>
          </div>

               {/* Right: Contact Form */}
          <div className="form-container">
            <ContactForm />
          </div>
        </section>

        {/* Section 2 - Google Map */}
        <section className="map-section">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83930356084!2d77.06889994201399!3d28.52728034348851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3a802b60bfb%3A0x8c0c1eec3ebf47a1!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1665406892550!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </section>

      </Container>
    </Container>
  );
};

export default Contact;
