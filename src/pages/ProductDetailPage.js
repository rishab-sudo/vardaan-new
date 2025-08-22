import React from "react";
import ProductDetailSection from "../components/ProductDetailSection";
import ProductPageBanner from "../components/ProductPageBanner";
import ProductForm from "../components/ProductForm";

const ProductDetailPage = () => {
  const leftItems = [
    { icon: require("../assets/power.png"), text: "Range <br/> 75km" },
    { icon: require("../assets/power.png"), text: "Power <br/> 500W" },
    { icon: require("../assets/power.png"), text: "Battery <br/> 48V" },
    { icon: require("../assets/power.png"), text: "Wheels <br/> 16 inch" },
  ];

const rightItems = [
  { icon: require("../assets/power.png"), text: "", color: "#ff0000" }, // Red
  { icon: require("../assets/power.png"), text: "", color: "#00ff00" }, // Green
  { icon: require("../assets/power.png"), text: "", color: "#0000ff" }, // Blue
  { icon: require("../assets/power.png"), text: "", color: "#ffa500" }, // Orange
];

  return (
    <>
    <ProductPageBanner/>
    <ProductDetailSection
      heading="Electric Scooter"
      description="A powerful and eco-friendly scooter for city rides."
      image={require("../assets/auto11.png")}
      leftItems={leftItems}
      rightItems={rightItems}
      />

      <ProductForm/>
      </>
  );
};

export default ProductDetailPage;
