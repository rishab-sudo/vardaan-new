import React, { useEffect, useState } from "react";
import "./PopupForm.css";

const PopupForm = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    city: "",
  });
  const [errors, setErrors] = useState({});

  // Show popup after 5 seconds (only first visit)
  useEffect(() => {
    const isShown = localStorage.getItem("popupShown");
    if (!isShown) {
      const timer = setTimeout(() => {
        setShowPopup(true);
        localStorage.setItem("popupShown", "true");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.mobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.mobile)) {
      newErrors.mobile = "Enter valid 10-digit mobile number";
    }

    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Submitted:", formData);
      setShowPopup(false);
    }
  };

  if (!showPopup) return null;

  return (
    <div className="popup-overlay">
      <div className="pop-form">
        <button className="close-btn" onClick={() => setShowPopup(false)}>
          ✕
        </button>

        <h3>Get in Touch</h3>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>

          <div className="form-group">
           <input
  type="tel"
  name="mobile"
  placeholder="Mobile Number"
  value={formData.mobile}
  maxLength="10"
  inputMode="numeric"
  onChange={(e) => {
    const value = e.target.value.replace(/\D/g, "");
    setFormData({ ...formData, mobile: value });
  }}
/>

            {errors.mobile && <span className="error">{errors.mobile}</span>}
          </div>

          <div className="form-group">
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
            />
            {errors.city && <span className="error">{errors.city}</span>}
          </div>

          <button type="submit" className="submit-btn">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
