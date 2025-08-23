import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./OurSpecification.css";

// Example images (replace with your actual assets)
import img1 from "../assets/product-parts/xf1 (1).jpg";
import img2 from "../assets/product-parts/xf2 (1).jpg";
import img3 from "../assets/product-parts/xf3 (1).jpg";
import img4 from "../assets/product-parts/xf4 (1).jpg";
import img5 from "../assets/product-parts/xf5 (1).jpg";

const OurSpecification = () => {
  return (
    <div className="our-specification-section">
        <h2 className="text-center color-white mb-5">Our Specification</h2>
      <Container>
        {/* First Row - 1 Image */}
        <Row className="justify-content-center mb-4 w-100">
          <Col md={12}>
            <img src={img1} alt="our spec 1" className="our-spec-img our-full-img" />
          </Col>
        </Row>

        {/* Second Row - 2 Images */}
        <Row className="mb-4">
          <Col md={6}>
            <img src={img2} alt="our spec 2" className="our-spec-img" />
          </Col>
          <Col md={6}>
            <img src={img3} alt="our spec 3" className="our-spec-img" />
          </Col>
        </Row>

        {/* Third Row - 2 Images */}
        <Row>
          <Col md={6}>
            <img src={img4} alt="our spec 4" className="our-spec-img" />
          </Col>
          <Col md={6}>
            <img src={img5} alt="our spec 5" className="our-spec-img" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OurSpecification;
