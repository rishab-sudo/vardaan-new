import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import "./HomeSpecification.css";

const HomeSpecification = () => {
  const colorOptions = [
    { color: "#000000", img: require("../assets/products/black.JPG") }, // Black
    { color: "#ff0000", img: require("../assets/products/red.JPG") }, // Red
    { color: "#0000ff", img: require("../assets/products/blue.JPG") }, // Blue
    { color: "#008000", img: require("../assets/products/green.JPG") }, // Green
    { color: "#ffffff", img: require("../assets/products/white.JPG") }, // Yellow
  ];

  const [currentImage, setCurrentImage] = useState(colorOptions[0].img);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Run only on small devices
    if (window.innerWidth <= 768) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % colorOptions.length;
          setCurrentImage(colorOptions[nextIndex].img);
          return nextIndex;
        });
      }, 1000); // change every 1 sec

      return () => clearInterval(interval);
    }
  }, [colorOptions]);

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
              <p style={{textTransform:"uppercase",fontSize:"20px" }}>Range</p>
            </div>
            <div className='spec-left-boxs'>
              <p>4hr</p>
              <p style={{textTransform:"uppercase",fontSize:"20px" }}>Charge</p>
            </div>
            <div className='spec-left-boxs'>
              <p>120km/h</p>
              <p style={{textTransform:"uppercase",fontSize:"20px" }}>Top Speed</p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className='spec-right-wrapper'>
          <div className='right-side-text-div'>
            <p>Vardaan EV</p>
            <h2>Ultimate  <br />Electric<br /> Performance</h2>
          </div>
          {/* Black Box with Color Options */}
          <div className='color-options-wrapper'>
            <div className='color-options'>
              {colorOptions.map((item, index) => (
                <div
                  key={index}
                  className='color-box-container'
                  onClick={() => {
                    setCurrentImage(item.img);
                    setCurrentIndex(index);
                  }}
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

export default HomeSpecification;
