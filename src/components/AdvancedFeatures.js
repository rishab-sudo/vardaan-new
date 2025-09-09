import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaCogs, FaShieldAlt, FaBolt, FaChartLine, FaCloud, FaMobileAlt } from "react-icons/fa";
import "./AdvancedFeatures.css";

const AdvancedFeatures = () => {
  return (
    <Container fluid className="feature-section">
      <Container className="feature-content-container">
        <div className="feature-tag-heading-div">
      <p className='page-tag-heading about-tag-heading'>KEY FEATURES</p>
        </div>
                <div className="feature-page-heading-div">
      <p className='page-heading '>Engineering Excellence in Every Detail</p>
        </div>
        <Row className="align-items-center mt-5">
          {/* Left Column */}
          <Col md={4} className="feature-column">
            <div className="feature-item">
                  <div className="feature-icon-box">
              <img loading="lazy" src={require("../assets/icons/kf11.png")} className="feature-icon" alt=""/>
              </div>
              <div className="feature-text">
                <h5 className="feature-heading">Advanced Battery Technology</h5>
                <p className="feature-description"> Long-lasting lithium-ion batteries with extended range and rapid charging capabilities.</p>
              </div>
            </div>
            <div className="feature-item">
                  <div className="feature-icon-box">
                           <img loading="lazy" src={require("../assets/icons/kf22.png")} className="feature-icon" alt=""/>
              </div>
              <div className="feature-text">
                <h5 className="feature-heading"> Smart Charging Solutions</h5>
                <p className="feature-description"> Fast charging infrastructure compatibility with intelligent power management.</p>
              </div>
            </div>
            <div className="feature-item">
                  <div className="feature-icon-box">
                           <img loading="lazy" src={require("../assets/icons/kf33.png")} className="feature-icon" alt=""/>
              </div>
              <div className="feature-text">
                <h5 className="feature-heading">Safety First Design</h5>
                <p className="feature-description">Multi-layer safety systems with robust build quality and reliable performance.</p>
              </div>
            </div>
          </Col>

          {/* Center Image */}
<Col md={4} className="text-center feature-image-wrapper">
  <div className="image-container">
    <img loading="lazy"
      src={require("../assets/home/320 x480.jpg")}
      alt="Feature Illustration"
      className="feature-image"
    />
  </div>
</Col>


          {/* Right Column */}
          <Col md={4} className="feature-column">
            <div className="feature-item feature-right">
                <div className="feature-icon-box">

                          <img loading="lazy" src={require("../assets/icons/kf44.png")} className="feature-icon" alt=""/>
                </div>
              <div className="feature-text">
                <h5 className="feature-heading"> Zero Emission Performance </h5>
                <p className="feature-description">100% electric powertrains delivering smooth, silent, and pollution-free rides.</p>
              </div>
            </div>
            <div className="feature-item feature-right">
                   <div className="feature-icon-box">
                           <img loading="lazy" src={require("../assets/icons/kf55.png")} className="feature-icon" alt=""/>
              </div>
              <div className="feature-text">
                <h5 className="feature-heading">Connected Technology</h5>
                <p className="feature-description">IoT-enabled smart features with mobile app integration and real-time monitoring.</p>
              </div>
            </div>
            <div className="feature-item feature-right">
                   <div className="feature-icon-box">
              <img loading="lazy" src={require("../assets/icons/kf66.png")} className="feature-icon" alt=""/>
              </div>
              <div className="feature-text">
                <h5 className="feature-heading">Cost-Effective Operation </h5>
                <p className="feature-description">Significantly lower running costs compared to conventional fuel vehicles.</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default AdvancedFeatures;
