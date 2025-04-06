import React from "react";
import FoodImg from "../../../../assets/food_logo.png";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-left">
        <h1>
          Welcome to <br /> The world of <br /> <span>Tasty & Fresh Food</span>
        </h1>
        <h4>
          "Better you will feel if you eat a <span>Dine Out's</span> healthy
          meal"
        </h4>
      </div>
      <div className="about-right">
        <img src={FoodImg} alt="Food Image" />
      </div>
    </div>
  );
};

export default About;
