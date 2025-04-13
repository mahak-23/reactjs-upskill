import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import FoodLogo from "../../../../assets/food_logo.png";
import { FaShoppingCart } from "react-icons/fa";
import useOnline from "../utils/useOnline";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const isOnline = useOnline();
  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/">
          <img src={FoodLogo} alt="Food Logo" />
        </Link>
      </div>
      <div style={{ color: "#fff" }}>
        {isOnline ? "✅ Online" : "🔴 Offline"}
      </div>
      <div className="nav-items">
        <Link
          className={`nav-links ${location.pathname === "/" ? "active" : ""}`}
          to="/"
        >
          Home
        </Link>

        <Link
          className={`nav-links ${
            location.pathname === "/about" ? "active" : ""
          }`}
          to="/about"
        >
          About Us
        </Link>

        <Link
          className={`nav-links ${
            location.pathname === "/contact" ? "active" : ""
          }`}
          to="/contact"
        >
          Contact Us
        </Link>

        <Link className={`nav-links `} to="/">
          <FaShoppingCart />
        </Link>

        {isLoggedIn ? (
          <button
            className="login"
            onClick={() => {
              setIsLoggedIn(false);
              navigate("/login");
            }}
          >
            Logout
          </button>
        ) : (
          <button className="login" onClick={() => navigate("/login")}>
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
