import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./OurSpecification.css";

// Example images (replace with your actual assets)
import img1 from "../assets/product-parts/durable body.jpg";
import img2 from "../assets/product-parts/Artboard 1 (1).png";
import img3 from "../assets/product-parts/Artboard 1 copy (1).png";
import img5 from "../assets/product-parts/Artboard 1 copy 2 (1).png";
import img4 from "../assets/product-parts/Artboard 1 copy 3 (1).jpg";

const OurSpecification = () => {
  return (
    <div className="our-specification-section">
        <h2 className="text-center mb-5 page-heading" style={{color:"#fff"}}>Our Specification</h2>
      <Container>
        {/* First Row - 1 Image */}
        <Row className="justify-content-center mb-3">
          <Col md={12} sm={12}> 
            <img loading="lazy" src={img1} alt="our spec 1" className="our-spec-img our-full-img" />
          </Col>
        </Row>

        {/* Second Row - 2 Images */}
        <Row className="justify-content-center mb-3">
          <Col md={6} sm={12}>
            <img loading="lazy" src={img2} alt="our spec 2" className="our-spec-img our-spec-sq-img" />
          </Col>
          <Col md={6} sm={12}>
            <img loading="lazy" src={img3} alt="our spec 3" className="our-spec-img our-spec-sq-img" />
          </Col>
        </Row>

        {/* Third Row - 2 Images */}
        <Row className="justify-content-center mb-3">
          <Col md={6} sm={12}>
            <img loading="lazy" src={img4} alt="our spec 4" className="our-spec-img our-spec-sq-img" />
          </Col>
          <Col md={6} sm={12}>
            <img loading="lazy" src={img5} alt="our spec 5" className="our-spec-img" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OurSpecification;
