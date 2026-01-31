import React, { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./VardaanMs.css";

// Banner
import ModelPageBanner from "../components/ModelPageBanner";

// Main product images
import product01 from "../assets/products/pside-1.png";
import product02 from "../assets/products/pside-2.png";
import product03 from "../assets/products/pside-3.png";
import product04 from "../assets/products/pside-4.png";
import product05 from "../assets/products/pside-5.png";

// Side images for banner rotation
import product1 from "../assets/products/angle1.png";
import product2 from "../assets/products/angle2.png";
import product3 from "../assets/products/angle3.png";
import product4 from "../assets/products/angle4.png";
import product5 from "../assets/products/angle5.png";
import product6 from "../assets/products/angle6.png";
import product7 from "../assets/products/angle7.png";
import product8 from "../assets/products/angle8.png";
import product9 from "../assets/products/angle9.png";
import product10 from "../assets/products/angle10.png";
import product11 from "../assets/products/angle11.png";
import product12 from "../assets/products/angle12.png";

// Specs
import ProductPageSpec from "../components/ProductPageSpec";

const VardaanMs = () => {
  const productImages = [
    product1, product2, product3, product4, product5,
    product6, product7, product8, product9, product10,
    product11, product12,
  ];

  const intervalRef = useRef(null);
  const indexRef = useRef(0); // internal index without state

  // Auto rotate
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      indexRef.current = (indexRef.current + 1) % productImages.length;
    }, 2000);

    return () => clearInterval(intervalRef.current);
  }, [productImages.length]);

  // Scroll to change image
  useEffect(() => {
    const handleScroll = () => {
      indexRef.current = (indexRef.current + 1) % productImages.length;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [productImages.length]);

  return (
    <div className="product1-page">
      {/* Section 1 */}
      <section>
        <ModelPageBanner />
      </section>

      {/* Section 2 */}
      <section className="product1-section2">
        <Container>

          {/* Row 1 */}
          <Row className="align-items-center mb-5 justify-content-between">
            <Col md={5}>
              <div className="product1-img-wrapper">
                <img src={product01} alt="Product" className="product1-img" />
              </div>
            </Col>
            <Col md={6}>
              <div className="product1-spec-table">
                <h4>Vardaan Basic 1000W</h4>
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
          <img src={product02} alt="Product" className="product1-img" />
        </div>
      </Col>
      <Col md={6}>
        <div className="product1-spec-table">
          <h4>Vardaan Basic 1000W </h4>
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
          <img src={product03} alt="Product" className="product1-img" />
        </div>
      </Col>
      <Col md={6}>
        <div className="product1-spec-table">
          <h4>Vardaan Basic 1200W</h4>
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
          <img src={product04} alt="Product" className="product1-img" />
        </div>
      </Col>
      <Col md={6}>
        <div className="product1-spec-table">
          <h4>Vardaan Basic 1200W </h4>
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
          <img src={product05} alt="Product" className="product1-img" />
        </div>
      </Col>
      <Col md={6}>
        <div className="product1-spec-table">
          <h4>Vardaan Basic 1200W </h4>
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

export default VardaanMs;
