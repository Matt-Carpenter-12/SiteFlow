import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <section id="services">
      <h2>Our Services</h2>
      <div className="service-item">
        <h3>Custom Website Design & Development</h3>
        <p>
          We create fully custom websites tailored to your needs, designed for
          performance, functionality, and aesthetics.
        </p>
      </div>
      <div className="service-item">
        <h3>E-Commerce Website Development</h3>
        <p>
          We build online stores with product catalogs, shopping cart
          integrations, and payment gateways.
        </p>
      </div>
      <div className="service-item">
        <h3>One-Page Websites</h3>
        <p>
          Simple one-page websites or landing pages for personal branding,
          promotions, or product showcases.
        </p>
      </div>
      <div className="service-item">
        <h3>Website Maintenance</h3>
        <p>
          Ongoing updates, backups, security patches, and content updates to
          keep your website running smoothly.
        </p>
      </div>
    </section>
  );
};

export default Services;
