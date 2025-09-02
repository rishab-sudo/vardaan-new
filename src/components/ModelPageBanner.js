import React, { useEffect, useRef, useState } from "react";
import "./ModelPageBanner.css";
import productImg from "../assets/products/pside-1.png";

const ModelPageBanner = () => {
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setAnimate(true), 1000);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div className={`banner-container ${animate ? "active" : ""}`} ref={sectionRef}>
      {/* Product Image */}
      <img src={productImg} alt="Product" className="model-product-img" />

      {/* SVG Lines */}
      <svg className="svg-overlay">
        {/* Top angled line */}
        <path
          className="path"
          d="M50% 40% L70% 35%"
        />

        {/* Left straight line */}
        <path
          className="path"
          d="M50% 50% L20% 50%"
        />

        {/* Right straight line */}
        <path
          className="path"
          d="M50% 50% L80% 50%"
        />

        {/* Bottom angled line */}
        <path
          className="path"
          d="M50% 60% L70% 65%"
        />
      </svg>

      {/* Boxes */}
      <div className="feature-box" style={{ top: "30%", left: "72%" }}>
        Feature Top
      </div>
      <div className="feature-box" style={{ top: "48%", left: "15%" }}>
        Feature Left
      </div>
      <div className="feature-box" style={{ top: "48%", left: "82%" }}>
        Feature Right
      </div>
      <div className="feature-box" style={{ bottom: "25%", left: "72%" }}>
        Feature Bottom
      </div>
    </div>
  );
};

export default ModelPageBanner;
