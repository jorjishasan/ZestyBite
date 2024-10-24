import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRestaurantsData } from "../redux/restaurantsSlice";
import mockData from "../mocks/mockdata.json";
import { SWIGGY_API_URL } from "../utils/constant";

const useRestaurantData = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  // Access the current state of restaurants
  const restaurants = useSelector((state) => state.restaurants);

  useEffect(() => {
    const fetchData = async () => {
      // Check if data is already present
      if (
        restaurants.foodCategory &&
        restaurants.topRestaurants &&
        restaurants.restaurantChains
      ) {
        setIsLoading(false);
        return;
      }

      try {
        const response = await fetch(SWIGGY_API_URL);
        const json = await response.json();
        dispatch(setRestaurantsData(json?.data || mockData?.data));
      } catch (error) {
        console.error("Failed to fetch data:", error);
        dispatch(setRestaurantsData(mockData?.data));
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [dispatch, restaurants]);

  return { isLoading };
};

export default useRestaurantData;
