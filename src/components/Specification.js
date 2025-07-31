import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import redBike from '../assets/auto11.png';
import blueBike from '../assets/auto11.png';
import greenBike from '../assets/auto11.png';
import './Specification.css'; // We'll write CSS here

const colorOptions = [
  { color: '#ff0000', image: redBike },
  { color: '#0000ff', image: blueBike },
  { color: '#00ff00', image: greenBike },
];

const Specification = () => {
  const [selectedImage, setSelectedImage] = useState(colorOptions[0].image);

  return (
    <Container fluid>
      <Container className='speci-container-fluid'>
        {/* LEFT: Color Circles */}
        <div className='speci-left-wrapper'>
          {colorOptions.map((option, index) => (
            <div
              key={index}
              className='color-circle'
              style={{ backgroundColor: option.color }}
              onClick={() => setSelectedImage(option.image)}
            />
          ))}
        </div>

        {/* CENTER: Image */}
        <div className='speci-center-wrapper'>
          <img src={selectedImage} alt="Bike" className='speci-image' />
        </div>

        {/* RIGHT: Specs Info */}
        <div className='speci-right-wrapper'>
          <div className='spec-box'>
            <span className='icon'>🌍</span>
            <h5>Real World Range</h5>
            <p>70+ km</p>
          </div>
          <div className='spec-box'>
            <span className='icon'>⚡</span>
            <h5>Top Speed</h5>
            <p>65 kmph</p>
          </div>
          <div className='spec-box'>
            <span className='icon'>💰</span>
            <h5>Starts From</h5>
            <p>₹1,25,615</p>
          </div>
          <div className='spec-box'>
            <span className='icon'>🔋</span>
            <h5>Battery</h5>
            <p>1.9kWh</p>
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default Specification;
