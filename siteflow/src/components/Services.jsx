import React from "react";

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-10 text-gray-800">Our Services</h2>
      <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h3 className="text-2xl font-semibold mb-4">Custom Website Design</h3>
          <p className="text-gray-600">
            We create fully custom websites tailored to your needs, designed for
            performance, functionality, and aesthetics.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h3 className="text-2xl font-semibold mb-4">
            E-Commerce Development
          </h3>
          <p className="text-gray-600">
            We build online stores with product catalogs, shopping cart
            integrations, and payment gateways.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h3 className="text-2xl font-semibold mb-4">One-Page Websites</h3>
          <p className="text-gray-600">
            Simple one-page websites or landing pages for personal branding,
            promotions, or product showcases.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h3 className="text-2xl font-semibold mb-4">Website Maintenance</h3>
          <p className="text-gray-600">
            Ongoing updates, backups, security patches, and content updates to
            keep your website running smoothly.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
