import React, { useState, useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import foodLogo from "../../../../public/images/food_logo.png";
import { FaShoppingCart } from "react-icons/fa";
import useOnline from "../hooks/useOnline";
import UserContext from "../context/userContext";
import { MdClose, MdEdit } from "react-icons/md";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [newUsername, setNewUsername] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const isOnline = useOnline();
  const { loggedInUser, setUserName } = useContext(UserContext);

  const handleUpdateUser = () => {
    if (newUsername.trim() !== "") {
      setUserName(newUsername);
      setEditMode(false);
      setNewUsername("");
    }
  };

  return (
    <div className="w-full flex justify-between items-center px-[16px] py-[8px] bg-[#f18500] shadow-[0_-6px_10px_5px_rgba(0,0,0,0.5)] fixed top-0 z-[1000] h-[80px]">
      <div className="w-[60px] h-[60px] cursor-pointer">
        <Link to="/">
          <img
            className="w-14 h-14 rounded-full cursor-pointer"
            src={foodLogo}
            alt="Food Logo"
          />
        </Link>
      </div>
      <div className="text-white">{isOnline ? "✅ Online" : "🔴 Offline"}</div>

      <div className="text-white flex items-center gap-2 relative">
        {loggedInUser || ""}
        {isLoggedIn && (
          <button
            onClick={() => setEditMode(!editMode)}
            className="text-white hover:text-gray-200"
          >
            <MdEdit />
          </button>
        )}
        {editMode && (
          <div className="absolute top-[40px] right-0 bg-white text-black p-4 rounded-lg shadow-lg z-50 flex flex-col items-center">
            <button
              className="self-end mb-2 text-gray-600 hover:text-black"
              onClick={() => setEditMode(false)}
            >
              <MdClose />
            </button>

            <input
              type="text"
              placeholder="Enter Username"
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}
              className="border border-gray-400 p-2 rounded mb-2 w-[180px]"
            />
            <button
              onClick={handleUpdateUser}
              className="bg-[#f18500] text-white px-4 py-2 rounded hover:bg-[#e07000] w-full"
            >
              Submit
            </button>
          </div>
        )}
      </div>

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
