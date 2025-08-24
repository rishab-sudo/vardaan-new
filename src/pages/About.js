import React from 'react';
import { Container, Row , Col } from 'react-bootstrap';
import './About.css';
import Testimonials from '../components/Testimonials';
import Corevalues from '../components/CoreValues';


const About = () => {
  return (
<>
    <Container fluid className='about-banner-bg'>
  <h1>About Us</h1>
</Container>
{/*  */}
    <Container fluid className="container-fluid about-wrapper">
         {/* Section 1 */}
<Container className='about-section1-content-container'>
  <div className='about-section1-left-wrapper'>
    <p className='page-tag-heading about-tag-heading' style={{maxWidth:"auto"}}>ABOUT Vardaan Ev </p>
    <h2>Powering India's Electric Revolution</h2>
    <p>At Vardaan EV, we are more than just a company; we are pioneers in sustainable transportation, driven by a vision to transform how India moves. We believe the future of mobility is electric, efficient, 
      and environmentally conscious, and our journey began with a simple yet powerful idea: to build a cleaner, greener tomorrow.</p>
    <img className='about-top-img mt-3' src={require("../assets/about/about11.png")} alt=""/>
    </div>

    <div className='about-section1-right-wrapper'>
       <img  className='about-top-img' src={require("../assets/about/about22.png")} alt=""/>
       <p className='mt-3'>We design and manufacture premium electric scooters that don't just meet your needs—they exceed your expectations. Our commitment goes beyond crafting vehicles; it’s about building a better world where performance meets responsibility and innovation drives positive change. 
        Every Vardaan EV is a testament to our dedication to engineering excellence, safety, and a sustainable future for all.</p>
    </div>
</Container>

{/*  */}
<Container className='achv-section'>
<div className='d-flex flex-column -justify-content-center align-items-center m-auto'>
  <p className='page-tag-heading about-tag-heading' style={{maxWidth:"auto"}}>Know Us</p>
  <h2 className='page-heading'>Our Achivements</h2>
  </div>

  <div className='achv-cards-wrapper'>
<div className='achv-card'>
<img className='achv-card-img' src={require("../assets/our-achivement1.png")} alt=""/>
<p className='mt-3 card-number-text'> 30K</p>
<p>Scooters Sold</p>
</div>

<div className='achv-card'>
<img className='achv-card-img' src={require("../assets/our-achivement1.png")} alt=""/>
<p className='mt-3 card-number-text'> 30K</p>
<p>Scooters Sold</p>
</div>

<div className='achv-card'>
<img className='achv-card-img' src={require("../assets/our-achivement1.png")} alt=""/>
<p className='mt-3 card-number-text'> 30K</p>
<p>Scooters Sold</p>
</div>

<div className='achv-card'>
<img className='achv-card-img' src={require("../assets/our-achivement1.png")} alt=""/>
<p className='mt-3 card-number-text'> 30K</p>
<p>Scooters Sold</p>
</div>

  </div>
</Container>

{/*  */}

<Corevalues/>

<Testimonials/>

   </Container>
</>
  );
};

export default About;
