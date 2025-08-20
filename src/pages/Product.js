import React from "react";
import ProductDetailSection from "../components/ProductDetailSection";

const Example = () => {
  const leftItems = [
    { icon: require("../assets/power.png"), text: "Range <br/> 75km" },
    { icon: require("../assets/power.png"), text: "Power <br/> 500W" },
    { icon: require("../assets/power.png"), text: "Battery <br/> 48V" },
    { icon: require("../assets/power.png"), text: "Wheels <br/> 16 inch" },
  ];

  const rightItems = [
    { icon: require("../assets/power.png"), text: "Top Speed <br/> 60km/h" },
    { icon: require("../assets/power.png"), text: "Charge <br/> 4hr" },
    { icon: require("../assets/power.png"), text: "Weight <br/> 50kg" },
    { icon: require("../assets/power.png"), text: "Seats <br/> 2" },
  ];

  return (
    <ProductDetailSection
      heading="Electric Scooter"
      description="A powerful and eco-friendly scooter for city rides."
      image={require("../assets/auto11.png")}
      leftItems={leftItems}
      rightItems={rightItems}
    />
  );
};

export default Example;
