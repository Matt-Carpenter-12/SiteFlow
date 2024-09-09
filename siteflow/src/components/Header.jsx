import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-900 fixed w-full top-0 z-50 shadow-lg">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">SiteFlow</h1>
        <ul className="flex space-x-6">
          <li>
            <a href="#services" className="text-white hover:text-green-500">
              Services
            </a>
          </li>
          <li>
            <a href="#pricing" className="text-white hover:text-green-500">
              Pricing
            </a>
          </li>
          <li>
            <a href="#contact" className="text-white hover:text-green-500">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
