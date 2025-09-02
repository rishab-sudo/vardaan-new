import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.firstname.trim()) newErrors.firstname = 'First name is required';
    if (!formData.lastname.trim()) newErrors.lastname = 'Last name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone.trim()) newErrors.phone = 'Mobile number is required';
    else if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Enter a valid 10-digit number';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    setErrors(prev => ({
      ...prev,
      [e.target.name]: ''
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length) {
      setErrors(formErrors);
      return;
    }

    // Future PHP submission
    try {
      const res = await fetch("sendMail.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({ firstname: '', lastname: '', email: '', phone: '', message: '' });
      } else {
        alert("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Error sending form:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      {submitted && <p className="success-message">Message sent successfully!</p>}
      
      {/* First & Last Name Row */}
      <div className="name-row">
        <div>
          <label className='form-label'>First Name</label>
          <input
            type="text"
            name="firstname"
            placeholder="First Name"
            value={formData.firstname}
            onChange={handleChange}
          />
          {errors.firstname && <p className="error">{errors.firstname}</p>}
        </div>
        <div>
          <label className='form-label'>Last Name</label>
          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            value={formData.lastname}
            onChange={handleChange}
          />
          {errors.lastname && <p className="error">{errors.lastname}</p>}
        </div>
      </div>

      {/* Email & Phone Row */}
      <div className="name-row">
        <div>
          <label className='form-label'>Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div>
          <label className='form-label'>Mobile Number</label>
          <input
            type="text"
            name="phone"
            placeholder=" Mobile Number"
            value={formData.phone}
            onChange={handleChange}
            maxLength="10"
          />
          {errors.phone && <p className="error">{errors.phone}</p>}
        </div>
      </div>

      {/* Message */}
      <div>
        <label className='form-label'>Enter Message</label>
        <textarea
          name="message"
          placeholder="Message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
        />
        {errors.message && <p className="error">{errors.message}</p>}
      </div>

      <button className="contact-submit-button" type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
