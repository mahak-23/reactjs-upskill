import React from "react";
import { DummyRestaurantList} from "../../../../assets/constant";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  return (
    <div className="body">
      <div className="search-box">
        <input placeholder="Search Restaurant..." title="Search Restaurant" />
        <span className="search-icon">🔍</span>
      </div>

      <div className="restaurant-container">
        {DummyRestaurantList.map((restaurant) => (
          <RestaurantCard restaurantData={restaurant.data} />
        ))}
      </div>
    </div>
  );
};

export default Body;
