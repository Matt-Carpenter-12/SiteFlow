import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <footer id="contact">
      <h2>Contact Us</h2>
      <p>Email: info@siteflow.com</p>
      <p>Phone: (555) 123-4567</p>
      <a href="mailto:info@siteflow.com" className="cta-button">
        Email Us
      </a>
    </footer>
  );
};

export default Contact;
