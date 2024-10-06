import { useSelector } from "react-redux";
import RestaurantCard from "./RestaurantCard";

const RestaurantChains = () => {
  const restaurantChains = useSelector(
    (state) =>
      state.restaurants.restaurantChains?.card?.card?.gridElements
        ?.infoWithStyle?.restaurants,
  );
  return (
    <div>
      <h2 className="text-2xl font-bold">
        Restaurants with online food delivery in Bangalore
      </h2>
      <div>
        {restaurantChains.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resInfo={restaurant.info} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantChains;
