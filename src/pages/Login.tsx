import React, { useState } from "react";
import "../Login.css";
import justBalanceLogo from "../assets/justBalanced2.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Redirect after successful login

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(""); // Clear previous errors
    try {
      const response = await axios.post(
        "https://test.just-balance.us/api/auth/login",
        {
          email,
          password,
        }
      );

      if (response.status === 200) {
        console.log("Login successful:", response.data);
        localStorage.setItem("token", response.data.token); // Store token for authentication
        navigate("/dashboard"); // Redirect to dashboard
      }
    } catch (error) {
      setError("Invalid email or password. Please try again.");
      console.error("Login error:", error);
    }
  };
  return (
    <>
      <div className="centered overlay">
        <div className="centered mediumbox2">
          <span>
            <img
              src={justBalanceLogo}
              className="logo"
              alt="JustBalance Logo"
            />
          </span>

          <form className="login-form absolute-center" onSubmit={handleSubmit}>
            <h2>Login</h2>
            {error && <p className="error-message">{error}</p>}{" "}
            {/* Display error message */}
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Sign In</button>
            <p className="signup-link">
              Don't have an account?{" "}
              <CustomLink to="/signup">Sign Up</CustomLink>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

function CustomLink({ to, children, ...props }) {
  const path = window.location.pathname;

  return (
    <li className={path === to ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default Login;
