import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaCogs, FaShieldAlt, FaBolt, FaChartLine, FaCloud, FaMobileAlt } from "react-icons/fa";
import "./AdvancedFeatures.css";

const AdvancedFeatures = () => {
  return (
    <Container fluid className="feature-section">
      <Container className="feature-content-container">
        <div className="feature-tag-heading-div">
      <p className='page-tag-heading about-tag-heading'>About Evlon</p>
        </div>
                <div className="feature-page-heading-div">
      <p className='page-heading'>About Evlon</p>
        </div>
        <Row className="align-items-center">
          {/* Left Column */}
          <Col md={4} className="feature-column">
            <div className="feature-item">
                  <div className="feature-icon-box">
              <FaCogs className="feature-icon" />
              </div>
              <div className="feature-text">
                <h5 className="feature-heading">Customizable</h5>
                <p className="feature-description">Easily tailor settings to fit your needs and workflow.</p>
              </div>
            </div>
            <div className="feature-item">
                  <div className="feature-icon-box">
              <FaShieldAlt className="feature-icon" />
              </div>
              <div className="feature-text">
                <h5 className="feature-heading">Secure</h5>
                <p className="feature-description">Advanced protection to keep your data safe at all times.</p>
              </div>
            </div>
            <div className="feature-item">
                  <div className="feature-icon-box">
              <FaBolt className="feature-icon" />
              </div>
              <div className="feature-text">
                <h5 className="feature-heading">Fast Performance</h5>
                <p className="feature-description">Experience lightning-fast load times and smooth operation.</p>
              </div>
            </div>
          </Col>

          {/* Center Image */}
<Col md={4} className="text-center feature-image-wrapper">
  <div className="image-container">
    <img
      src={require("../assets/about1.jpg")}
      alt="Feature Illustration"
      className="feature-image"
    />
  </div>
</Col>


          {/* Right Column */}
          <Col md={4} className="feature-column">
            <div className="feature-item feature-right">
                <div className="feature-icon-box">

              <FaChartLine className="feature-icon " />
                </div>
              <div className="feature-text">
                <h5 className="feature-heading">Analytics</h5>
                <p className="feature-description">Track usage and performance with built-in analytics tools.</p>
              </div>
            </div>
            <div className="feature-item feature-right">
                   <div className="feature-icon-box">
              <FaCloud className="feature-icon" />
              </div>
              <div className="feature-text">
                <h5 className="feature-heading">Cloud Sync</h5>
                <p className="feature-description">Seamlessly sync your work across devices via cloud.</p>
              </div>
            </div>
            <div className="feature-item feature-right">
                   <div className="feature-icon-box">
              <FaMobileAlt className="feature-icon" />
              </div>
              <div className="feature-text">
                <h5 className="feature-heading">Mobile Ready</h5>
                <p className="feature-description">Access features anytime on any device with full support.</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default AdvancedFeatures;
