import React from "react";
import Slider from "react-slick";
import { Container } from "react-bootstrap";
import { FaQuoteLeft, FaStar, FaArrowLeft, FaArrowRight, FaMapMarkerAlt, FaUser } from "react-icons/fa";

import "./Testimonials.css";

const Testimonials = () => {
  const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow prev-arrow" onClick={onClick}>
      <FaArrowLeft />
    </div>
  );
};

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow next-arrow" onClick={onClick}>
      <FaArrowRight />
    </div>
  );
};

const settings = {
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3500,
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2, slidesToScroll: 1 },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 1, slidesToScroll: 1 },
    },
  ],
};


  const reviews = [
    {
      text: "मैं पिछले 8 महीने से Vardaan EV चला रहा हूँ। बैटरी बैकअप बहुत शानदार है, पूरा दिन आराम से चल जाती है।",
      name: "Raju",
      place: "Aonla, Bareilly",
      rating: 5,
      img: require("../assets/client/Raju, Aonla, Bly.jpeg"),
    },
    {
      text: "इस रेंज में Vardaan EV की बैटरी सबसे अच्छी है। एक बार चार्ज करने पर पूरा दिन काम हो जाता है।",
      name: "Vinod",
      place: "Aonla, Bareilly",
      rating: 4,
      img: require("../assets/client/Vinod, Aonla, Bly.jpeg"),
    },
    {
      text: "पहले दूसरी कंपनी की ई-रिक्शा थी, लेकिन Vardaan EV की बैटरी परफॉर्मेंस कहीं बेहतर है।",
      name: "Jitendra Kashyap",
      place: "Badaun",
      rating: 5,
      img: require("../assets/client/Jitendra Kashyap, Badaun.jpeg"),
    },
    {
      text: "बैटरी बहुत पावरफुल है, लोड के साथ भी कोई दिक्कत नहीं आती।",
      name: "Mohd. Amir",
      place: "Badaun",
      rating: 4,
      img: require("../assets/client/Mohd. Amir, Badaun.jpeg"),
    },
    {
      text: "दिनभर चलाने के बाद भी बैटरी की ताकत बनी रहती है। बहुत भरोसेमंद ई-रिक्शा है।",
      name: "Akash",
      place: "Kargaina, Bareilly",
      rating: 5,
      img: require("../assets/client/Akash, Kargaina, Bly.jpeg"),
    },
    {
      text: "Vardaan EV लेने के बाद कमाई बढ़ गई है क्योंकि बैटरी बीच में जवाब नहीं देती।",
      name: "Angoori",
      place: "Pachpera, Bareilly",
      rating: 5,
      img: require("../assets/client/Angoori, Pachpera, Bly.jpeg"),
    },
    {
      text: "चार्जिंग टाइम कम है और बैटरी बैकअप बहुत अच्छा मिलता है।",
      name: "Krishna Pal",
      place: "Shahhi, Bareilly",
      rating: 4,
      img: require("../assets/client/Krishna Pal, Shahhi, Bly.jpeg"),
    },
    {
      text: "मैं रोज़ 80–90 किलोमीटर चलाता हूँ, फिर भी बैटरी बढ़िया परफॉर्म करती है।",
      name: "Mohd. Amir",
      place: "Shyamatganj, Bareilly",
      rating: 5,
      img: require("../assets/client/Mohd. Amir, Shyamatganj, Bly.jpeg"),
    },
    {
      text: "बैटरी में कोई हीटिंग या अचानक डिस्चार्ज की समस्या नहीं है।",
      name: "Mustjab",
      place: "Shahi, Bareilly",
      rating: 4,
      img: require("../assets/client/Mustjab, Shahi, Bly.jpeg"),
    },
    {
      text: "Vardaan EV की बैटरी बहुत टिकाऊ है, मेंटेनेंस भी कम है।",
      name: "Narpat",
      place: "Faridpur, Bareilly",
      rating: 5,
      img: require("../assets/client/Narpat, Faridpur, Bly.jpeg"),
    },
    {
      text: "एक साल से इस्तेमाल कर रहा हूँ, बैटरी अभी भी मजबूत चल रही है।",
      name: "Amit",
      place: "Devchara, Bareilly",
      rating: 5,
      img: require("../assets/client/Amit, Devchara, Bly.jpeg"),
    },
    {
      text: "पूरा लोड होने पर भी पिकअप अच्छा रहता है, बैटरी बहुत पावरफुल है।",
      name: "Ramnath",
      place: "Devchara, Bareilly",
      rating: 4,
      img: require("../assets/client/Ramnath, Devchara, Bly.jpeg"),
    },
    {
      text: "शहर के ट्रैफिक में भी बैटरी परफॉर्मेंस शानदार रहती है।",
      name: "Ajay",
      place: "Jadonpur, Bareilly",
      rating: 5,
      img: require("../assets/client/Ajay, Jadonpur, Bly.jpeg"),
    },
    {
      text: "बैटरी की गुणवत्ता बहुत अच्छी है, बिजली की बचत भी होती है।",
      name: "Omveer",
      place: "Jadonpur, Bareilly",
      rating: 4,
      img: require("../assets/client/Omveer, Jadonpur, Bly.jpeg"),
    },
    {
      text: "Vardaan EV ई-रिक्शा रोज़मर्रा के काम के लिए एकदम सही है।",
      name: "Karan Sharma",
      place: "Nawabganj, Bareilly",
      rating: 5,
      img: require("../assets/client/Karan Sharma, Nawabganj, Bly.jpeg"),
    },
    {
      text: "बैटरी बैकअप की वजह से बीच दिन चार्ज करने की जरूरत नहीं पड़ती।",
      name: "Savina",
      place: "Nawabganj, Bareilly",
      rating: 4,
      img: require("../assets/client/Savina, Nawabganj, Bly.jpeg"),
    },
    {
      text: "दूसरे ब्रांड की तुलना में Vardaan EV ज्यादा रेंज देता है।",
      name: "Naveen Yadav",
      place: "Pilibhit",
      rating: 5,
      img: require("../assets/client/Naveen Yadav, Bilsanda, Pilibhit.jpeg"),
    },
    {
      text: "दूसरे ब्रांड की तुलना में Vardaan EV ज्यादा रेंज देता है।",
      name: "Sahadat Khan",
      place: "Bilsanda, Pilibhit",
      rating: 4,
      img: require("../assets/client/Sahadat Khan, Bilsanda, Pilibhit.jpeg"),
    },
  ];

  return (
    <Container fluid className="testimonials-section py-5">
      <div className="text-center mb-4">
        <FaQuoteLeft size={40} color="#05956c" />
        <h2 className="testimonials-heading">Customer Testimonials</h2>
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

              {/* ⭐ STAR RATING */}
              <div className="testimonial-stars">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    size={18}
                    color={i < review.rating ? "#f7a422" : "#ddd"}
                  />
                ))}
              </div>

              <div className="testimonial-customer">
<span className="customer-name">
  <FaUser style={{ marginRight: "6px", color: "#000" }} />
  {review.name}
</span>

                <br />
              <span className="customer-place">
  <FaMapMarkerAlt style={{ marginRight: "6px", color: "#000" }} />
  {review.place}
</span>

              </div>
            </div>
          </div>
        ))}
      </Slider>
    </Container>
  );
};

export default Testimonials;
