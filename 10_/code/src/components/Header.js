import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import FoodLogo from "../../../../public/images/food_logo.png";
import { FaShoppingCart } from "react-icons/fa";
import useOnline from "../utils/useOnline";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const isOnline = useOnline();
  return (
    <div className="w-full flex justify-between items-center px-[16px] py-[8px] bg-[#f18500] shadow-[0_-6px_10px_5px_rgba(0,0,0,0.5)] fixed top-0 z-[1000] h-[80px]">
      <div className="w-[60px] h-[60px] cursor-pointer">
        <Link to="/">
          <img
            className="w-14 h-14 rounded-full cursor-pointer"
            src={FoodLogo}
            alt="Food Logo"
          />
        </Link>
      </div>
      <div className="text-white">{isOnline ? "✅ Online" : "🔴 Offline"}</div>
      <div className="flex">
        <Link
          className={`text-white text-[1.2em] font-medium px-[16px] py-[8px] hover:underline ${
            location.pathname === "/" ? "underline" : ""
          }`}
          to="/"
        >
          Home
        </Link>

        <Link
          className={`text-white text-[1.2em] font-medium  px-[16px] py-[8px] hover:underline ${
            location.pathname === "/about" ? "underline" : ""
          }`}
          to="/about"
        >
          About Us
        </Link>

        <Link
          className={`text-white text-[1.2em] font-medium px-[16px] py-[8px] hover:underline ${
            location.pathname === "/contact" ? "underline" : ""
          }`}
          to="/contact"
        >
          Contact Us
        </Link>

        <Link
          className={`text-[#fff] text-[1.2em] font-medium px-[16px] py-[8px] hover:underline`}
          to="/"
        >
          <FaShoppingCart />
        </Link>

        {isLoggedIn ? (
          <button
            className="w-[80px] border-2 border-white text-white text-[16px] font-medium px-[10px] py-0 rounded-[10px] hover:text-[#f18500] hover:bg-white transition"
            onClick={() => {
              setIsLoggedIn(false);
              navigate("/login");
            }}
          >
            Logout
          </button>
        ) : (
          <button
            className="w-[80px] border-2 border-white text-white text-[16px] font-medium px-[10px] py-0 rounded-[10px] hover:text-[#f18500] hover:bg-white transition"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
