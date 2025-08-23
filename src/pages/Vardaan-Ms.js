import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Vardaan-Ms.css";

// Backgrounds
import bg1 from "../assets/Background/HomeProduct-bg.jpeg";
import bg3 from "../assets/Background/bg1.png";

// Product images
import product1 from "../assets/products/black.JPG";
import product2 from "../assets/products/red.JPG";
import product3 from "../assets/products/blue.JPG";
import product4 from "../assets/products/green.JPG";
import product5 from "../assets/products/white.JPG";

// Specs component
import ProductPageSpec from "../components/ProductPageSpec";

const VardaanMs = () => {
  const productImages = [product1, product2, product3, product4, product5];
  const colors = ["black", "red", "blue", "green", "white"]; // ✅ match array length
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  // Function to start auto-rotation
  const startAutoRotate = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % productImages.length);
    }, 2000);
  };

  // Start auto-rotate on mount
  useEffect(() => {
    startAutoRotate();
    return () => clearInterval(intervalRef.current);
  }, []);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      setCurrentIndex((prev) => (prev + 1) % productImages.length);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [productImages.length]);

  // Handle color click (pause auto-rotate for 5s)
  const handleColorClick = (idx) => {
    setCurrentIndex(idx);
    clearInterval(intervalRef.current);
    setTimeout(() => {
      startAutoRotate();
    }, 5000); // resume after 5s
  };

  return (
    <div className="product1-page">
      {/* ---------- Section 1 ---------- */}
      <section
        className="product1-section1"
        style={{ backgroundImage: `url(${bg1})` }}
      >
        <div className="product1-banner-wrapper">
          <div className="product1-center-image">
            <img
              src={productImages[currentIndex]}
              alt="Product"
              className="product1-rotating-image"
              onMouseEnter={() =>
                setCurrentIndex((prev) => (prev + 1) % productImages.length)
              } // ✅ hover change
            />
          </div>

          {/* Color options */}
          <div className="product1-color-options">
            {productImages.map((img, idx) => (
              <span
                key={idx}
                className="product1-color-circle"
                style={{ backgroundColor: colors[idx] }}
                onClick={() => handleColorClick(idx)}
              ></span>
            ))}
          </div>
        </div>

        {/* Feature Boxes */}
        <Container className="product1-feature-boxes">
          <Row>
            {["Feature 1", "Feature 2", "Feature 3", "Feature 4"].map(
              (tagline, index) => (
                <Col
                  key={index}
                  md={3}
                  sm={6}
                  xs={12}
                  className="product1-feature-box"
                >
                  <div className="product1-icon">⭐</div>
                  <p className="product1-tagline">{tagline}</p>
                </Col>
              )
            )}
          </Row>
        </Container>
      </section>

      {/* ---------- Section 2 ---------- */}
      <section className="product1-section2">
        <Container>
          {/* Row 1 */}
          <Row className="align-items-center mb-5 justify-content-between">
            <Col md={5}>
              <div>
                <img src={product1} alt="Product" className="product1-img" />
                <div className="model-name-div">
                  <h3>Vardaan MS 1000W</h3>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="product1-spec-table">
                <h4>Specification Table</h4>
                <table>
                  <tbody>
                    <tr><td>Power</td><td>1000W</td></tr>
                    <tr><td>Battery</td><td>Eastman </td></tr>
                    <tr><td>Battery warranty </td><td>12 Months </td></tr>
                    <tr><td>Battery Count</td><td> 4 (Four) </td></tr>
                    <tr><td>AH</td><td>130/135AH </td></tr>
                  </tbody>
                </table>
              </div>
            </Col>
          </Row>

          {/* Row 2 */}
          <Row className="align-items-center mb-5 justify-content-between flex-row-reverse">
            <Col md={5}>
              <img src={product2} alt="Product" className="product1-img" />
            </Col>
            <Col md={6}>
              <div className="product1-spec-table">
                <h4>Specification Table</h4>
                <table>
                  <tbody>
                    <tr><td>Power</td><td>1000W</td></tr>
                    <tr><td>Battery</td><td>Eastman </td></tr>
                    <tr><td>Battery warranty </td><td>15 Months </td></tr>
                    <tr><td>Battery Count</td><td> 4 (Four) </td></tr>
                    <tr><td>AH</td><td>135/140AH </td></tr>
                  </tbody>
                </table>
              </div>
            </Col>
          </Row>

          {/* Row 3 */}
          <Row className="align-items-center mb-5 justify-content-between">
            <Col md={5}>
              <img src={product3} alt="Product" className="product1-img" />
            </Col>
            <Col md={6}>
              <div className="product1-spec-table">
                <h4>Specification Table</h4>
                <table>
                  <tbody>
                    <tr><td>Power</td><td>1200W</td></tr>
                    <tr><td>Battery</td><td>Eastman </td></tr>
                    <tr><td>Battery warranty </td><td>15 Months </td></tr>
                    <tr><td>Battery Count</td><td> 4 (Four) </td></tr>
                    <tr><td>AH</td><td>135/140AH </td></tr>
                  </tbody>
                </table>
              </div>
            </Col>
          </Row>

          {/* Row 4 */}
          <Row className="align-items-center mb-5 justify-content-between flex-row-reverse">
            <Col md={5}>
              <img src={product4} alt="Product" className="product1-img" />
            </Col>
            <Col md={6}>
              <div className="product1-spec-table">
                <h4>Specification Table</h4>
                <table>
                  <tbody>
                    <tr><td>Power</td><td>1200W</td></tr>
                    <tr><td>Battery</td><td>Eastman </td></tr>
                    <tr><td>Battery warranty </td><td>15 Months </td></tr>
                    <tr><td>Battery Count</td><td> 5 (Five) </td></tr>
                    <tr><td>AH</td><td>135/140AH </td></tr>
                  </tbody>
                </table>
              </div>
            </Col>
          </Row>

          {/* Row 5 */}
          <Row className="align-items-center mb-5 justify-content-between">
            <Col md={5}>
              <img src={product5} alt="Product" className="product1-img" />
            </Col>
            <Col md={6}>
              <div className="product1-spec-table">
                <h4>Specification Table</h4>
                <table>
                  <tbody>
                    <tr><td>Power</td><td>1200W</td></tr>
                    <tr><td>Battery</td><td>Eastman </td></tr>
                    <tr><td>Battery warranty </td><td>36 Months </td></tr>
                    <tr><td>Battery Count</td><td> 1 (One) </td></tr>
                    <tr><td>AH</td><td>100AH </td></tr>
                  </tbody>
                </table>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
 {/* Specs component */}
      <ProductPageSpec />
    </div>
  );
};

export default VardaanMs;
