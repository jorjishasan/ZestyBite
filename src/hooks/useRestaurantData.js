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
  console.log("restaurants data", restaurants);

  useEffect(() => {
    const fetchData = async () => {
      // Always attempt to fetch fresh data from API
      console.log("🌐 Starting FETCH REQUEST to:", SWIGGY_API_URL);
      
      try {
        const response = await fetch(SWIGGY_API_URL);
        console.log("📡 Fetch response status:", response.status, response.statusText);
        console.log("📡 Fetch response ok:", response.ok);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const json = await response.json();
        console.log("📦 Fetched JSON response:", json);
        console.log("📦 Fetched data:", json?.data);
        
        if (json?.data) {
          console.log("✅ Restaurants data is coming from FETCH REQUEST");
          dispatch(setRestaurantsData(json.data));
        } else {
          console.log("⚠️ Restaurants data is coming from MOCK DATA (fetch returned no data)");
          dispatch(setRestaurantsData(mockData?.data));
        }
      } catch (error) {
        console.error("❌ Failed to fetch data:", error);
        console.log("⚠️ Restaurants data is coming from MOCK DATA (fetch failed)");
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
