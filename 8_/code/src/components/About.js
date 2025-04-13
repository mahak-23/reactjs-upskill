import React, { useState } from "react";
import FoodImg from "../../../../assets/food_logo.png";
import ToggleSwitch from "./_common/ToggleSwitch";
import User from "./User";

const About = () => {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <div className="about-wrap">
      <div className="show-profile">
        <div className="filter-item">
          <h3>Show My Profile</h3>
          <ToggleSwitch
            value={showProfile}
            onChange={() => {
              setShowProfile(!showProfile);
            }}
          />
        </div>
        {showProfile && <User />}
      </div>
      <div className="about-container">
        <div className="about-left">
          <h1>
            Welcome to <br /> The world of <br />{" "}
            <span>Tasty & Fresh Food</span>
          </h1>
          <h4>
            "Better you will feel if you eat a <span>Dine Out's</span> healthy
            meal"
          </h4>
        </div>
        <div className="about-right">
          <img src={FoodImg} alt="Food Image" rel="icon" />
        </div>
      </div>
    </div>
  );
};

export default About;
