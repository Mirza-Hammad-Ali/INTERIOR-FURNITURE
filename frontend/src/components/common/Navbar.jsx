
import { useState } from "react";
import {
  FiSearch,
  FiUser,
  FiShoppingBag,
  FiMenu,
  FiX,
} from "react-icons/fi";

import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Shop", href: "#shop" },
    { name: "Beds", href: "#beds" },
    { name: "Wardrobes", href: "#wardrobes" },
    { name: "Dining", href: "#dining" },
    { name: "Mattresses", href: "#mattresses" },
  ];

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Logo */}
        <a href="#home" className="navbar-logo" onClick={closeMenu}>
          <span className="logo-main">INTERIOR</span>
          <span className="logo-sub">FURNITURE UK</span>
        </a>

        {/* Navigation Links */}
        <nav className={`navbar-links ${menuOpen ? "active" : ""}`}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={closeMenu}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Navbar Actions */}
        <div className="navbar-actions">
          <a href="#search" aria-label="Search" className="navbar-icon">
            <FiSearch />
          </a>

          <a href="#account" aria-label="Account" className="navbar-icon">
            <FiUser />
          </a>

          <a href="#cart" aria-label="Shopping Bag" className="navbar-icon bag-icon">
            <FiShoppingBag />
          </a>
        </div>

      </div>
    </header>
  );
}

export default Navbar;
