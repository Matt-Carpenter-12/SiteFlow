import React from "react";

const Contact = () => {
  return (
    <footer id="contact" className="py-20 bg-gray-800 text-center text-white">
      <h2 className="text-3xl font-bold mb-10">Contact Us</h2>
      <p className="text-lg mb-4">
        Email:{" "}
        <a href="mailto:info@siteflow.com" className="underline">
          info@siteflow.com
        </a>
      </p>
      <p className="text-lg mb-10">Phone: (555) 123-4567</p>
      <a
        href="mailto:info@siteflow.com"
        className="bg-green-500 text-white px-8 py-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300"
      >
        Email Us
      </a>
    </footer>
  );
};

export default Contact;
