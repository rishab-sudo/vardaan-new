import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./VardaanMs.css";
// Backgrounds
// import bg1 from "../assets/Background/HomeProduct-bg.jpeg";
 import bg1 from "../assets/Background/product-base-background.png";
// Product images
import product01 from "../assets/products/pside-1.png";
import product02 from "../assets/products/pside-2.png";
import product03 from "../assets/products/pside-3.png";
import product04 from "../assets/products/pside-4.png";
import product05 from "../assets/products//pside-5.png";
// ------------------side images for banner--------------------


// Specs component
import ProductPageSpec from "../components/ProductPageSpec";
import ModelPageBanner from "../components/ModelPageBanner";

const VardaanMs = () => {

  const colors = ["red", " black", "blue", "green", "white"];



// ---------------------------------------------------------------------------------------------

  return (
    <div className="product1-page">
      {/* ---------- Section 1 ---------- */}
     
   <section>
    <ModelPageBanner/>
      </section>

      {/* ---------- Section 2 ---------- */}
    {/* ---------- Section 2 ---------- */}
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
          <h4>Vardaan MS 1000W</h4>   {/* ✅ Product name moved here */}
          <table>
            <tbody>
              <tr><td>Power</td><td>1000W</td></tr>
              <tr><td>Battery</td><td>Eastman</td></tr>
              <tr><td>Battery warranty</td><td className="highlight">15 Months</td></tr>
              <tr><td>Battery Count</td><td>4 (Four )</td></tr>
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
          <h4>Vardaan MS 1000W </h4>
          <table>
            <tbody>
              <tr><td>Power</td><td>1000W</td></tr>
              <tr><td>Battery</td><td>Eastman</td></tr>
              <tr><td>Battery warranty</td><td className="highlight">36 Months</td></tr>
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
          <img src={product04} alt="Product" className="product1-img" />
        </div>
      </Col>
      <Col md={6}>
        <div className="product1-spec-table">
          <h4>Vardaan MS 1200W </h4>
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
          <h4>Vardaan MS 1200W </h4>
          <table>
            <tbody>
              <tr><td>Power</td><td>1200W</td></tr>
              <tr><td>Battery</td><td>Eastman</td></tr>
              <tr><td>Battery warranty</td><td className="highlight">36 Months</td></tr>
              <tr><td>Battery Count</td><td className="highlight">1 (One)</td></tr>
              <tr><td>AH</td><td className="highlight">105AH</td></tr>
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
