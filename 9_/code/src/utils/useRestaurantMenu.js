import React, { useEffect, useState } from "react";
import { FETCH_MENU_URL } from "../../../../assets/constant";
import { UpdatedDummyMenus } from "./hardcodeData.js";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  // fetch info
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(FETCH_MENU_URL + resId);
      const json = await data.json();
      setResInfo(json?.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setResInfo(UpdatedDummyMenus[resId]);
    }
  };

  return resInfo;
};

export default useRestaurantMenu;
