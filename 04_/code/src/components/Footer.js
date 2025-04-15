import React from "react";

const Footer = () => {
  const currentYear = () => {
    const date = new Date();
    return date.getFullYear();
  };
  return (
    <div className="footer">
      Created By<span>❤️</span>
      <a href="https://www.linkedin.com/in/mahak-k-100971232/" target="_blank">
        Mahak Kushwaha
      </a>
      <span>©</span>
      {currentYear()}
      <span className="app-name">Dine Out</span>
    </div>
  );
};

export default Footer;
