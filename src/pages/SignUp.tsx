import React, { useState } from "react";
import "../SignUp.css";
import justBalanceLogo from "../assets/justBalanced2.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Redirect after successful signup

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError("");

    try {
      const response = await axios.post(
        "https://test.just-balance.us/api/auth/register",
        {
          firstName,
          lastName,
          email,
          password,
        }
      );

      if (response.status === 201) {
        console.log("Signup successful:", response.data);
        navigate("/dashboard"); // Redirect to login page
      }
    } catch (error) {
      setError("Signup failed. Email may already be in use.");
      console.error("Signup error:", error);
    }
  };

  return (
    <>
      <div className="centered overlay">
        <div className="centered mediumbox6">
          <span>
            <img
              src={justBalanceLogo}
              className="logo"
              alt="JustBalance Logo"
            />
          </span>

          <form className="login-form absolute-center" onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
            {error && <p className="error-message">{error}</p>}{" "}
            {/* Display error message */}
            {/* Display error message */}
            <input
              placeholder="First Name"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              placeholder="Last Name"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
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
            <input type="password" placeholder="Confirm Password" required />
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
