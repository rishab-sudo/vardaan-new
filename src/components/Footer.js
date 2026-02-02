import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import "./Footer.css";

const Footer = () => {
  return (
    <Container fluid className="footer-section">
      <div className="footer-overlay">
     
          <Row className="footer-content-wrapper">
            {/* Left Column */}
            <Col lg={4} md={12} sm={12} className="footer-column-wrapper">
              <div className="footer-left">
                <div className='footer-logo-div'>
                <img src={require("../assets/nav-logo.png")} alt="logo" className="footer-logo" />
                </div>
                <div className="trust-text">
                  <h2>Driving India Towards a Cleaner, Smarter, Sustainable EV Future</h2>
                  <p>
Vardaan EV is redefining mobility with premium electric vehicles built for performance, safety, and sustainability. 
Join our mission to create a greener tomorrow. Explore our eco-friendly rides today and experience the perfect blend of innovation, comfort, and responsibility.
                  </p>
                </div>
                <div className="social-icons">
                  <a href=" https://www.facebook.com/profile.php?id=61561890425872"><FaFacebook /></a>
                  <a href="https://www.instagram.com/vardaan_ev/"><FaInstagram /></a>
                  <a href=" https://www.linkedin.com/company/vardaan-ev/"><FaLinkedin /></a>
                 <a href="  https://youtube.com/shorts/F9EsfyJBWAo?si=mJUvIflHEwDLcKUi"><FaYoutube /></a>
                </div>
              </div>
            </Col>

            {/* Center Column - Quick Links */}
            <Col lg={3} md={6} sm={12} className="footer-column-wrapper">
              <div className="footer-column">
                <div className="col-text-div">
                  <h4>Quick Links</h4>
                  <div className="footer-links-column">
                    <a href="/home"> Home</a>
                    <a href="/about"> About Us</a>
                    <a href="/product"> Products</a>
                    <a href="/contact"> Contact Us</a>
                    {/* <a href="/career">Careers</a>
                    <a href="/dealer">Become a Dealer</a> */}
                  </div>
                </div>
              </div>
            </Col>

            {/* Right Column - Contact Info */}
            <Col lg={3} md={5} sm={12} className="footer-column-wrapper">
              <div className="footer-column">
                <div className="col-text-div">
                  <h4>Contact Info</h4>
                  <div className="footer-contact-info">
                    <p><strong>Address:</strong><br />Bandia Road, Parsakhera Industrial Area,<br />Bareilly-243122, Uttar Pradesh, India</p>
                    <p><strong>Phone:</strong><br />
                      <a href="tel:+919557077742">+91 9557077742, +91 8979177743</a>
                    </p>
                    <p><strong>Email:</strong><br />
                      <a href="mailto:contact@vardaanev.com">contact@vardaanev.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
      
      </div>

      <div className='copyright-div'>
        Copyright © 2026 <span style={{ color: "#05956c" }}>Vardaan ev</span>. All Right Reserved.
      </div>
    </Container>
  );
};

export default Footer;
