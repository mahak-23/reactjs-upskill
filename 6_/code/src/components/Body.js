import React, { useEffect, useState } from "react";
import {
  SWIGGY_API_URL,
  DummyRestaurantList,
} from "../../../../assets/constant.js";

// child components
import RestaurantCard from "./RestaurantCard";
import ShimmerUI from "./ShimmerUI";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [loader, setLoader] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchData = async () => {
    try {
      setLoader(true);
      const response = await fetch(SWIGGY_API_URL);
      const json = await response.json();

      const restaurants =
        json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];

      setRestaurantList(restaurants);
      setFilteredRestaurants(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
      setRestaurantList(DummyRestaurantList);
      setFilteredRestaurants(DummyRestaurantList);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearchValue = (e) => {
    setSearchTerm(e.target.value);
  };

  const filterRestaurants = () =>
    restaurantList.filter(
      (rest) =>
        rest.data.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        rest.data.area.toLowerCase().includes(searchTerm.toLowerCase()) ||
        rest.data.cuisines
          .join(", ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
    );

  const handleSearch = () => {
    const filteredData = filterRestaurants();
    setFilteredRestaurants(filteredData);
  };

  const clearSearch = () => {
    setSearchTerm("");
    setFilteredRestaurants(restaurantList);
  };

  return loader ? (
    <ShimmerUI />
  ) : (
    <div className="body">
      <div className="search-box">
        <input
          value={searchTerm}
          onChange={handleSearchValue}
          placeholder="Search Restaurant..."
          title="Search Restaurant"
        />
        {searchTerm && (
          <span className="search-icon" onClick={clearSearch}>
            ✖
          </span>
        )}
        <span className="search-icon" onClick={handleSearch}>
          🔍
        </span>
      </div>

      <div className="restaurant-container">
        {restaurantList.length > 0 ? (
          filteredRestaurants.length > 0 ? (
            filteredRestaurants.map((restaurant) => (
              <RestaurantCard
                key={restaurant.data.id}
                restaurantData={restaurant.data}
              />
            ))
          ) : (
            <div className="error">No Restaurant matches your filter!!</div>
          )
        ) : (
          <div className="error">No Restaurants Data Available</div>
        )}
      </div>
    </div>
  );
};

export default Body;
