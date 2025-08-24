import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HomeBanner.css";

// ✅ Use require() to avoid image path issues
const banners = [
  require("../assets/Banner/Banner-1.webp"),
  require("../assets/Banner/Banner-04-1.webp"),
  require("../assets/Banner/Banner-1.webp"),
];

const HomeBanner = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <div className="homebanner">
      <Slider {...settings}>
        {banners.map((img, index) => (
          <div key={index}>
            <img src={img} alt={`Banner ${index + 1}`} className="banner-img" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomeBanner;
