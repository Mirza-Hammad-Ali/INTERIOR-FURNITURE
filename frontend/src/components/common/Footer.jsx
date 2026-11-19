
import { Link } from "react-router-dom";

import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiFacebook,
  FiInstagram,
  FiTwitter,
} from "react-icons/fi";

import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              INTERIOR <span>FURNITURE UK</span>
            </Link>

            <p>
              Bringing comfort, elegance and timeless furniture designs
              into homes across the United Kingdom.
            </p>

            <div className="footer-socials">
              <a href="#" aria-label="Facebook"><FiFacebook /></a>
              <a href="#" aria-label="Instagram"><FiInstagram /></a>
              <a href="#" aria-label="Twitter"><FiTwitter /></a>
            </div>
          </div>

          <div className="footer-column">
            <h3>Quick Links</h3>
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Us</Link>
          </div>

          <div className="footer-column">
            <h3>Categories</h3>
            <Link to="/shop?category=Beds">Beds</Link>
            <Link to="/shop?category=Wardrobes">Wardrobes</Link>
            <Link to="/shop?category=Mattresses">Mattresses</Link>
            <Link to="/shop?category=Sofas">Sofas</Link>
            <Link to="/shop?category=Bunk Beds">Bunk Beds</Link>
          </div>

          <div className="footer-column">
            <h3>Customer Support</h3>
            <Link to="/delivery">Delivery Information</Link>
            <Link to="/returns">Returns & Refunds</Link>
            <Link to="/faq">Frequently Asked Questions</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms">Terms & Conditions</Link>
          </div>

          <div className="footer-contact">
            <h3>Get In Touch</h3>

            <div className="footer-contact-item">
              <FiMapPin />
              <span>United Kingdom</span>
            </div>

            <div className="footer-contact-item">
              <FiPhone />
              <span>Contact us for assistance</span>
            </div>

            <div className="footer-contact-item">
              <FiMail />
              <span>support@interiorfurnitureuk.com</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} INTERIOR FURNITURE UK. All Rights Reserved.
          </p>

          <div className="footer-bottom-links">
            <Link to="/privacy-policy">Privacy</Link>
            <Link to="/terms">Terms</Link>
          </div>

          <span className="footer-payment-text">
            Secure Shopping · UK Delivery
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
