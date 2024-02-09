import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <p>Get in touch to discuss your project or inquire about my services:</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" value={formData.message} onChange={handleChange} required />
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
