import React from 'react';
import { Container } from 'react-bootstrap';
import Slider from 'react-slick';
import "./HomeBanner.css";

const HomeBanner = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1800,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    cssEase: "ease-in-out"
  };

  return (
    <Container fluid className="banner-fluid g-0">
      <Container className='banner-content-container'>
        <div className='left-side-wrapper'>
          <div className='left-banner-text-box'>
 <h2>Make Every Journey Extraordinary with Vardaan EV</h2>
          <p>Enjoy quiet, eco-friendly, and affordable rides for a brighter, cleaner future. </p>
          <p>With smart features and powerful battery performance, every trip is seamless, comfortable, and dependable.</p>
          </div>
         
        </div>

        <div className='right-side-wrapper'>
          <div className="image-slider">
            <Slider {...settings}>
              <img className='sliding-img'  src={require("../assets/auto11.png")} alt="Slide 1" />
             <img className='sliding-img'  src={require("../assets/auto11.png")} alt="Slide 2" />
              <img className='sliding-img'  src={require("../assets/auto11.png")} alt="Slide 3" />
            </Slider>
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default HomeBanner;
