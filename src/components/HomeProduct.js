import React from "react";
import Slider from "react-slick";
import "./HomeProduct.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  require("../assets/auto11.png"),
  require("../assets/auto11.png"),
  require("../assets/auto11.png"),
  require("../assets/auto11.png"),
  require("../assets/auto11.png"),
  require("../assets/auto11.png"),
];

const HomeProduct = () => {
  const settings = {
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 600,
    infinite: true,
    arrows: false,
    responsive: [
           {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerMode: true,
        },
        },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
    
    ],
  };

  return (
    <div className="slider-outer">

      <div className="slider-container">
              <div className="page-heading-div">
<h2 className="page-heading" style={{color:"#ffffff"}}>OUR PRODUCTS</h2>
      </div>
        <Slider {...settings} className="custom-slick">
          {images.map((img, index) => (
            <div className="slide-wrapper" key={index}>
              <img src={img} alt={`Slide ${index}`} className="slide-image" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HomeProduct;
