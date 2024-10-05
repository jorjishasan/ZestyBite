import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setRestaurantsData } from "../redux/restaurantsSlice";
import { SWIGGY_API_URL } from "../utils/constant";
import mockData from "../mocks/mockdata.json";

const useRestaurantData = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
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
  }, [dispatch]);

  return { isLoading };
};

export default useRestaurantData;
