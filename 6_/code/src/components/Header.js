import React, { useState } from "react";
import FoodLogo from "../../../../assets/food_logo.png";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  const [login, setLogin] = useState(false);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={FoodLogo} alt="Food Logo" />
      </div>

      <div className="nav-items">
        <span>Home</span>
        <span>About Us</span>
        <span>Contact Us</span>
        <span>
          <FaShoppingCart />
        </span>
        <button className="login" onClick={() => setLogin(!login)}>
          {login ? "Logout" : "Login"}
        </button>
      </div>
    </div>
  );
};

export default Header;
