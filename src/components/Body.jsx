import FoodCategory from "./FoodCategory";
import useRestaurantData from "../hooks/useRestaurantData";
import TopRestaurants from "./TopRestaurants";
import RestaurantChains from "./RestaurantChains";

const Body = () => {
  const { isLoading } = useRestaurantData();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="mx-auto max-w-7xl">
      <FoodCategory />
      <TopRestaurants />
      <RestaurantChains />
      {/* Add components for TopRestaurants and RestaurantChains */}
    </div>
  );
};

export default Body;