import React from "react";
import Slider from "react-slick";
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
                src={require("../assets/auto11.png")}
                alt="Model Alpha"
                className="slide-image"
              />
              <div className="spec-boxes">
                <div className="spec-box">Battery: 100Ah</div>
                <div className="spec-box " style={{fontSize:"20px", fontWeight:"700"}}>Vardaan Basic</div>
                <div className="spec-box">Speed: 45km/h</div>
              </div>
              {/* <h3 className="model-name">Model Alpha</h3> */}
            </div>
          </div>

          {/* Product 2 */}
          <div className="slide-wrapper">
            <div className="slide-content">
              <img
                src={require("../assets/auto11.png")}
                alt="Model Beta"
                className="slide-image"
              />
              <div className="spec-boxes">
                <div className="spec-box">Battery: 80Ah</div>
                <div className="spec-box "  style={{fontSize:"20px", fontWeight:"700"}}>Vardaan MS</div>
                <div className="spec-box">Speed: 40km/h</div>
              </div>
              {/* <h3 className="model-name">Model Beta</h3> */}
            </div>
          </div>

          {/* Product 3 */}
          <div className="slide-wrapper">
            <div className="slide-content">
              <img
                src={require("../assets/auto11.png")}
                alt="Model Gamma"
                className="slide-image"
              />
              <div className="spec-boxes">
                <div className="spec-box">Battery: 120Ah</div>
                <div className="spec-box "  style={{fontSize:"20px", fontWeight:"700"}}>Vardaan SS</div>
                <div className="spec-box">Speed: 50km/h</div>
              </div>
              {/* <h3 className="model-name">Model Gamma</h3> */}
            </div>
          </div>

          {/* Product 4 */}
          <div className="slide-wrapper">
            <div className="slide-content">
              <img
                src={require("../assets/auto11.png")}
                alt="Model Delta"
                className="slide-image"
              />
              <div className="spec-boxes">
                <div className="spec-box">Battery: 130/135AH</div>
                <div className="spec-box "  style={{fontSize:"20px", fontWeight:"700"}}>Vardaan Basic </div>
                <div className="spec-box">Speed: 42km/h</div>
              </div>
              {/* <h3 className="model-name">Model Delta</h3> */}
            </div>
          </div>

          {/* Product 5 */}
          <div className="slide-wrapper">
            <div className="slide-content">
              <img
                src={require("../assets/auto11.png")}
                alt="Model Epsilon"
                className="slide-image"
              />
              <div className="spec-boxes">
                <div className="spec-box">Battery: 130/135AH</div>
                <div className="spec-box "  style={{fontSize:"20px", fontWeight:"700"}}>Vardaan MS</div>
                <div className="spec-box">Speed: 47km/h</div>
              </div>
              {/* <h3 className="model-name">Model Epsilon</h3> */}
            </div>
          </div>

          {/* Product 6 */}
          <div className="slide-wrapper">
            <div className="slide-content">
              <img
                src={require("../assets/auto11.png")}
                alt="Model Zeta"
                className="slide-image"
              />
              <div className="spec-boxes">
                <div className="spec-box">Battery: 135/140AH</div>
                <div className="spec-box "  style={{fontSize:"20px", fontWeight:"700"}}>Vardaan SS</div>
                <div className="spec-box">Speed: 43km/h</div>
              </div>
              {/* <h3 className="model-name">Model Zeta</h3> */}
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default HomeProduct;
