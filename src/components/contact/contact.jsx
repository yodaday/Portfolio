import React, { useState } from "react";
import "./contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate fields
    let formErrors = { name: "", email: "", message: "" };

    if (!formData.name) formErrors.name = "Name is required";
    if (!formData.email) formErrors.email = "Email is required";
    if (!formData.message) formErrors.message = "Message is required";

    setErrors(formErrors);

    // If there are no errors, log the form data
    if (!Object.values(formErrors).some((err) => err)) {
      console.log("Form submitted with data:", formData);
    }
  };

  return (
    <section className="contact">
      <h2>Contact</h2>
      <ul>
        <li>
          Email: <a href="mailto:meiayush@gmail.com">meiayush@gmail.com</a>
        </li>
        <li>
          Phone: <a href="tel:+484848484">484848484</a>
        </li>
      </ul>

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            required
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email"
            required
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message"
            required
          />
          {errors.message && <p className="error">{errors.message}</p>}
        </div>

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </section>
  );
}

export default Contact;
