import React from "react";
import "./Glance.css";

const Glance = () => {
  return (
    <div className="glance-section">
      <div className="glance-overlay">
        <h2 className="glance-heading">At a Glance</h2>

        <div className="glance-stats">
          <div className="stat-box">
            <h3>50+</h3>
            <p>Trust</p>
          </div>
          <div className="stat-box">
            <h3>1M+</h3>
            <p>3-Wheelers on the Roads</p>
          </div>
          <div className="stat-box">
            <h3>15+</h3>
            <p>Passengers</p>
          </div>
          <div className="stat-box">
            <h3>400+</h3>
            <p>Touch-points PAN India</p>
          </div>
        </div>
      </div>

      {/* Bottom center image (overlapping) */}
      <div className="glance-bottom-image">
        <img src={require("../assets/Background/auto-3-icon.webp")} alt="Vehicle" />
      </div>
    </div>
  );
};

export default Glance;
