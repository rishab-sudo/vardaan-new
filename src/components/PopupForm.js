import React, { useEffect, useState } from "react";
import "./PopupForm.css";

const PopupForm = () => {
  const [showPopup, setShowPopup] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    city: "",
    district: "",
    planning: "",
  });

  const [errors, setErrors] = useState({});

  // 🔥 Popup appears after 5 seconds (EVERY TIME)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.mobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.mobile)) {
      newErrors.mobile = "Enter valid 10-digit mobile number";
    }

    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.district.trim()) newErrors.district = "District is required";
    if (!formData.planning.trim()) newErrors.planning = "Select planning time";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Data:", formData);
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

        <h3>Become Our Dealer</h3>

        <form onSubmit={handleSubmit}>
          {/* Name */}
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

          {/* Mobile */}
          <div className="form-group">
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              maxLength="10"
              inputMode="numeric"
              value={formData.mobile}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, "");
                setFormData({ ...formData, mobile: value });
              }}
            />
            {errors.mobile && <span className="error">{errors.mobile}</span>}
          </div>

          {/* City */}
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

          {/* District */}
          <div className="form-group">
            <input
              type="text"
              name="district"
              placeholder="District"
              value={formData.district}
              onChange={handleChange}
            />
            {errors.district && <span className="error">{errors.district}</span>}
          </div>

          {/* Planning dropdown inside input */}
          <div className="form-group">
            <input
              type="text"
              name="planning"
              placeholder="When are you planning?"
              list="planning-options"
              value={formData.planning}
              onChange={handleChange}
            />
            <datalist id="planning-options">
              <option value="Start Immediate" />
              <option value="Within Week" />
              <option value="Start Within Month" />
              <option value="Start Within Two Month" />
              <option value="Start Within Three Month" />
            </datalist>
            {errors.planning && <span className="error">{errors.planning}</span>}
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
