import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import "./Specification.css";

const Specification = () => {
  const colorOptions = [
    { color: "#000000", img: require("../assets/auto11.png") }, // Black
    { color: "#ff0000", img: require("../assets/auto11.png") }, // Red
    { color: "#0000ff", img: require("../assets/auto11.png") }, // Blue
    { color: "#008000", img: require("../assets/auto11.png") }, // Green
    { color: "#ffff00", img: require("../assets/auto11.png") }, // Yellow
  ];

  const [currentImage, setCurrentImage] = useState(colorOptions[0].img);

  return (
    <Container fluid className='spec-fluid'>
      <Container className="spec-content-container">

        {/* Left Section */}
        <div className='spec-left-wrapper'>
          <div className='spec-img-div'>
            <img className='spec-img' src={currentImage} alt="" />
          </div>
          <div className='spec-left-boxs-div'>
            <div className='spec-left-boxs'>
              <p>130km</p>
              <p>Range</p>
            </div>
            <div className='spec-left-boxs'>
              <p>4hr</p>
              <p>Charge</p>
            </div>
            <div className='spec-left-boxs'>
              <p>120km/h</p>
              <p>Top Speed</p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className='spec-right-wrapper'>
          <div className='right-side-text-div'>
          <p>Autoev R200</p>
          <h2>Redefining <br />Motorcycle<br /> Performance</h2>
</div>
          {/* Black Box with Color Options */}
          <div className='color-options-wrapper'>
            <div className='color-options'>
              {colorOptions.map((item, index) => (
                <div
                  key={index}
                  className='color-box-container'
                  onClick={() => setCurrentImage(item.img)}
                >
                  <div className='color-box' style={{ backgroundColor: item.color }}></div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </Container>
    </Container>
  );
};

export default Specification;
