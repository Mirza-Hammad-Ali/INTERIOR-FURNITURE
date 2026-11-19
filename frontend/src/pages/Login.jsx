
import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMail, FiLock, FiArrowRight } from "react-icons/fi";

import AnnouncementBar from "../components/common/AnnouncementBar";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();
    alert("Login functionality will be connected soon!");
  }

  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <main className="login-page">
        <div className="login-container">
          <div className="login-heading">
            <span>WELCOME BACK</span>
            <h1>Sign In</h1>
            <p>Sign in to access your account and enjoy shopping.</p>
          </div>

          <form className="login-form" onSubmit={handleLogin}>
            <label htmlFor="login-email">Email Address</label>

            <div className="login-input-wrap">
              <FiMail />
              <input
                id="login-email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <label htmlFor="login-password">Password</label>

            <div className="login-input-wrap">
              <FiLock />
              <input
                id="login-password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="login-options">
              <label className="remember-me">
                <input type="checkbox" />
                Remember me
              </label>

              <Link to="/forgot-password">Forgot Password?</Link>
            </div>

            <button type="submit" className="login-submit-btn">
              Sign In <FiArrowRight />
            </button>
          </form>

          <div className="login-register-link">
            Don't have an account? <Link to="/register">Create Account</Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Login;
