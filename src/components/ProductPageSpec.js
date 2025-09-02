import React from "react";
import "./ProductPageSpec.css";
import { Container } from "react-bootstrap";

const hotspots = [
  {
    id: 1,
    top:  "24%",
    left: "45%",
    title: "Durable Body",
    text: "Strong build ensures safety and lasting performance.",
  },
  {
    id: 2,
    top: "52%",
    left: "50%",
    title: "Comfortable Seat",
    text: " Ride with ease on cushioned comfort always.",
  },
  {
    id: 3,
    top: "57%",
    left: "25%",
    title: " LED Lights ",
    text: "Bright, stylish, energy-efficient visibility for night.",
  },
   {
    id: 4,
    top: "78%",
    left: "22%",
    title: " Sturdy Wheels ",
    text: " Superior grip for smooth rides on roads.",
  },
   {
    id: 5,
    top: "60%",
    left: "65%",
    title: " Fast Charging Battery ",
    text: "Quick charge keeps you moving without delays.",
  },
];

const ProductPageSpec = () => {
  return (
    <Container className="detail-feature-section">
    <h2 className="text-center detail-feature-heading">Detailed Features</h2>
    <div className="hotspot-container">
      <img
        src= {require("../assets/products/501.png")}
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
