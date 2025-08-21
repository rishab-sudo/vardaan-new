import React from "react";
import "./ProductPageSpec.css";
import { FaBolt, FaWheelchair, FaTachometerAlt } from "react-icons/fa";

const ProductPageSpec = () => {
  return (
    <div className="auto-section">
      <div className="circle-bg"></div>
      <img src={require("../assets/auto11.png")} alt="Auto Rickshaw" className="auto-image" />

      {/* Example Feature Boxes */}
      <div className="feature-box wheel-left left-side">
           
        <div className="icon"><FaWheelchair /></div>
        <div className="text">
          <h4>Strong Wheels</h4>
          <p>Durable alloy wheels</p>
        </div>
     <div className="line"></div>
      </div>

      <div className="feature-box meter left-side">
        <div className="icon"><FaTachometerAlt /></div>
        <div className="text">
          <h4>Smart Meter</h4>
          <p>Digital display system</p>
        </div>
        <div className="line"></div>
      </div>

      <div className="feature-box battery">
        <div className="icon"><FaBolt /></div>
        <div className="text">
          <h4>Powerful Battery</h4>
          <p>Long-lasting performance</p>
        </div>
        <div className="line"></div>
      </div>
    </div>
  );
};

export default ProductPageSpec;
