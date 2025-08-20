import React from "react";
import Slider from "react-slick";
import { Container } from "react-bootstrap";
import { FaQuoteLeft } from "react-icons/fa";
import "./Testimonials.css";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 600,
    slidesToShow: 3, // Desktop
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // Tablet
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 768, // Mobile
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  const reviews = [
    {
      text: "This company truly exceeded my expectations! Their services are reliable and very professional.",
      name: "John Doe",
      img: require("../assets/man.png"), // your PNG profile
    },
    {
      text: "The customer support is outstanding. I got assistance immediately and all my queries were resolved.",
      name: "Sarah Lee",
      img: require("../assets/woman.png"),
    },
    {
      text: "Great quality and on-time delivery. I would definitely recommend them to others!",
      name: "Michael Smith",
      img: require("../assets/man.png"),
    },
  ];

  return (
    <Container fluid className="testimonials-section py-5">
      <div className="text-center mb-4">
        <FaQuoteLeft size={40} color="#05956c" />
        <h2 className="testimonials-heading">Testimonials</h2>
      </div>

      <Slider {...settings}>
        {reviews.map((review, index) => (
          <div key={index} className="testimonial-slide">
            <div className="testimonial-box">
              <img
                src={review.img}
                alt={review.name}
                className="testimonial-profile"
              />
              <p className="testimonial-text">“{review.text}”</p>
              <div className="testimonial-customer">
                <span className="customer-name">{review.name}</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </Container>
  );
};

export default Testimonials;
