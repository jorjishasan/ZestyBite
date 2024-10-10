import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  setRestaurantInfo,
  setItemCards,
  setOffers,
} from "../redux/restaurantMenuSlice";
import findNestedProp from "../utils/findNestedProps";
import MOCKRESTAURANTMENU from "../mocks/mockrestaurantmenu.json";
import { RESTAURANT_MENU_API_URL } from "../utils/constant";

const useGetRestaurantMenu = (restaurantId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchRestaurantMenu = async () => {
      try {
        // Replace this with your actual API call
        const response = await fetch(RESTAURANT_MENU_API_URL + restaurantId);
        const data = await response.json();

        processMenuData(data);
      } catch (error) {
        console.error("Error fetching restaurant menu:", error);
        // Fallback to mock data
        processMenuData(MOCKRESTAURANTMENU);
      }
    };

    const processMenuData = (data) => {
      const info = findNestedProp(data, "info");
      const itemCards = findNestedProp(data, "groupedCard");
      const offers = findNestedProp(data, "offers");

      dispatch(setRestaurantInfo(info));
      dispatch(setItemCards(itemCards));
      dispatch(setOffers(offers));
    };

    fetchRestaurantMenu();
  }, [restaurantId, dispatch]);
};

export default useGetRestaurantMenu;
