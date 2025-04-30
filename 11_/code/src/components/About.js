import React, { Component } from "react";
import foodImg from "../../../../public/images/food_logo.png";
import ToggleSwitch from "./_common/ToggleSwitch";
import User from "./User";
import UserContext from "../context/userContext";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showProfile: false,
    };
  }

  render() {
    const { showProfile } = this.state;

    return (
      <div className="min-h-[calc(100vh-139px)] flex flex-col items-center bg-[#f1f1f1]">
        <div className="flex flex-col items-center gap-[40px] pt-[20px] mb-[60px] w-[90%]">
          <div className="flex items-center gap-[20px]">
            <h3 className="text-[20px] font-bold">Show My Profile</h3>
            <ToggleSwitch
              value={showProfile}
              onChange={() => {
                this.setState({ showProfile: !showProfile });
              }}
            />
          </div>
          {showProfile && <User />}
        </div>
        <div className="flex flex-wrap justify-center items-center gap-[40px] mb-[50px] w-[90%]">
          <div className="about-left">
            <h1 className="text-[50px] font-bold leading-[70px]">
              <UserContext.Consumer>
                {(data) => (
                  <div className="truncate">Hi, {data.loggedInUser || ""}</div>
                )}
              </UserContext.Consumer>
              Welcome to <br /> The world of <br />{" "}
              <span className="text-[#ff8c00]">Tasty & Fresh Food</span>
            </h1>
            <h4 className="text-[22px] pt-[10px] italic font-semibold">
              "Better you will feel if you eat a{" "}
              <span className="text-[#ff8c00]">Dine Out's</span> healthy meal"
            </h4>
          </div>
          <div className="about-right">
            <img
              className="w-[450px]"
              src={foodImg}
              alt="Food Image"
              rel="icon"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
