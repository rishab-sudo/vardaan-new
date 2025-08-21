import React from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./ProductPageBanner.css";

const ProductPageBanner = () => {
  const products = [
    {
      id: 1,
      title: "Mountain Cycle <br> Mountain Cycle",
      desc: "Experience unmatched speed and control with our new bike.",
      image: require("../assets/auto11.png"),
      features: ["50 KPH <br> Speed", "Lightweight Design", "Eco Friendly"],
    },
    {
      id: 2,
      title: "Mountain Cycle <br> Mountain Cycle",
      desc: "Smooth ride with eco-friendly power and comfort.",
      image: require("../assets/auto11.png"),
      features: ["60 KM <br> Range", "Fast Charging", "Compact Design"],
    },
    {
      id: 3,
      title: "Mountain Cycle <br> Mountain Cycle",
      desc: "Perfect for tough terrains with durability and style.",
      image: require("../assets/auto11.png"),
      features: ["Shock Absorbers", "Strong Grip", "Durable Frame"],
    },
  ];

  return (
    <Container fluid className="g-0 productPage-Banner-fluid">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        speed={2000}
        effect="slide"
        className="productPage-swiper"
      >
        {products.map((item, index) => (
          <SwiperSlide key={item.id}>
            <div className="productPage-banner">
              {/* Left Circles */}
              <div className="productPage-circles">
                {products.map((_, i) => (
                  <div
                    key={i}
                    className={`circle ${i === index ? "active" : ""}`}
                  >
                    <div className="line"></div>
                  </div>
                ))}
              </div>

              {/* Left Side Text + Features */}
              <div className="productPage-left">
                <h2 dangerouslySetInnerHTML={{ __html: item.title }} />
                <p>{item.desc}</p>

                {/* Horizontal Features (below heading div) */}
                <div className="productPage-features">
                  {item.features.map((f, idx) => (
                    <div className="feature-box" key={idx}>
                      <p dangerouslySetInnerHTML={{ __html: f }} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Product Image */}
              <div className="productPage-image">
                <img src={item.image} alt={item.title} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default ProductPageBanner;
