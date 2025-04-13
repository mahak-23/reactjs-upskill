import React from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../../../../assets/constant";
import Shimmer from "./ShimmerUI";
import useRestaurantMenu from "../utils/useRestaurantMenu.js";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurantInfo = useRestaurantMenu(resId);

  const {
    cloudinaryImageId,
    name,
    avgRatingString,
    totalRatingsString,
    cuisines,
    locality,
    sla,
  } = restaurantInfo?.cards[2]?.card?.card?.info || {};

  const cards =
    restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  let itemCards =
    cards.find((c) => c?.card?.card?.itemCards)?.card?.card?.itemCards || [];

  return restaurantInfo === null ? (
    <Shimmer type="menu" />
  ) : (
    <div className="menu-container">
      <div className="menu">
        <div className="restaurant-header">
          <img src={IMG_CDN_URL + cloudinaryImageId} alt={name} />
          <div className="restaurant-header-details">
            <h1>{name}</h1>
            <h3>{locality}</h3>
            <p>{cuisines?.join(", ")}</p>
            <h4 className="rating-time">
              <div className="rating">
                ⭐
                <span>
                  {avgRatingString || 3.8} (
                  {totalRatingsString || "1K+ ratings"})
                </span>
              </div>
              <span>|</span>
              <span className="time">🕒 {sla?.slaString}</span>
            </h4>
          </div>
        </div>

        {itemCards.length ? (
          itemCards.map((item) => {
            const {
              id,
              name,
              price,
              defaultPrice,
              ratings,
              imageId,
              description,
            } = item.card.info;
            return (
              <div key={id} className="menu-items">
                <div className="left">
                  <h2>{name}</h2>
                  <h4>🏷️₹{price / 100 || defaultPrice / 100}</h4>
                  <p>{(description && description.slice(0, 60)) || "Dummy"}</p>
                  <h4 className="rating">
                    ⭐
                    <span>
                      {ratings?.aggregatedRating?.rating || 3.8} (
                      {ratings?.aggregatedRating?.ratingCountV2 || 6})
                    </span>
                  </h4>
                </div>
                <div className="right">
                  <img src={IMG_CDN_URL + imageId} alt={name} />
                  <button className="add-btn">ADD</button>
                </div>
              </div>
            );
          })
        ) : (
          <h2>No items available</h2>
        )}
      </div>
    </div>
  );
};

export default RestaurantMenu;
