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
    <Link
      to={"/restaurants/" + id}
      className="w-[300px] h-[380px] bg-white rounded-[8px] shadow-md cursor-pointer overflow-hidden hover:scale-[0.99]"
    >
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

// Higher Order Component (HOC) for RestaurantCard with discount
// Input - RestaurantCard
// Output - RestaurantCard with discount offer if available else normal RestaurantCard
export const withDiscountOffer = (RestaurantCard) => {
  return (props) => {
    const { aggregatedDiscountInfoV3 } = props.restaurantData;

    return (
      <div
        className="w-[300px] h-[380px] bg-white rounded-[8px] shadow-md cursor-pointer overflow-hidden hover:scale-[0.99]"
        style={{ position: "relative" }}
      >
        {aggregatedDiscountInfoV3 && (
          <div className="py-[4px] px-[8px] rounded-md text-white bg-black text-[12px] font-[600] absolute top-[2px] left-[2px]">{`${
            aggregatedDiscountInfoV3.header || ""
          } ${aggregatedDiscountInfoV3.subHeader || ""}`}</div>
        )}
        <RestaurantCard {...props} />
      </div>
    );
  };
};
