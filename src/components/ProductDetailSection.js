import React, { useMemo, useState } from "react";
import "./ProductDetailSection.css";

const ProductDetailSection = ({ heading, description, image, leftItems, rightItems, gallery }) => {
  const leftPositions = leftItems && leftItems.length > 0
    ? leftItems.map((_, i) => ((i + 1) * 100) / (leftItems.length + 1))
    : [];

  const rightPositions = rightItems && rightItems.length > 0
    ? rightItems.map((_, i) => ((i + 1) * 100) / (rightItems.length + 1))
    : [];

  const computedGallery = useMemo(() => {
    const rightImages = (rightItems || [])
      .map((item) => item.image)
      .filter(Boolean);
    if (gallery && gallery.length) return gallery;
    if (rightImages.length) return rightImages;
    return image ? [image] : [];
  }, [gallery, rightItems, image]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentImage = computedGallery[currentIndex] || image;

  const handleSelectRightItem = (index) => {
    const rightImages = (rightItems || [])
      .map((item) => item.image)
      .filter(Boolean);
    if (rightImages.length) {
      const boundedIndex = Math.max(0, Math.min(index, rightImages.length - 1));
      setCurrentIndex(boundedIndex);
    }
  };

  const goPrev = () => {
    if (!computedGallery.length) return;
    setCurrentIndex((prev) => (prev - 1 + computedGallery.length) % computedGallery.length);
  };

  const goNext = () => {
    if (!computedGallery.length) return;
    setCurrentIndex((prev) => (prev + 1) % computedGallery.length);
  };

  return (
    <div className="product-detail-container">
      {/* Heading & Description */}
      <h2 className="product-heading">{heading}</h2>
      <p className="product-description">{description}</p>

      {/* Desktop Layout */}
      <div className="circle-layout desktop-only">
        {/* Left Arc */}
        <svg className="arc left-arc" viewBox="0 0 200 500" preserveAspectRatio="none">
          <path d="M200 0 Q0 250 200 500" stroke="#999" strokeWidth="2" fill="none" />
        </svg>

        <div className="arc-track left-track">
          {leftItems.map((item, index) => (
            <div
              key={index}
              className="arc-item left-arc-item"
              style={{ "--od": `${leftPositions[index]}%` }}
            >
              <img src={item.icon} alt="icon" className="arc-icon" />
              {item.text && (
                <span
                  className="arc-text left"
                  dangerouslySetInnerHTML={{ __html: item.text }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Center Image */}
        <div className="product-center">
          <img src={currentImage} alt="product" />
        </div>

        {/* Right Arc */}
        <svg className="arc right-arc" viewBox="0 0 200 500" preserveAspectRatio="none">
          <path d="M0 0 Q200 250 0 500" stroke="#999" strokeWidth="2" fill="none" />
        </svg>

        <div className="arc-track right-track">
          {rightItems.map((item, index) => (
            <div
              key={index}
              className="arc-item right-arc-item"
              style={{ "--od": `${rightPositions[index]}%` }}
              onClick={() => handleSelectRightItem(index)}
              role="button"
              aria-label={`Select variant ${index + 1}`}
            >
              <span
                className="arc-swatch"
                style={{ backgroundColor: item.color || "#cccccc" }}
              />
              {item.text && <span className="arc-text right">{item.text}</span>}
            </div>
          ))}
        </div>

        <div className="curve-controls">
          <button
            type="button"
            className="control-btn prev"
            onClick={goPrev}
            aria-label="Previous image"
            disabled={computedGallery.length <= 1}
          >
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path d="M15 6L9 12L15 18" stroke="white" strokeWidth="2" />
            </svg>
          </button>
          <button
            type="button"
            className="control-btn next"
            onClick={goNext}
            aria-label="Next image"
            disabled={computedGallery.length <= 1}
          >
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path d="M9 6L15 12L9 18" stroke="white" strokeWidth="2" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Layout */}
      <div className="mobile-layout">
        {/* Icons Row */}
        <div className="mobile-icons">
          {leftItems.map((item, idx) => (
            <div className="mobile-icon-box" key={idx}>
              <img src={item.icon} alt="icon" />
              <span dangerouslySetInnerHTML={{ __html: item.text }} />
            </div>
          ))}
        </div>

        {/* Center Image */}
        <div className="mobile-center-img">
          <img src={currentImage} alt="product" />
        </div>

        {/* Color Circles */}
        <div className="mobile-colors">
          {rightItems.map((item, idx) => (
            <span
              key={idx}
              className="color-circle"
              style={{ backgroundColor: item.color || "#ccc" }}
              onClick={() => handleSelectRightItem(idx)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailSection;
