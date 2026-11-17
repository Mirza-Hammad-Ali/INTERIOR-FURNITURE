
import { useState } from "react";
import { Link } from "react-router-dom";

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
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Beds", href: "/shop?category=Beds" },
    { name: "Wardrobes", href: "/shop?category=Wardrobes" },
    { name: "Dining", href: "/shop?category=Dining Furniture" },
    { name: "Mattresses", href: "/shop?category=Mattresses" },
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
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <span className="logo-main">INTERIOR</span>
          <span className="logo-sub">FURNITURE UK</span>
        </Link>

        {/* Navigation Links */}
        <nav className={`navbar-links ${menuOpen ? "active" : ""}`}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={closeMenu}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Navbar Actions */}
        <div className="navbar-actions">
          <button aria-label="Search" className="navbar-icon">
            <FiSearch />
          </button>

          <button aria-label="Account" className="navbar-icon">
            <FiUser />
          </button>

          <button aria-label="Shopping Bag" className="navbar-icon bag-icon">
            <FiShoppingBag />
          </button>
        </div>

      </div>
    </header>
  );
}

export default Navbar;
