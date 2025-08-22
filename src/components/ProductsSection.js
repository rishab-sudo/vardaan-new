import React, { useState } from "react";
import "./ProductsSection.css";
import { Container } from "react-bootstrap";

const products = [
  {
    id: 1,
    name: "Vardaan MS",
    category: "vardan-ms",
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
    colors: [
      { color: "white", img: require("../assets/auto11.png") },
      { color: "gray", img: require("../assets/auto11.png") },
    ],
  },
  {
    id: 3,
    name: "Vardaan Basic",
    category: "vardan-basic",
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

  // 👉 filter products here
  const filteredProducts =
    selectedFilter === "all"
      ? products
      : products.filter((p) => p.category === selectedFilter);

  return (
    <Container className="product-section">
      {/* Filter Buttons */}
      <div className="filter-buttons">
        <button
          className={selectedFilter === "all" ? "active" : ""}
          onClick={() => setSelectedFilter("all")}
        >
          All
        </button>
        <button
          className={selectedFilter === "vardan-ms" ? "active" : ""}
          onClick={() => setSelectedFilter("vardan-ms")}
        >
          Vardan MS
        </button>
        <button
          className={selectedFilter === "vardan-ss" ? "active" : ""}
          onClick={() => setSelectedFilter("vardan-ss")}
        >
          Vardan SS
        </button>
        <button
          className={selectedFilter === "vardan-basic" ? "active" : ""}
          onClick={() => setSelectedFilter("vardan-basic")}
        >
          Vardan Basic
        </button>
      </div>

      {/* Cards */}
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
            <button className="know-more-btn">Know More →</button>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default ProductSection;
