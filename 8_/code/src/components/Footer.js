import React from "react";
import { LINKEDIN_URL } from "../../../../assets/constant";

const Footer = () => {
  const currentYear = () => {
    const date = new Date();
    return date.getFullYear();
  };
  return (
    <div className="footer">
      Created By<span>❤️</span>
      <a href={LINKEDIN_URL} target="_blank">
        Mahak Kushwaha
      </a>
      <span>&copy;</span>
      {currentYear()}
      <span className="app-name">Dine Out</span>
    </div>
  );
};

export default Footer;
