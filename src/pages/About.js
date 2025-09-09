import React, { useState, useEffect, useRef } from 'react';
import { Container } from 'react-bootstrap';
import './About.css';
import Testimonials from '../components/Testimonials';
import Corevalues from '../components/CoreValues';

const Counter = ({ target, suffix = "", delay = 500 }) => {
  const [count, setCount] = useState(1);
  const [start, setStart] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => setStart(true), delay);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [delay]);

  useEffect(() => {
    if (!start) return;

    let current = 1;
    const increment = Math.ceil(target / 100); // smoother
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      setCount(current);
    }, 30);

    return () => clearInterval(timer);
  }, [start, target]);

  return (
    <p ref={ref} className="mt-3 card-number-text">
      {count.toLocaleString()}{suffix}
    </p>
  );
};

const About = () => {
  return (
    <>
     <Container fluid className="about-banner-bg g-0">
  <img src={require("../assets/Background/aboutbanner-bg.jpg")} alt="About Banner" />
</Container>

      <Container fluid className="container-fluid about-wrapper">
        {/* Section 1 */}
        <Container className="about-section1-content-container">
          <div className="about-section1-left-wrapper">
            <div className='about-tag-heading-div'>
            <p className="page-tag-heading about-tag-heading">ABOUT VARDAAN EV  </p>
            </div>
            <h2 className='about-sec1-heading'>Powering India's Electric Revolution</h2>
            <p>
At Vardaan EV, we are more than just a company; we are pioneers in sustainable transportation, driven by a vision 
to transform how India moves. We believe the future of mobility is electric, efficient, and environmentally 
conscious, and our journey began with a simple yet powerful idea: to build a cleaner, greener tomorrow
            </p>
            <img
              className="about-top-img mt-3"
              src={require('../assets/about/680x570.jpg')}
              alt=""
            />
          </div>

          <div className="about-section1-right-wrapper">
            <img
              className="about-top-img"
              src={require('../assets/about/552x484.jpg')}
              alt=""
            />
            <p className="mt-3">
            We design and manufacture premium electric scooters that don't just meet your needs—they exceed your expectations. 
            Our commitment goes beyond crafting vehicles; it’s about building a better world where performance meets responsibility and innovation drives positive change. Every Vardaan EV is
             a testament to our dedication to engineering excellence, safety, and a sustainable future for all.
            </p>
          </div>
        </Container>

        {/* Achievements */}
        <Container className="achv-section">
          <div className="d-flex flex-column justify-content-center align-items-center m-auto">
            <p className="page-tag-heading about-tag-heading">KNOW US</p>
            <h2 className="page-heading">Achievements</h2>
          </div>

          <div className="achv-cards-wrapper">
            <div className="achv-card">
              <div className='achv-card-icon-div'>

              <img className="achv-card-img" src={require('../assets/icons/Ac1.png')} alt=""/>
              </div>
              <Counter target={30} suffix="K+" delay={2000} />
              <p>EV Sold</p>
            </div>

            <div className="achv-card">
              <div className='achv-card-icon-div'>

              <img className="achv-card-img" src={require('../assets/icons/Ac2.png')} alt=""/>
              </div>
              <Counter target={25} suffix="K+" delay={2000} />
              <p>Happy Customers</p>
            </div>

            <div className="achv-card">
              <div className='achv-card-icon-div'>

              <img className="achv-card-img" src={require('../assets/icons/Ac3.png')} alt=""/>
              </div>
              <Counter target={50} suffix="K+" delay={2000} />
              <p>Cities Covered</p>
            </div>

            <div className="achv-card">
              <div className='achv-card-icon-div'>

              <img className="achv-card-img" src={require('../assets/icons/Ac4.png')} alt=""/>
              </div>
              <Counter target={15} suffix=" k+" delay={2000} />
              <p>Green Kilometers Driven</p>
            </div>
          </div>
        </Container>

        <Corevalues />
        <Testimonials />
      </Container>
    </>
  );
};

export default About;
