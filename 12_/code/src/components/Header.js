import React, { useState, useContext, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import useOnline from "../hooks/useOnline";
import UserContext from "../context/userContext";

// import foodLogo from "../../../../public/images/food_logo.png";
const foodLogo = "https://i.ibb.co/xtjxxVQ2/food-logo.png"
import { FaShoppingCart } from "react-icons/fa";
import { MdClose, MdEdit, MdKeyboardArrowDown } from "react-icons/md";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [newUsername, setNewUsername] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const isOnline = useOnline();
  const { loggedInUser, setUserName } = useContext(UserContext);

  // subscribing to the store using selector
  const totalItems = useSelector((store) => store.cart.totalItems);

  const dropdownRef = useRef();

  const handleUpdateUser = () => {
    if (newUsername.trim() !== "") {
      setUserName(newUsername);
      setEditMode(false);
      setDropdownOpen(false);
      setNewUsername("");
    }
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full flex justify-between items-center px-[16px] py-[8px] bg-[#f18500] shadow-[0_-6px_10px_5px_rgba(0,0,0,0.5)] fixed top-0 z-[1000] h-[80px]">
      {/* Logo */}
      <div className="w-[60px] h-[60px] cursor-pointer">
        <Link to="/">
          <img
            className="w-14 h-14 rounded-full cursor-pointer"
            src={foodLogo}
            alt="Food Logo"
          />
        </Link>
      </div>

      {/* Online Status */}
      <div className="text-white">{isOnline ? "✅ Online" : "🔴 Offline"}</div>

      {/* Navigation Links + Cart */}
      <div className="flex items-center gap-8">
        <Link
          className={`relative text-white text-[1.2rem] font-medium transition-all after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-white after:w-0 hover:after:w-full after:transition-all after:duration-300 ${
            location.pathname === "/" ? "after:w-full" : ""
          }`}
          to="/"
        >
          Home
        </Link>

        <Link
          className={`relative text-white text-[1.2rem] font-medium transition-all after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-white after:w-0 hover:after:w-full after:transition-all after:duration-300 ${
            location.pathname === "/about" ? "after:w-full" : ""
          }`}
          to="/about"
        >
          About Us
        </Link>

        <Link
          className={`relative text-white text-[1.2rem] font-medium transition-all after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-white after:w-0 hover:after:w-full after:transition-all after:duration-300 ${
            location.pathname === "/contact" ? "after:w-full" : ""
          }`}
          to="/contact"
        >
          Contact Us
        </Link>

        <Link
          to="/cart"
          className="relative flex items-center justify-center text-white text-[1rem] font-medium hover:opacity-80 transition-all"
        >
          <FaShoppingCart size={20} />
          {totalItems !== 0 && (
            <span className="absolute -top-[15] -right-[15] bg-red-600 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full">
              {totalItems}
            </span>
          )}
        </Link>

        {/* User Profile with Dropdown */}
        <div className="relative ml-4" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen((prev) => !prev)}
            className="flex items-center gap-2 bg-white text-[#f18500] font-semibold px-4 py-2 rounded-full hover:bg-gray-100 transition-all"
          >
            <span className="max-w-[100px] truncate">
              {loggedInUser || "Profile"}
            </span>
            <MdKeyboardArrowDown size={20} />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg z-50 overflow-hidden">
              <button
                className="w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-100"
                onClick={() => {
                  setEditMode(true);
                  setDropdownOpen(false);
                }}
              >
                Edit Profile
              </button>
              <button
                className="w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-100"
                onClick={() => {
                  setIsLoggedIn(false);
                  navigate("/login");
                  setDropdownOpen(false);
                }}
              >
                Logout
              </button>
            </div>
          )}

          {editMode && (
            <div className="absolute right-0 mt-2 w-[250px] bg-white p-5 rounded-lg shadow-lg z-50 flex flex-col items-center">
              <div className="flex items-center justify-between w-full mb-4">
                <h3 className="font-bold text-lg text-[#333]">Edit Username</h3>
                <button
                  className="text-gray-500 hover:text-black"
                  onClick={() => setEditMode(false)}
                >
                  <MdClose size={24} />
                </button>
              </div>
              <input
                type="text"
                placeholder="New Username"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
                className="w-full border border-gray-300 rounded p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-[#f18500]"
              />
              <button
                onClick={handleUpdateUser}
                className="bg-[#f18500] hover:bg-[#e07000] text-white font-semibold py-2 w-full rounded transition-all"
              >
                Save
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
