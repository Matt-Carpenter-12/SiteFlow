import React from "react";

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-900 text-white text-center">
      <h2 className="text-3xl font-bold mb-10">Pricing</h2>
      <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Basic Website Package</h3>
          <p className="text-lg mb-4">Price: $500 - $1,000</p>
          <p>
            Includes custom design for up to 5 pages, responsive design, and 2
            rounds of revisions.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">
            E-Commerce Website Package
          </h3>
          <p className="text-lg mb-4">Price: $1,500 - $3,000</p>
          <p>
            Includes product catalog setup, payment gateway integration, and
            store management training.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Landing Page Package</h3>
          <p className="text-lg mb-4">Price: $300 - $800</p>
          <p>
            Custom design, lead generation forms, and integration with email
            marketing tools.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
