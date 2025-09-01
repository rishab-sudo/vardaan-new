import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import "./HomeSpecification.css";

const HomeSpecification = () => {
  const colorOptions = [
    { color: "#000000", img: require("../assets/home/black.jpg") }, // Black
    { color: "#ff0000", img: require("../assets/home/hred.jpg") }, // Red
    { color: "#0000ff", img: require("../assets/home/hblue.jpg") }, // Blue
    { color: "#008000", img: require("../assets/home/hgreen.jpg") }, // Green
    { color: "#ffffff", img: require("../assets/home/hwhite.jpg") }, // White
  ];

  const [currentImage, setCurrentImage] = useState(colorOptions[0].img);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Auto change every 1 sec (for all screen sizes)
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % colorOptions.length;
        setCurrentImage(colorOptions[nextIndex].img);
        return nextIndex;
      });
    }, 1600);

    return () => clearInterval(interval);
  }, [colorOptions]);

  const handleColorClick = (index) => {
    setCurrentImage(colorOptions[index].img);
    setCurrentIndex(index);
  };

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
              <p>120km</p>
              <p style={{textTransform:"uppercase",fontSize:"20px" }}>Range</p>
            </div>
            <div className='spec-left-boxs'>
              <p>4hr</p>
              <p style={{textTransform:"uppercase",fontSize:"20px" }}>Charge</p>
            </div>
            <div className='spec-left-boxs'>
              <p>60km/h</p>
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
                  className={`color-box-container ${currentIndex === index ? "active" : ""}`}
                  onClick={() => handleColorClick(index)}
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
