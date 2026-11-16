
import { useState } from "react";
import { FiArrowRight, FiMail } from "react-icons/fi";
import "./Newsletter.css";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setMessage("Please enter your email address.");
      return;
    }

    setMessage("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <section className="newsletter-section">
      <div className="newsletter-container">
        <div className="newsletter-content">
          <span className="newsletter-subtitle">STAY IN THE KNOW</span>

          <h2>Make Room for Inspiration</h2>

          <p>
            Subscribe to receive updates on new collections, exclusive offers
            and inspiration for your home.
          </p>

          <form className="newsletter-form" onSubmit={handleSubscribe}>
            <div className="newsletter-input-wrap">
              <FiMail />
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setMessage("");
                }}
                required
              />
            </div>

            <button type="submit">
              Subscribe <FiArrowRight />
            </button>
          </form>

          {message && <span className="newsletter-message">{message}</span>}

          <small>
            By subscribing, you agree to receive our occasional emails.
          </small>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
