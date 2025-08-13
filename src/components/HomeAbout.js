import React, { useEffect, useState } from 'react';
import "./HomeAbout.css";
import { Container } from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa';

const HomeAbout = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 250; // target number
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
              src={require("../assets/image-counter.jpg")} 
              alt="about"
            />
            {/* Green box overlay */}
            <div className="green-counter-box">
              <div className="counter-left">
                <div className='d-flex justify-content-center align-items-center'>
                <FaPlus className="plus-icon" />
                <span className="count-number">{count}</span>
                </div>
                <p className="counter-title">Charging Stations</p>
              </div>
              <div className="counter-text">
                consectetur adipiscing elit. Pellentesque in metus et purus
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT TEXT SECTION */}
        <div className='about-right-wraper'>
          <div className='about-text-wrapper'>
            <p className='page-tag-heading about-tag-heading'>About Evlon</p>
            <h2 className='page-heading'>Zero Emissions, Infinite Possibility</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in metus et purus gravida sagittis.
              Donec arcu id ultricies lacinia.<br/>
              Praesent bibendum urna sit amet ex scelerisque, vitae pellentesque tellus dignissim. Sed viverra lacus ipsum, ut imperdiet neque.
            </p>
            <div className='d-flex flex-column justify-content-start '>
              <div className='about-power-icon-box'>
              <img className='about-power-icon' src={require("../assets/power.png")} alt=""/>
              </div>
            <p>Our Vision</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div>

        <div className='d-flex flex-column justify-content-start '>
              <div className='about-power-icon-box'>
              <img className='about-power-icon' src={require("../assets/power.png")} alt=""/>
              </div>
            <p>Our Vision</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>          
            </div>
          
          </div>
        </div>

      </Container>
    </Container>
  );
};

export default HomeAbout;
