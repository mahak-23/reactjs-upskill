import React from "react";
import { IMG_CDN_URL } from "../../../../constant";

const RestaurantCard = ({ restaurantData }) => {
  const {
    id,
    cloudinaryImageId,
    name,
    area,
    avgRating,
    cuisines,
    costForTwoString,
    deliveryTime,
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
          <h4 className="rating"> 🏷️{costForTwoString}</h4>
          <h4 className="rating">🕒{deliveryTime} mins</h4>
        </div>
        <p className="cousine">
          🍽️
          {cuisines.join(", ")}
        </p>
        <p className="location"> 📍{area}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
