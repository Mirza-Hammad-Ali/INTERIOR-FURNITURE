import { useState } from "react";
import { Link } from "react-router-dom";
import { FiUser, FiMail, FiLock, FiArrowRight } from "react-icons/fi";

import AnnouncementBar from "../components/common/AnnouncementBar";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

import "./Register.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleRegister(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    alert("Registration functionality will be connected soon!");
  }

  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <main className="register-page">
        <div className="register-container">
          <div className="register-heading">
            <span>JOIN OUR COMMUNITY</span>
            <h1>Create Account</h1>
            <p>
              Create your account and discover beautiful furniture for your
              home.
            </p>
          </div>

          <form className="register-form" onSubmit={handleRegister}>
            <label htmlFor="register-name">Full Name</label>

            <div className="register-input-wrap">
              <FiUser />
              <input
                id="register-name"
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <label htmlFor="register-email">Email Address</label>

            <div className="register-input-wrap">
              <FiMail />
              <input
                id="register-email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <label htmlFor="register-password">Password</label>

            <div className="register-input-wrap">
              <FiLock />
              <input
                id="register-password"
                type="password"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                minLength={6}
                required
              />
            </div>

            <label htmlFor="confirm-password">Confirm Password</label>

            <div className="register-input-wrap">
              <FiLock />
              <input
                id="confirm-password"
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                minLength={6}
                required
              />
            </div>

            <button type="submit" className="register-submit-btn">
              Create Account <FiArrowRight />
            </button>
          </form>

          <div className="register-login-link">
            Already have an account? <Link to="/login">Sign In</Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Register;
