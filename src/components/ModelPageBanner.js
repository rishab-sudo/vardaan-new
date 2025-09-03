import React from "react";
import "./ModelPageBanner.css";


const ModelPageBanner = () => {
  return (
    <div className="banner-container">
      <img src={require("../assets/Banner/product-page-banner.jpg")} alt="Product" className="model-product-img" />
    </div>
  );
};

export default ModelPageBanner;
