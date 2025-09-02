import React, { useEffect, useState } from 'react';
import "./HomeAbout.css";
import { Container } from 'react-bootstrap';
import Button from "./Button";
import { FaPlus } from 'react-icons/fa';

const HomeAbout = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 50; // target number
    const duration = 2000; // 2 seconds
    const stepTime = Math.abs(Math.floor(duration / end));

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <Container fluid className="home-about-fluid">
      <Container className="home-about-content-container">
        
        {/* LEFT IMAGE + COUNTER BOX */}
        <div className='about-left-wraper'>
          <div className="image-wrapper">
            <img 
              className='home-about-img'  
              src={require("../assets/about/habout.jpg")} 
              alt="about"
            />
            {/* Green box overlay */}
            <div className="green-counter-box">
              <div className="counter-left">
                <div className='d-flex justify-content-center align-items-center'>
                <FaPlus className="plus-icon" />
                <span className="count-number">{count}</span>
                </div>
                <p className="counter-title">Cities</p>
              </div>
              <div className="counter-text">
              "Electric. Efficient. Exceptional."
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT TEXT SECTION */}
        <div className='about-right-wraper'>
          <div className='about-text-wrapper'>

            <div>
            <p className='page-tag-heading about-tag-heading'> ABOUT VARDAAN EV </p>
            </div>
            <h2 className='page-heading aboutpage-heading'> Powering India's Electric Revolution </h2>
            <p>
Vardaan EV is shaping the future of mobility with premium electric vehicles that blend performance and sustainability. We’re driving innovation towards a cleaner, greener tomorrow.
            </p>
            <div className='d-flex flex-column justify-content-start '>
              <div className='about-power-icon-box'>
              <img className='about-power-icon' src={require("../assets/icons/mission.png")} alt=""/>
              </div>
            <p style={{fontWeight:"bold"}}> Our Mission </p>
            <p> Creating world-class electric vehicles that transform how India moves while protecting the planet for future generations.</p>
            </div>
            <div>

        <div className='d-flex flex-column justify-content-start '>
              <div className='about-power-icon-box'>
              <img className='about-power-icon' src={require("../assets/icons/vision.png")} alt=""/>
              </div>
            <p style={{fontWeight:"bold"}}>Our Vision</p>
            <p>Empowering every Indian with clean, efficient mobility solutions that protect our planet while enhancing lives.</p>
            </div>          
            </div>
          
          <Button text="Read More" className="background-btn" link="/about" />
          </div>
        </div>

      </Container>
    </Container>
  );
};

export default HomeAbout;
