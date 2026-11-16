
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiArrowRight,
} from "react-icons/fi";

import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <a href="/" className="footer-logo">
              INTERIOR <span>FURNITURE UK</span>
            </a>

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
            <a href="/">Home</a>
            <a href="/shop">Shop</a>
            <a href="/about">About Us</a>
            <a href="/contact">Contact Us</a>
          </div>

          <div className="footer-column">
            <h3>Categories</h3>
            <a href="/shop/beds">Beds</a>
            <a href="/shop/wardrobes">Wardrobes</a>
            <a href="/shop/mattresses">Mattresses</a>
            <a href="/shop/sofas">Sofas</a>
            <a href="/shop/bunk-beds">Bunk Beds</a>
          </div>

          <div className="footer-column">
            <h3>Customer Support</h3>
            <a href="/delivery">Delivery Information</a>
            <a href="/returns">Returns & Refunds</a>
            <a href="/faq">Frequently Asked Questions</a>
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms">Terms & Conditions</a>
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
            <a href="/privacy-policy">Privacy</a>
            <a href="/terms">Terms</a>
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
