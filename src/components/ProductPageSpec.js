import React from "react";
import "./ProductPageSpec.css";
import { Container } from "react-bootstrap";

const hotspots = [
  {
    id: 1,
    top: "30%",
    left: "40%",
    title: "Feature 1",
    text: "This is the description of feature 1.",
  },
  {
    id: 2,
    top: "60%",
    left: "70%",
    title: "Feature 2",
    text: "This is the description of feature 2.",
  },
  {
    id: 3,
    top: "50%",
    left: "20%",
    title: "Feature 3",
    text: "This is the description of feature 3.",
  },
];

const ProductPageSpec = () => {
  return (
    <Container className="detail-feature-section">
    <h2 className="text-center">Detailed Features</h2>
    <div className="hotspot-container">
      <img
        src= {require("../assets/auto11.png")}
        alt="Product"
        className="product-image"
      />

      {hotspots.map((point) => (
        <div
          key={point.id}
          className="hotspot-point"
          style={{ top: point.top, left: point.left }}
        >
          <div className="plus">+</div>
          <div className="hotspot-info">
            <h4>{point.title}</h4>
            <p>{point.text}</p>
          </div>
        </div>
      ))}
    </div>
    </Container>
  );
};

export default ProductPageSpec;
