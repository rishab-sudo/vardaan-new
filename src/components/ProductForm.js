import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { FaUser, FaEnvelope, FaPhoneAlt, FaHome } from "react-icons/fa"; // ✅ changed to FaPhoneAlt
import Swal from "sweetalert2";
import "./ProductForm.css";

export default function ProductForm() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("sendProductForm.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        Swal.fire("Success!", "Your details were submitted successfully.", "success");
        setFormData({ fullname: "", email: "", phone: "", address: "" });
      } else {
        Swal.fire("Error!", "Something went wrong. Please try again.", "error");
      }
    } catch (error) {
      Swal.fire("Error!", "Server not responding.", "error");
    }
  };

  return (
    <Container fluid className="productForm-fluid">
        <div>
          <h2 className="page-heading">Get A Qoute</h2>
        </div>
      <Container className="productForm-content-container">
        <Form onSubmit={handleSubmit} className="productForm">
          
          {/* Full Name */}
          <Form.Group className="form-field">
            <Form.Label>Full Name</Form.Label>
            <div className="input-wrapper">
              <FaUser className="input-icon" />
              <Form.Control
                type="text"
                placeholder="Enter your full name"
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
                required
              />
            </div>
          </Form.Group>

          {/* Email */}
          <Form.Group className="form-field">
            <Form.Label>Email</Form.Label>
            <div className="input-wrapper">
              <FaEnvelope className="input-icon" />
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </Form.Group>

          {/* Phone (icon now faces right) */}
          <Form.Group className="form-field">
            <Form.Label>Phone Number</Form.Label>
            <div className="input-wrapper">
              <FaPhoneAlt className="input-icon" /> {/* ✅ facing right */}
              <Form.Control
                type="tel"
                placeholder="Enter your phone no"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </Form.Group>

          {/* Address */}
          <Form.Group className="form-field">
            <Form.Label>Address</Form.Label>
            <div className="input-wrapper">
              <FaHome className="input-icon" />
              <Form.Control
              className=""
                as="textarea"
                rows={1}
                placeholder="Enter your address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
          </Form.Group>

          {/* Submit Button */}
          <div className="form-field">
            <Form.Label>&nbsp;</Form.Label>
            <Button type="submit" variant="light" className="submit-btn">
              Submit
            </Button>
          </div>
        </Form>
      </Container>
    </Container>
  );
}
