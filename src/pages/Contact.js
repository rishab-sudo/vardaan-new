import React from 'react';
import { Container } from 'react-bootstrap';
import './Contact.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import ContactForm from '../components/ContactForm'

const Contact = () => {
  return (
    <Container fluid className="contact-page">
<Container>
      {/* Section 1 - Info Boxes */}
      <section className="contact-info-section">
        <div className="info-box">
          <FaPhone className="info-icon" />
          <p>+91 9557077742,<br/> +91 8979177743</p>
        </div>
        <div className="info-box">
          <FaEnvelope className="info-icon" />
          <p>contact@vardaanev.com</p>
        </div>
        <div className="info-box">
          <FaMapMarkerAlt className="info-icon" />
          <p>Bandia Road, Parsakhera Industrial <br/> Area, Bareilly-243122, Uttar Pradesh, India</p>
        </div>
      </section>

      {/* Section 2 - Form + Image */}
      <section className="contact-form-section">
        <div className="form-container">
          <ContactForm />
        </div>
        <div className="form-image-div">
          <img src="https://via.placeholder.com/400x300" alt="Contact Visual" />
        </div>
      </section>

      {/* Section 3 - Google Map */}
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
