import React from "react";
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
    <div className="restaurant-card" key={id}>
      <img
        src={IMG_CDN_URL + cloudinaryImageId}
        alt={name}
        className="restaurant-logo"
      />
      <div className="restaurant-details">
        <h3 className="restaurant-name">{name}</h3>
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
    </div>
  );
};

export default RestaurantCard;
