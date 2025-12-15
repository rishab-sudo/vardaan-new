import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "./HomeProduct.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeProduct = () => {
  const settings = {
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 700,
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
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="slider-outer">
        <div className="slider-container">
          <div className="page-heading-div">
            <h2 className="page-heading" style={{ color: "#ffffff" }}>
              OUR PRODUCTS
            </h2>
          </div>

          <Slider {...settings} className="custom-slick">
            {/* Product 1 */}
            <div className="slide-wrapper">
              <div className="slide-content">
                <img
                  src={require("../assets/products/pside-1.png")}
                  alt="Model Alpha"
                  className="slide-image"
                  loading="lazy"
                />
                <div className="spec-boxes">
                  <div className="spec-box spec-small-box">Battery: 100Ah</div>
                  <div className="spec-box" style={{ fontSize: "20px", fontWeight: "700" }}>
                    VARDAAN BASIC
                  </div>
                  <div className="spec-box spec-small-box">Speed: 45km/h</div>
                </div>
              </div>
            </div>

            {/* Product 2 */}
            <div className="slide-wrapper">
              <div className="slide-content">
                <img
                  src={require("../assets/products/pside-2.png")}
                  alt="Model Beta"
                  className="slide-image"
                  loading="lazy"
                />
                <div className="spec-boxes">
                  <div className="spec-box spec-small-box">Battery: 80Ah</div>
                  <div className="spec-box" style={{ fontSize: "20px", fontWeight: "700" }}>
                    VARDAAN MS
                  </div>
                  <div className="spec-box spec-small-box">Speed: 40km/h</div>
                </div>
              </div>
            </div>

            {/* Product 3 */}
            <div className="slide-wrapper">
              <div className="slide-content">
                <img
                  src={require("../assets/products/pside-3.png")}
                  alt="Model Gamma"
                  className="slide-image"
                  loading="lazy"
                />
                <div className="spec-boxes">
                  <div className="spec-box spec-small-box">Battery: 120Ah</div>
                  <div className="spec-box" style={{ fontSize: "20px", fontWeight: "700" }}>
                    VARDAAN SS
                  </div>
                  <div className="spec-box spec-small-box">Speed: 50km/h</div>
                </div>
              </div>
            </div>

            {/* Product 4 */}
            <div className="slide-wrapper">
              <div className="slide-content">
                <img
                  src={require("../assets/products/pside-4.png")}
                  alt="Model Delta"
                  className="slide-image"
                  loading="lazy"
                />
                <div className="spec-boxes">
                  <div className="spec-box spec-small-box">Battery: 130/135AH</div>
                  <div className="spec-box" style={{ fontSize: "20px", fontWeight: "700" }}>
                    Vardaan Basic
                  </div>
                  <div className="spec-box spec-small-box">Speed: 42km/h</div>
                </div>
              </div>
            </div>

            {/* Product 5 */}
            <div className="slide-wrapper">
              <div className="slide-content">
                <img
                  src={require("../assets/products/pside-5.png")}
                  alt="Model Epsilon"
                  className="slide-image"
                  loading="lazy"
                />
                <div className="spec-boxes">
                  <div className="spec-box spec-small-box">Battery: 130/135AH</div>
                  <div className="spec-box" style={{ fontSize: "20px", fontWeight: "700" }}>
                    Vardaan MS
                  </div>
                  <div className="spec-box spec-small-box">Speed: 47km/h</div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </motion.div>
  );
};

export default HomeProduct;
