import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import banner1 from "../assets/Banner/Banner-1.webp";
import banner2 from "../assets/Banner/Banner-04-1.webp";
import banner3 from "../assets/Banner/Banner-1.webp";
import "./HomeBanner.css";

const images = [banner1, banner2, banner3];

const PrevArrow = ({ onClick }) => (
  <div className="slick-arrow slick-prev custom-arrow" onClick={onClick}>
    <FaArrowLeft size={30} />
  </div>
);

const NextArrow = ({ onClick }) => (
  <div className="slick-arrow slick-next custom-arrow" onClick={onClick}>
    <FaArrowRight size={30} />
  </div>
);

const HomeBanner = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="home-banner-img-div">
      <Slider {...settings} className="sliderr">
             <img className="home-banner-img" src={banner1}  />
               <img className="home-banner-img" src={banner2}  />
                  <img className="home-banner-img" src={banner3}  />
        

      </Slider>
    </div>
  );
};

export default HomeBanner;
