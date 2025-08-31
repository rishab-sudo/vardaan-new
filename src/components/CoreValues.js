import React from "react";
import Slider from "react-slick";
import { Container, Row, Col } from "react-bootstrap";
import "./CoreValues.css";

const Corevalues = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    centerMode: true,
    centerPadding: "0",
    focusOnSelect: true,
    arrows: false,
  };

  const values = [
    {
      icon: require("../assets/icons/cv1.png"),
      title: "Collaboration",
      desc: "Together we grow, innovate, and build sustainable mobility solutions.",
    },
    {
      icon: require("../assets/icons/cv2.png"),
      title: "Integrity",
      desc: "Transparency and honesty drive every ride, every relationship.",
    },
    {
      icon: require("../assets/icons/cv3.png"),
      title: "Innovation",
      desc: "Smart ideas powering the future of green transportation.",
    },
    {
      icon: require("../assets/icons/cv4.png"),
      title: "Sustainability",
      desc: "Clean energy for a healthier planet and brighter tomorrow.",
    },
    {
      icon: require("../assets/icons/cv5.png"),
      title: "Customer-Centricity",
      desc: "Every EV designed to serve your comfort, safety, and trust.",
    },
    {
      icon: require("../assets/icons/cv6.png"),
      title: "Future Vision",
      desc: "Driving change today for mobility of tomorrow.",
    },
  ];

  return (
    <Container fluid className="missionvisioncore-section py-5">
      <Container>
        <Row className="corevalues-content-row">
          {/* Mission & Vision */}
          <Col md={6} className="mission-col">
            <div className="mission-block mb-4">
              <h2 className="mission-heading">Our Mission</h2>
              <p className="mission-desc">
                To empower individuals and businesses with innovative solutions
                that create sustainable growth and positive change.
              </p>
            </div>

            <div className="vision-block">
              <h2 className="vision-heading">Our Vision</h2>
              <p className="vision-desc">
                To be a global leader in delivering excellence, inspiring trust,
                and transforming lives through technology and creativity.
              </p>
            </div>
          </Col>

          {/* Core Values */}
          <Col md={6} className="corevalues-col">
            <div className="corevalues-container">
              <h2 className="corevalues-heading">Our Core Values</h2>
              <Slider {...settings} className="corevalues-slider">
                {values.map((item, index) => (
                  <div key={index} className="corevalue-slide">
                    <div className="corevalue-content">
                      <div className="icon-box">
                        <img className="value-icon" src={item.icon} alt={item.title} />
                      </div>
                      <div className="text-box">
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Corevalues;
