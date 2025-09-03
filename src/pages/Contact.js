import React from 'react';
import { Container } from 'react-bootstrap';
import './Contact.css';
import { FaPhoneVolume, FaEnvelope } from "react-icons/fa6";
import { SiLibreofficewriter } from "react-icons/si";
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <Container fluid className="contact-page">
  
      <Container className="contact-content-container">
          <div className='contact-page-heading-div'>
                  <div className='contact-tag-heading-div'>
         <p className='page-tag-heading'>CONTACT US</p> 
         </div>
          <h2 className='page-heading'>Reach Us At Anytime</h2>
          <h5 style={{ marginTop: "-12px" }}>
            Have questions or need any help? We’re here to help you with that
          </h5>
        </div>

        {/* Section 1 */}
        <section className="contact-main-section">

          {/* Left: Info Boxes */}
          <div className="contact-info-section">

            {/* Phone Box */}
            <div className="info-box">
              <div className='info-box-icon-div'>
                <FaPhoneVolume className="info-icon" />
              </div>

              {/* Bottom content */}
              <div className="info-bottom">
                <p>
                  +91 9557077742,<br />
                  +91 8979177743
                </p>
                <a href="tel:+919557077742" className="contact-info-btn">Call</a>
              </div>
            </div>

            {/* Email Box */}
            <div className="info-box">
              <div className='info-box-icon-div'>
                <FaEnvelope className="info-icon" />
              </div>

              {/* Bottom content */}
              <div className="info-bottom">
                <p>contact@vardaanev.com</p>
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@vardaanev.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-info-btn"
                >
                  Email
                </a>
              </div>
            </div>

            {/* Address Box */}
            <div className="info-box add-info-box">
              <div className='info-box-icon-div'>
                <SiLibreofficewriter className="info-icon" />
              </div>

              {/* Bottom content */}
              <div className="info-bottom">
                <p className='contact-add'>
                  Bandia Road, Parsakhera Industrial Area,<br />
                  Bareilly-243122, Uttar Pradesh, India
                </p>
                <a 
                  href="https://www.google.com/maps/place/Bandia+Road,+Parsakhera+Industrial+Area,+Bareilly,+Uttar+Pradesh+243122"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-info-btn"
                >
                  View Map
                </a>
              </div>
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3565.025123919405!2d79.356557!3d28.42793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974a4f2b7c32653%3A0xf47cdb5f9ebf7a9f!2sBandia%20Road%2C%20Parsakhera%20Industrial%20Area%2C%20Bareilly%2C%20Uttar%20Pradesh%20243122!5e0!3m2!1sen!2sin!4v1692999999999!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </section>

      </Container>
    </Container>
  );
};

export default Contact;
