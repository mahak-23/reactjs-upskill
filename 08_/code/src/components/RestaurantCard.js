import React from "react";
import { Link } from "react-router-dom";
import { IMG_CDN_URL } from "../../../../assets/constant";

const RestaurantCard = ({ restaurantData }) => {
  const {
    id,
    cloudinaryImageId,
    name,
    areaName,
    avgRating,
    cuisines,
    costForTwo,
    sla,
  } = restaurantData;
  return (
    <Link to={"/restaurants/" + id} className="restaurant-card">
      {" "}
      <img
        src={IMG_CDN_URL + cloudinaryImageId}
        alt={name}
        className="restaurant-logo"
      />
      <div className="restaurant-details">
        <h3 className="restaurant-name" title={name}>
          {name}
        </h3>
        <div className="esa-rating">
          <h4 className="rating">⭐{avgRating}</h4>
          <h4 className="rating"> 🏷️{costForTwo}</h4>
          <h4 className="rating">🕒{sla?.slaString}</h4>
        </div>
        <p className="cousine">
          🍽️
          {cuisines.join(", ")}
        </p>
        <p className="location"> 📍{areaName}</p>
      </div>
    </Link>
  );
};

export default RestaurantCard;
