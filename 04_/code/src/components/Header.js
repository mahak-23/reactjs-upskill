import React from "react";
import FoodLogo from "../../../../assets/food_logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={FoodLogo} alt="Food Logo" />
      </div>

      <div className="nav-items">
        <span>Home</span>
        <span>About Us</span>
        <span>Contact Us</span>
      </div>
    </div>
  );
};

export default Header;
