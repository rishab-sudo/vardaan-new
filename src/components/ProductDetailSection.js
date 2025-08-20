import React from "react";
import "./ProductDetailSection.css";

const ProductDetailSection = ({ heading, description, image, leftItems, rightItems }) => {
  return (
    <div className="product-detail-container">
      {/* Heading & Description */}
      <h2 className="product-heading">{heading}</h2>
      <p className="product-description">{description}</p>

      {/* Icons + Image Section */}
      <div className="product-icons-wrapper">
        {/* Left Side Icons */}
        <div className="icons-side">
          {leftItems.map((item, index) => (
            <div key={index} className="icon-text">
              <img src={item.icon} alt="icon" className="side-icon" />
              <span dangerouslySetInnerHTML={{ __html: item.text }} />
            </div>
          ))}
        </div>

        {/* Center Product Image */}
        <div className="product-image-circle">
          <img src={image} alt="product" className="product-image" />
        </div>

        {/* Right Side Icons */}
        <div className="icons-side">
          {rightItems.map((item, index) => (
            <div key={index} className="icon-text">
              <img src={item.icon} alt="icon" className="side-icon" />
              <span dangerouslySetInnerHTML={{ __html: item.text }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailSection;
