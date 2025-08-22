import React from "react";
import "./ProductPageSpec.css";
import { FaBolt, FaWheelchair, FaTachometerAlt } from "react-icons/fa";

const ProductPageSpec = () => {
  return (
    <div className="productpage-spec-container">
      <div className="productpage-section">
        <div className="productpage-circle-bg"></div>
        <img
          src={require("../assets/auto11.png")}
          alt="Auto Rickshaw"
          className="productpage-auto-image"
        />

        {/* Left Side Feature Box */}
        <div className="productpage-feature-box productpage-wheel-left productpage-left-side">
          <div className="productpage-icon">
            <FaWheelchair />
          </div>
          <div className="productpage-text">
            <h4>Strong Wheels</h4>
            <p>Durable alloy wheels</p>
          </div>
          <div className="productpage-line"></div>
        </div>

        {/* Left Side Feature Box */}
        <div className="productpage-feature-box productpage-meter productpage-left-side">
          <div className="productpage-icon">
            <FaTachometerAlt />
          </div>
          <div className="productpage-text">
            <h4>Smart Meter</h4>
            <p>Digital display system</p>
          </div>
          <div className="productpage-line"></div>
        </div>

        {/* ✅ Right Side Feature Box */}
        <div className="productpage-feature-box productpage-battery productpage-right-side">
          <div className="productpage-icon">
            <FaBolt />
          </div>
          <div className="productpage-text">
            <h4>Powerful Battery</h4>
            <p>Long-lasting performance</p>
          </div>
          <div className="productpage-line"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductPageSpec;
