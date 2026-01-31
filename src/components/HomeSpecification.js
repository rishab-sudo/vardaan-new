import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import "./HomeSpecification.css";

const HomeSpecification = () => {
  const colorOptions = [
    { color: "#000000", img: require("../assets/home/black.jpg") },
    { color: "#ff0000", img: require("../assets/home/hred.jpg") },
    { color: "#0000ff", img: require("../assets/home/hblue.jpg") },
    { color: "#008000", img: require("../assets/home/hgreen.jpg") },
    { color: "#ffffff", img: require("../assets/home/hwhite.jpg") },
  ];

  const [currentImage, setCurrentImage] = useState(colorOptions[0].img);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
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
        <motion.div
          className='spec-left-wrapper'
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className='spec-img-div'>
            <img loading="lazy" className='spec-img' src={currentImage} alt="" />
          </div>

          <div className='spec-left-boxs-div'>
            <div className='spec-left-boxs'>
              <p>100+ km</p>
              <p style={{ textTransform: "uppercase", fontSize: "20px" }}>Range</p>
            </div>
            <div className='spec-left-boxs'>
              <p>4hr</p>
              <p style={{ textTransform: "uppercase", fontSize: "20px" }}>Charge</p>
            </div>
            <div className='spec-left-boxs'>
              <p>60km/h</p>
              <p style={{ textTransform: "uppercase", fontSize: "20px" }}>Top Speed</p>
            </div>
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className='spec-right-wrapper'
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className='right-side-text-div'>
            <p>Vardaan EV</p>
            <h2>
              Ultimate <br />
              Electric <br />
              Performance
            </h2>
          </div>

          <div className='color-options-wrapper'>
            <div className='color-options'>
              {colorOptions.map((item, index) => (
                <div
                  key={index}
                  className={`color-box-container ${currentIndex === index ? "active" : ""}`}
                  onClick={() => handleColorClick(index)}
                >
                  <div
                    className='color-box'
                    style={{ backgroundColor: item.color }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </Container>
    </Container>
  );
};

export default HomeSpecification;
