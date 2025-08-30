import React from "react";
import CountUp from "react-countup";
import "./Glance.css";

const Glance = () => {
  return (
    <div className="glance-section">
      <div className="glance-overlay">
        {/* <h2 className="glance-heading">At a Glance</h2> */}

        <div className="glance-stats">
          <div className="stat-box">
            <h3>
              <CountUp end={50} duration={3} />+
            </h3>
            <p> Cities Across India</p>
          </div>

          <div className="stat-box">
            <h3>
              <CountUp start={1500} end={2000} duration={4} separator="," />+
            </h3>
            <p>Vehicles on Road</p>
          </div>

          <div className="stat-box">
            <h3>
              <CountUp  start={1000} end={1500} duration={3} />+
            </h3>
            <p> Daily Rides</p>
          </div>

          <div className="stat-box">
            <h3>
              <CountUp start={80} end={120} duration={3} />+
            </h3>
            <p>Per Charge</p>
          </div>
        </div>
      </div>

      {/* Bottom center image (overlapping) */}
      <div className="glance-bottom-image">
        <img
          src={require("../assets/Background/auto-3-icon.webp")}
          alt="Vehicle"
        />
      </div>
    </div>
  );
};

export default Glance;
