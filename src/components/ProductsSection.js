import React, { useState } from "react";
import "./ProductsSection.css";
import { Container } from "react-bootstrap";

const products = [
  {
    id: 1,
    name: "Vardaan MS",
    category: "vardan-ms",
    link: "/vardaanMs", // 👉 different link
    colors: [
      { color: "red", img: require("../assets/auto11.png") },
      { color: "blue", img: require("../assets/auto11.png") },
      { color: "black", img: require("../assets/auto11.png") },
    ],
  },
  {
    id: 2,
    name: "Vardaan SS",
    category: "vardan-ss",
    link: "/vardaanSS", // 👉 different link
    colors: [
      { color: "white", img: require("../assets/auto11.png") },
      { color: "gray", img: require("../assets/auto11.png") },
    ],
  },
  {
    id: 3,
    name: "Vardaan Basic",
    category: "vardan-basic",
    link: "/vardaanBasic", // 👉 different link
    colors: [
      { color: "green", img: require("../assets/auto11.png") },
      { color: "black", img: require("../assets/auto11.png") },
    ],
  },
];

const ProductSection = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [selectedImages, setSelectedImages] = useState(
    products.reduce((acc, p) => {
      acc[p.id] = p.colors[0].img;
      return acc;
    }, {})
  );

  const handleColorChange = (productId, img) => {
    setSelectedImages({ ...selectedImages, [productId]: img });
  };

  const filteredProducts =
    selectedFilter === "all"
      ? products
      : products.filter((p) => p.category === selectedFilter);

  return (
    <Container className="product-section">
      <div className="d-flex flex-column justify-content-center align-items-center m-auto">
        <h2 className="page-heading">Our Products</h2>
      </div>

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={selectedImages[product.id]}
              alt={product.name}
              className="product-img"
            />
            <div className="product-info">
              <span className="model-name">{product.name}</span>
              <div className="color-options">
                {product.colors.map((c, idx) => (
                  <span
                    key={idx}
                    className="color-circle"
                    style={{ backgroundColor: c.color }}
                    onClick={() => handleColorChange(product.id, c.img)}
                  ></span>
                ))}
              </div>
            </div>

            {/* 👉 Know More button with unique link */}
            <a href={product.link} className="know-more-btn">
              Know More →
            </a>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default ProductSection;
