import React from "react";
import Slider from "react-slick";
import { Container } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DealerForm from "../components/DealerForm";
import "./Dealer.css";

// Sample card data
const cardData = [
  {
    id: 1,
    icon: "🚗",
    heading: "Accelerate Your Growth",
    desc: "Partner with us to explore new opportunities, innovative EV solutions, and a market built for long-term success.",
  },
  {
    id: 2,
    icon: "📦",
    heading: "Exclusive Rewards & Benefits",
    desc: "Enjoy dealer-only incentives, profit-boosting offers, and premium privileges to maximize your earnings.",
  },
  {
    id: 3,
    icon: "💼",
    heading: "Dedicated Professional Support",
    desc: "From marketing to after-sales, our expert team guides you to deliver exceptional service with confidence.",
  },
  {
    id: 4,
    icon: "📈",
    heading: "Join a Sustainable Future",
    desc: "Be part of the EV revolution—driving innovation, sustainability, and a greener tomorrow together.",
  },
  {
    id: 5,
    icon: "🌍",
    heading: "Nationwide Dealer Network",
    desc: "Connect with a strong, fast-growing community of trusted partners across India.",
  },
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
        <Container className="text-center dealer-cards-container">
          <h2 className="dealer-info-heading">Drive Growth. Drive Vardaan.</h2>
          <p className="dealer-info-desc">
            Become a proud partner in our journey towards a greener tomorrow!{" "}
            <br />
            When you join our dealer network, you don’t just sell EVs — you
            power dreams, opportunities, and progress.
          </p>

          <div className="dealer-cards-slider">
            <Slider {...sliderSettings}>
              {cardData.map((card) => (
                <div key={card.id} className="dealer-card">
                  <div className="dealer-card-icon">{card.icon}</div>
                  <p className="dealer-card-text">
                    <strong>{card.heading}:</strong> <br />
                    {card.desc}
                  </p>
                </div>
              ))}
            </Slider>
          </div>
        </Container>

        <DealerForm />
      </section>
    </div>
  );
};

export default Dealer;
