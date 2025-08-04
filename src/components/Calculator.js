import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import './Calculator.css';

const Calculator = () => {
  const [inputs, setInputs] = useState({
    dailyDistance: 50,
    daysPerMonth: 30,
    dieselMileage: 18,
    evEfficiency: 0.15, // kWh per km
    dieselPrice: 90,
    electricityRate: 7
  });

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: parseFloat(e.target.value) });
  };

  const monthlyDistance = inputs.dailyDistance * inputs.daysPerMonth;
  const dieselFuelUsed = monthlyDistance / inputs.dieselMileage;
  const evUnitsUsed = monthlyDistance * inputs.evEfficiency;
  const dieselCost = dieselFuelUsed * inputs.dieselPrice;
  const evCost = evUnitsUsed * inputs.electricityRate;

  return (
    <Container fluid className='calculator-section'>
    <Container className="calculator-container">
      <h2>🚗 EV vs Diesel Cost Calculator</h2>
      <div className="form-section">
        <label>Daily Distance (km): <input name="dailyDistance" type="number" value={inputs.dailyDistance} onChange={handleChange} /></label>
        <label>Days per Month: <input name="daysPerMonth" type="number" value={inputs.daysPerMonth} onChange={handleChange} /></label>
        <label>Diesel/Petrol Mileage (km/l): <input name="dieselMileage" type="number" value={inputs.dieselMileage} onChange={handleChange} /></label>
        <label>EV Efficiency (kWh/km): <input name="evEfficiency" step="0.01" type="number" value={inputs.evEfficiency} onChange={handleChange} /></label>
        <label>Diesel/Petrol Price (₹/litre): <input name="dieselPrice" type="number" value={inputs.dieselPrice} onChange={handleChange} /></label>
        <label>Electricity Rate (₹/unit): <input name="electricityRate" type="number" value={inputs.electricityRate} onChange={handleChange} /></label>
      </div>

      <div className="result-section">
        <div className="result-box diesel">
          <h3>🛻 Diesel/Petrol Vehicle</h3>
          <p>Monthly Distance: <strong>{monthlyDistance} km</strong></p>
          <p>Diesel Used: <strong>{dieselFuelUsed.toFixed(2)} litres</strong></p>
          <p>Total Cost: <strong>₹{dieselCost.toFixed(2)}</strong></p>
        </div>
        <div className="result-box ev">
          <h3>⚡ EV Vehicle</h3>
          <p>EV Units Consumed: <strong>{evUnitsUsed.toFixed(2)} kWh</strong></p>
          <p>Total Cost: <strong>₹{evCost.toFixed(2)}</strong></p>
        </div>
      </div>

      <div className="savings">
        <h4>💰 Monthly Savings with EV: ₹{(dieselCost - evCost).toFixed(2)}</h4>
      </div>
    </Container>
    </Container>
  );
};

export default Calculator;
