import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HomeBanner.css"
// Agar images src/assets/Banner/ me hain
import hbn1 from "../assets/Banner/hbn1.jpg";
import hbn2 from "../assets/Banner/hbn2.jpg";
import hbn3 from "../assets/Banner/hbn3.png";

const HomeBanner = () => {
  return (
    <Carousel slide interval={1500} pause={false} controls={false} indicators={true}>
      <Carousel.Item>
        <img className="d-block w-100 banner-img" src={hbn1} alt="Slide 1" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100 banner-img" src={hbn2} alt="Slide 2" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100 banner-img" src={hbn3} alt="Slide 3" />
      </Carousel.Item>
    </Carousel>
  );
};

export default HomeBanner;
