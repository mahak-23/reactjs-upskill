import React, { useState } from "react";
import { restaurantList } from "../../../../constant";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchValue = (e) => {
    setSearchTerm(e.target.value);
  };

  const filterRestaurants = (lists) =>
    lists.filter(
      (rest) =>
        rest.data.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        rest.data.area.toLowerCase().includes(searchTerm.toLowerCase()) ||
        rest.data.cuisines
          .join(", ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
    );

  return (
    <div className="body">
      <div className="search-box">
        <input
          value={searchTerm}
          onChange={handleSearchValue}
          placeholder="Search Restaurant..."
          title="Search Restaurant"
        />
        <span className="search-icon">🔍</span>
      </div>

      <div className="restaurant-container">
        {filterRestaurants([...restaurantList]).length > 0 ? (
          filterRestaurants([...restaurantList]).map((restaurant) => (
            <RestaurantCard restaurantData={restaurant.data} />
          ))
        ) : (
          <div className="error">No Retaurants Found</div>
        )}
      </div>
    </div>
  );
};

export default Body;
