import React, { useState } from "react";
import Swal from "sweetalert2";
import { Container } from "react-bootstrap";
import "./DealerForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    area: "",
    state: "",
    pincode: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!formData.name.trim()) return "Name is required";
    if (!formData.email.includes("@")) return "Valid email required";
    if (!/^[0-9]{10}$/.test(formData.mobile)) return "Valid 10-digit mobile required";
    if (!formData.area.trim()) return "Area is required";
    if (!formData.state.trim()) return "State is required";
    if (!/^[0-9]{6}$/.test(formData.pincode)) return "Valid 6-digit pincode required";
    if (!formData.message.trim()) return "Message is required";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const error = validateForm();
    if (error) {
      Swal.fire("Validation Error", error, "error");
      return;
    }

    try {
      const res = await fetch("sendMail.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        Swal.fire("Success", "Form submitted successfully!", "success");
        setFormData({
          name: "",
          email: "",
          mobile: "",
          area: "",
          state: "",
          pincode: "",
          message: "",
        });
      } else {
        Swal.fire("Error", "Something went wrong, please try again!", "error");
      }
    } catch (err) {
      Swal.fire("Error", "Server not responding!", "error");
    }
  };

  return (
    <Container className="dealerform-container">
      {/* 🔹 Heading always at the top */}
      <h2 className="dealerform-heading">Join Our Dealer Network</h2>

      <form onSubmit={handleSubmit}>
        {/* Name + Email */}
        <div className="dealerform-row">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        {/* Mobile + Area */}
        <div className="dealerform-row">
          <input
            type="text"
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
          />
          <input
            type="text"
            name="area"
            placeholder="Area (Sq Ft)"
            value={formData.area}
            onChange={handleChange}
          />
        </div>

        {/* State + Pincode */}
        <div className="dealerform-row">
          <input
            type="text"
            name="state"
            placeholder="State"
            value={formData.state}
            onChange={handleChange}
          />
          <input
            type="text"
            name="pincode"
            placeholder="Pincode"
            value={formData.pincode}
            onChange={handleChange}
          />
        </div>

        {/* Message */}
        <div className="dealerform-row-full">
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="dealerform-submit">
          <button type="submit">Submit</button>
        </div>
      </form>
    </Container>
  );
};

export default ContactForm;
