import React, { useEffect, useState } from "react";
import { SWIGGY_API_URL } from "../../../../assets/constant.js";
import { UpdatedDummy } from "../utils/hardcodeData.js";
import { IoIosClose } from "react-icons/io";

// child components
import RestaurantCard, { withDiscountOffer } from "./RestaurantCard";
import ShimmerUI from "./ShimmerUI";
import ToggleSwitch from "./_common/ToggleSwitch/index.js";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [loader, setLoader] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState(0);

  // HOC for RestaurantCard with discount offer
  const RestaurantCardWithDiscount = withDiscountOffer(RestaurantCard);

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
      debugger;
      if (
        error instanceof TypeError &&
        error.message.includes("Failed to fetch")
      ) {
        // Likely a CORS error
        alert(
          "It looks like CORS is blocking the request. Please install the 'Allow CORS' Chrome Extension and enable it."
        );
        window.open(
          "https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf",
          "_blank"
        );
      } else {
        console.error("Error fetching data:", error);
      }
      setRestaurantList(UpdatedDummy);
      setFilteredRestaurants(UpdatedDummy);
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

  const filterRestaurants = (type) =>
    type === "rating"
      ? restaurantList.filter((rest) => rest.info.avgRating > 4.3)
      : restaurantList.filter(
          (rest) =>
            rest.info.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            rest.info.areaName
              .toLowerCase()
              .includes(searchTerm.toLowerCase()) ||
            rest.info.cuisines
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
    <ShimmerUI type="card" />
  ) : (
    <div className="body">
      <div className="filters">
        <div className="search-box">
          <input
            value={searchTerm}
            onChange={handleSearchValue}
            placeholder="Search Restaurant Name, Area, Cuisines..."
            title="Search Restaurant"
          />
          {searchTerm && (
            <span className="search-icon" onClick={clearSearch}>
              <IoIosClose />
            </span>
          )}
          <span className="search-icon" onClick={handleSearch}>
            🔍
          </span>
        </div>
        <div className="filter-item">
          {" "}
          Top Rated Restaurants{" "}
          <ToggleSwitch
            value={filter}
            onChange={() => {
              setFilter(!filter);
              if (!filter) {
                setFilteredRestaurants(filterRestaurants("rating"));
              } else {
                setFilteredRestaurants(filterRestaurants());
              }
            }}
          />
        </div>
      </div>
      <div className="restaurant-container">
        {restaurantList && restaurantList.length > 0 ? (
          filteredRestaurants.length > 0 ? (
            filteredRestaurants.map((restaurant) =>
              // If restaurant has discount offer then show discount offer
              restaurant.info.aggregatedDiscountInfoV3 ? (
                <RestaurantCardWithDiscount
                  key={restaurant.info.id}
                  restaurantData={restaurant.info}
                />
              ) : (
                <RestaurantCard
                  key={restaurant.info.id}
                  restaurantData={restaurant.info}
                />
              )
            )
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
