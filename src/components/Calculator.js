import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './Calculator.css';

const Calculator = () => {
  const [dailyDistance, setDailyDistance] = useState(54);

  const daysPerMonth = 30;
  const dieselMileage = 25; // km/l
  const evEfficiency = 0.05; // kWh/km
  const dieselPrice = 90; // ₹/l
  const electricityRate = 7.5; // ₹/unit

  const monthlyDistance = dailyDistance * daysPerMonth;
  const dieselFuelUsed = monthlyDistance / dieselMileage;
  const evUnitsUsed = monthlyDistance * evEfficiency;
  const dieselCost = dieselFuelUsed * dieselPrice;
  const evCost = evUnitsUsed * electricityRate;
  const savings = dieselCost - evCost;

  const dieselPercent = Math.min((dieselCost / 5000) * 100, 100);
  const evPercent = Math.min((evCost / 5000) * 100, 100);

  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <Container className="calculator-wrapper">
        <h2 className="calculator-title page-heading">
          E-Rickshaw Savings Calculator
        </h2>

        <div className="calculator-grid">
          {/* Left Slider Card */}
          <div className="slider-card">
            <h3>Daily Usage:</h3>

            <div className="usage-labels">
              <span>Regular 15 KM</span>
              <span>Aggressive 200 KM</span>
            </div>

            <input
              type="range"
              min="10"
              max="200"
              value={dailyDistance}
              onChange={(e) => setDailyDistance(Number(e.target.value))}
              className="distance-slider"
            />

            <div className="slider-value">
              {dailyDistance} KM / day
            </div>

            <div className="monthly-cost-box">
              💰 Monthly Savings: ₹{Math.round(savings)}
            </div>
          </div>

          {/* Right Cost Box */}
          <div className="cost-card-wrapper">
            <div className="cost-bar diesel">
              <span className="bar-label">
                Diesel Rickshaw{" "}
                <span style={{ fontSize: "11px", fontWeight: "600" }}>
                  (Monthly Expenditure)
                </span>
              </span>

              <div className="bar-bg">
                <div
                  className="bar-fill"
                  style={{ width: `${dieselPercent}%` }}
                >
                  ₹{dieselCost.toFixed(0)}
                </div>
              </div>
            </div>

            <div className="cost-bar ev">
              <span className="bar-label">
                E-Rickshaw{" "}
                <span style={{ fontSize: "11px", fontWeight: "600" }}>
                  (Monthly Expenditure)
                </span>
              </span>

              <div className="bar-bg">
                <div
                  className="bar-fill"
                  style={{ width: `${evPercent}%` }}
                >
                  ₹{evCost.toFixed(0)}
                </div>
              </div>
            </div>

            <div className="approx-note">
              * Assumes Diesel Rate ₹{dieselPrice}/L, EV Light Rate ₹
              {electricityRate}/unit, Diesel Efficiency {dieselMileage} km/L,
              EV Efficiency {evEfficiency} kWh/km. Values are approximate.
            </div>
          </div>
        </div>
      </Container>
    </motion.div>
  );
};

export default Calculator;
