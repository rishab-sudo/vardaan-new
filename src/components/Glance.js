import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import "./Glance.css";

const Glance = () => {
  return (
    <motion.div
      className="glance-section"
      initial={{ y: 80, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="glance-overlay">
        <div className="glance-stats">

          <div className="stat-box">
            <h3>
              <CountUp
                end={50}
                duration={3}
                enableScrollSpy
                scrollSpyOnce
              />+
            </h3>
            <p>Cities Across India</p>
          </div>

          <div className="stat-box">
            <h3>
              <CountUp
                start={1500}
                end={2000}
                duration={4}
                separator=","
                enableScrollSpy
                scrollSpyOnce
              />+
            </h3>
            <p>Vehicles on Road</p>
          </div>

          <div className="stat-box">
            <h3>
              <CountUp
                start={1000}
                end={1500}
                duration={3}
                enableScrollSpy
                scrollSpyOnce
              />+
            </h3>
            <p>Daily Rides</p>
          </div>

          <div className="stat-box">
            <h3>
              <CountUp
                start={80}
                end={120}
                duration={3}
                enableScrollSpy
                scrollSpyOnce
              />+
            </h3>
            <p>Per Charge</p>
          </div>

        </div>
      </div>

      {/* Bottom overlapping image */}
      <div className="glance-bottom-image">
        <img
          src={require("../assets/products/all5.png")}
          alt="Vehicle"
        />
      </div>
    </motion.div>
  );
};

export default Glance;
