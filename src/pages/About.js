import React from 'react';
import { Container, Row , Col } from 'react-bootstrap';
import './About.css';
import Testimonials from '../components/Testimonials';

const About = () => {
  return (
    <Container fluid className="container-fluid about-wrapper">
         {/* Section 1 */}
<Container className='about-section1-content-container'>
  <div className='about-section1-left-wrapper'>
    <p>ABOUT SCOOTER EV</p>
    <h2>Future Solutions for Smart Scooter EV</h2>
    <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as making this the first true generator on the Internet labore set dolore magna aliqua. Vestibu lum euin quam 
      nec neque pellentesque efficitur id eget nisl. Sed quia consequn ture magni. dolores eos qui voluptatem sequi nesciunt. Neque porro qui squam est, qui ratione dolorem .</p>
    <img src={require("../assets/about11.png")} alt=""/>
    </div>

    <div className='about-section1-right-wrapper'>
       <img src={require("../assets/about22.png")} alt=""/>
       <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as making this the first true generator on the Internet labore set dolore magna aliqua. Vestibu lum euin quam nec neque pellentesque efficitur id eget nisl. Sed quia consequn ture magni. 
        dolores eos qui voluptatem sequi nesciunt. Neque porro qui squam est, qui ratione dolorem .</p>
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

    <Container fluid className="about-mission-section py-5">
      <Row className="align-items-center">
        {/* Left Column */}
        <Col md={4} className="about-mission-col text-start">
          <div className="about-mission-box">
            <h3>Our vision</h3>
            <p>
              To transform the quality of life of people across the world by
              providing mobility solutions that are exciting, responsible,
              sustainable and safe.
            </p>
          </div>
          <div className="about-mission-box">
            <h3>Buyers protection</h3>
            <p>
              Buyer Protection provides you with a secure gateway and enhanced
              e-commerce security for all your transactions.
            </p>
          </div>
          <div className="about-mission-box">
            <h3>24 Hour expert support</h3>
            <p>
              We offer 24-hour expert support to assist you anytime, day or
              night. Our experts are available to answer your questions and
              provide guidance.
            </p>
          </div>
        </Col>

        {/* Middle Column with Image */}
        <Col md={4} className="about-mission-image text-center">
          <img
            src={require("../assets/auto11.png")}
            alt="About Mission"
            className="mission-center-img"
          />
        </Col>

        {/* Right Column (Repeat of Left) */}
        <Col md={4} className="about-mission-col text-start">
          <div className="about-mission-box">
            <h3>Our vision</h3>
            <p>
              To transform the quality of life of people across the world by
              providing mobility solutions that are exciting, responsible,
              sustainable and safe.
            </p>
          </div>
          <div className="about-mission-box">
            <h3>Buyers protection</h3>
            <p>
              Buyer Protection provides you with a secure gateway and enhanced
              e-commerce security for all your transactions.
            </p>
          </div>
          <div className="about-mission-box">
            <h3>24 Hour expert support</h3>
            <p>
              We offer 24-hour expert support to assist you anytime, day or
              night. Our experts are available to answer your questions and
              provide guidance.
            </p>
          </div>
        </Col>
      </Row>
    </Container>

<Testimonials/>

   </Container>

  );
};

export default About;
