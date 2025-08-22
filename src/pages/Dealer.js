import React from "react";
import Slider from "react-slick";
import { Container } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DealerForm from "../components/DealerForm"
import "./Dealer.css";

// Sample card data
const cardData = [
  { id: 1, icon: "🚗", text: "Expand your business with us" },
  { id: 2, icon: "📦", text: "Access to wide product range" },
  { id: 3, icon: "💼", text: "Professional support always" },
  { id: 4, icon: "📈", text: "Grow revenue with trusted brand" },
  { id: 5, icon: "🌍", text: "Nationwide dealer network" },
];

const Dealer = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="become-dealer-page">
      {/* Section 1: Banner */}
      <section className="dealer-banner d-flex align-items-center">
        <Container fluid className="text-center">
          <h1 className="dealer-banner-heading">Become Our Dealer</h1>
        </Container>
      </section>

      {/* Section 2: Info + Slider */}
      <section className="dealer-info">
        <Container className="text-center">
          <h2 className="dealer-info-heading">Join Our Dealer Network</h2>
          <p className="dealer-info-desc">
            Partner with us to unlock growth opportunities, exclusive benefits,
            and professional support. Be a part of our expanding family.
          </p>

          <div className="dealer-cards-slider">
            <Slider {...sliderSettings}>
              {cardData.map((card) => (
                <div key={card.id} className="dealer-card">
                  <div className="dealer-card-icon">{card.icon}</div>
                  <p className="dealer-card-text">{card.text}</p>
                </div>
              ))}
            </Slider>
          </div>
        </Container>

        <DealerForm/>

      </section>
    </div>
  );
};

export default Dealer;
