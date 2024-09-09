import React from "react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-green-400 to-green-600 h-screen flex flex-col justify-center items-center text-center text-white">
      <h2 className="text-5xl font-bold mb-6">
        Building Your Digital Presence
      </h2>
      <p className="text-lg max-w-2xl mb-10">
        High-quality, affordable, and user-friendly websites for small
        businesses and individuals. Let SiteFlow bring your business online.
      </p>
      <a
        href="#contact"
        className="bg-gray-900 text-white px-8 py-4 rounded-full shadow-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
      >
        Get Started
      </a>
    </section>
  );
};

export default Hero;
