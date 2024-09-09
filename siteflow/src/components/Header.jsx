import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo">
          <h1>SiteFlow</h1>
        </div>
        <ul>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
