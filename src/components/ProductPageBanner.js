import React from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./ProductPageBanner.css";

const ProductPageBanner = () => {
  const productImages = [
    require("../assets/Background/p-1.jpg"),
    require("../assets/Background/p-2.png"),
    require("../assets/Background/p-3.jpg"),
  ];

  return (
    <Container fluid className="g-0 productPage-Banner-fluid">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        speed={1200}
        slidesPerView={1}
        className="productPage-swiper"
      >
        {productImages.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="productPage-image">
              <img src={img} alt={`product-${index}`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default ProductPageBanner;
