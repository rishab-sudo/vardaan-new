import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./VardaanMs.css";
// Backgrounds
import bg1 from "../assets/Background/HomeProduct-bg.jpeg";
// Product images
import product1 from "../assets/products/pside-1.png";
import product2 from "../assets/products/pside-2.png";
import product3 from "../assets/products/pside-3.png";
import product4 from "../assets/products/pside-4.png";
import product5 from "../assets/products//pside-5.png";

// Specs component
import ProductPageSpec from "../components/ProductPageSpec";

const VardaanBasic = () => {
  const productImages = [product1, product2, product3, product4, product5];
  const colors = ["black", "red", "blue", "green", "white"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  // Auto rotate
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % productImages.length);
    }, 2000);
    return () => clearInterval(intervalRef.current);
  }, []);

  // Scroll to change image
  useEffect(() => {
    const handleScroll = () => {
      setCurrentIndex((prev) => (prev + 1) % productImages.length);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleColorClick = (idx) => {
    setCurrentIndex(idx);
    clearInterval(intervalRef.current);
    setTimeout(() => {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % productImages.length);
      }, 2000);
    }, 5000);
  };
// ---------------------------------------------------------------------------------------------

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
            />
          </div>

          {/* Color options */}
          <div className="product1-color-options">
            {productImages.map((_, idx) => (
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
                <Col key={index} md={3} sm={6} xs={12} className="product1-feature-box">
                  <div className="product1-icon">⭐</div>
                  <p className="product1-tagline">{tagline}</p>
                </Col>
              )
            )}
          </Row>
        </Container>
      </section>

      {/* ---------- Section 2 ---------- */}
    {/* ---------- Section 2 ---------- */}
<section className="product1-section2">
  <Container>
    {/* Row 1 */}
    <Row className="align-items-center mb-5 justify-content-between">
      <Col md={5}>
        <div className="product1-img-wrapper">
          <img src={product1} alt="Product" className="product1-img" />
        </div>
      </Col>
      <Col md={6}>
        <div className="product1-spec-table">
          <h4>Vardaan MS 1000W</h4>   {/* ✅ Product name moved here */}
          <table>
            <tbody>
              <tr><td>Power</td><td>1000W</td></tr>
              <tr><td>Battery</td><td>Eastman</td></tr>
              <tr><td>Battery warranty</td><td className="highlight">12 Months</td></tr>
              <tr><td>Battery Count</td><td>4 (Four)</td></tr>
              <tr><td>AH</td><td>130/135AH</td></tr>
            </tbody>
          </table>
        </div>
      </Col>
    </Row>

    {/* Row 2 */}
    <Row className="align-items-center mb-5 justify-content-between flex-row-reverse">
      <Col md={5}>
        <div className="product1-img-wrapper">
          <img src={product2} alt="Product" className="product1-img" />
        </div>
      </Col>
      <Col md={6}>
        <div className="product1-spec-table">
          <h4>Vardaan MS 1000W - Red</h4>
          <table>
            <tbody>
              <tr><td>Power</td><td>1000W</td></tr>
              <tr><td>Battery</td><td>Eastman</td></tr>
              <tr><td>Battery warranty</td><td className="highlight">15 Months</td></tr>
              <tr><td>Battery Count</td><td>4 (Four)</td></tr>
              <tr><td>AH</td><td className="highlight">135/140AH</td></tr>
            </tbody>
          </table>
        </div>
      </Col>
    </Row>

    {/* Row 3 */}
    <Row className="align-items-center mb-5 justify-content-between">
      <Col md={5}>
        <div className="product1-img-wrapper">
          <img src={product3} alt="Product" className="product1-img" />
        </div>
      </Col>
      <Col md={6}>
        <div className="product1-spec-table">
          <h4>Vardaan MS 1200W</h4>
          <table>
            <tbody>
              <tr><td>Power</td><td className="highlight">1200W</td></tr>
              <tr><td>Battery</td><td>Eastman</td></tr>
              <tr><td>Battery warranty</td><td>15 Months</td></tr>
              <tr><td>Battery Count</td><td>4 (Four)</td></tr>
              <tr><td>AH</td><td>135/140AH</td></tr>
            </tbody>
          </table>
        </div>
      </Col>
    </Row>

    {/* Row 4 */}
    <Row className="align-items-center mb-5 justify-content-between flex-row-reverse">
      <Col md={5}>
        <div className="product1-img-wrapper">
          <img src={product4} alt="Product" className="product1-img" />
        </div>
      </Col>
      <Col md={6}>
        <div className="product1-spec-table">
          <h4>Vardaan MS 1200W - Green</h4>
          <table>
            <tbody>
              <tr><td>Power</td><td>1200W</td></tr>
              <tr><td>Battery</td><td>Eastman</td></tr>
              <tr><td>Battery warranty</td><td>15 Months</td></tr>
              <tr><td>Battery Count</td><td className="highlight">5 (Five)</td></tr>
              <tr><td>AH</td><td>135/140AH</td></tr>
            </tbody>
          </table>
        </div>
      </Col>
    </Row>

    {/* Row 5 */}
    <Row className="align-items-center mb-5 justify-content-between">
      <Col md={5}>
        <div className="product1-img-wrapper">
          <img src={product5} alt="Product" className="product1-img" />
        </div>
      </Col>
      <Col md={6}>
        <div className="product1-spec-table">
          <h4>Vardaan MS 1200W - White</h4>
          <table>
            <tbody>
              <tr><td>Power</td><td>1200W</td></tr>
              <tr><td>Battery</td><td>Eastman</td></tr>
              <tr><td>Battery warranty</td><td className="highlight">36 Months</td></tr>
              <tr><td>Battery Count</td><td className="highlight">1 (One)</td></tr>
              <tr><td>AH</td><td className="highlight">100AH</td></tr>
            </tbody>
          </table>
        </div>
      </Col>
    </Row>
  </Container>
</section>


      {/* Specs Component */}
      <ProductPageSpec />
    </div>
  );
};

export default VardaanBasic;
