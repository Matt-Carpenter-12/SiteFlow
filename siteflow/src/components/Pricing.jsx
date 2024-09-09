import React from "react";
import "./Pricing.css";

const Pricing = () => {
  return (
    <section id="pricing">
      <h2>Pricing</h2>
      <div className="pricing-item">
        <h3>Basic Website Package</h3>
        <p>Price: $500 - $1,000</p>
        <p>
          Includes custom design for up to 5 pages, responsive design, and 2
          rounds of revisions.
        </p>
      </div>
      <div className="pricing-item">
        <h3>E-Commerce Website Package</h3>
        <p>Price: $1,500 - $3,000</p>
        <p>
          Includes product catalog setup, payment gateway integration, and store
          management training.
        </p>
      </div>
      <div className="pricing-item">
        <h3>Landing Page Package</h3>
        <p>Price: $300 - $800</p>
        <p>
          Custom design, lead generation forms, and integration with email
          marketing tools.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
