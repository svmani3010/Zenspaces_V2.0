import React, { useState } from "react"; // Added useState
import { assets } from "./assets/images";
import "./Navbar.css";
import "./ZenPhilosophy.css";
import navBtnBackground from "./assets/images/web-icon-bg.png";

export function Navbar() {
  // 1. Logic to track if the mobile menu is open or closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const IMG_LOGO = assets.company_logo;

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={IMG_LOGO} alt="Zenspaces" />
      </div>

      {/* 2. Toggle the 'active' class based on state */}
      <ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
        <li>
          <a href="#" onClick={() => setIsMenuOpen(false)}>
            Spatial Intelligence
          </a>
        </li>
        <li>
          <a href="#" onClick={() => setIsMenuOpen(false)}>
            Zen Journey
          </a>
        </li>
        <li>
          <a href="#" onClick={() => setIsMenuOpen(false)}>
            Webapp
          </a>
        </li>
        <li>
          <a href="#" onClick={() => setIsMenuOpen(false)}>
            Spaces Transformed
          </a>
        </li>
        <li>
          <a href="#" onClick={() => setIsMenuOpen(false)}>
            Blogs
          </a>
        </li>
        <li>
          <a href="#" onClick={() => setIsMenuOpen(false)}>
            Contact
          </a>
        </li>
      </ul>

      <div className="navbar-actions">
        <button
          className="btn-download"
          style={{
            backgroundImage: `url(${navBtnBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          Download The App
        </button>

        {/* 3. The Hamburger Icon with 3 spans for the lines */}
        <div
          className={`hamburger ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}
