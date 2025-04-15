import React from "react";

const Shimmer = ({ type = "card", count = 4 }) => {
  if (type === "menu") {
    return (
      <div className="menu-container">
        <div className="menu">
          <div className="restaurant-header shimmer-element"></div>
          {Array(count)
            .fill(null)
            .map((_, index) => (
              <div className="menu-items" key={index}>
                <div className="left">
                  <div className="shimmer-element shimmer-title"></div>
                  <div className="shimmer-element shimmer-subtitle"></div>
                  <div className="shimmer-element shimmer-description"></div>
                  <div className="shimmer-element shimmer-rating"></div>
                </div>
                <div className="right">
                  <div className="shimmer-element shimmer-image"></div>
                  <div className="shimmer-element shimmer-btn"></div>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  }

  // Default: Card list shimmer
  return (
    <div className="body">
      <div className="search-box shimmer-element"></div>
      <div className="restaurant-container">
        {Array(count)
          .fill(null)
          .map((_, index) => (
            <div className="restaurant-card shimmer-element" key={index}></div>
          ))}
      </div>
    </div>
  );
};

export default Shimmer;
