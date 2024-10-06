import { useSelector } from "react-redux";
import RestaurantCard from "./RestaurantCard";

const RestaurantChains = () => {
  const restaurantChains = useSelector(
    (state) =>
      state.restaurants.restaurantChains?.card?.card?.gridElements
        ?.infoWithStyle?.restaurants,
  );

  const topRestaurants = useSelector(
    (state) =>
      state.restaurants.topRestaurants?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
  );

  const restaurants = [...restaurantChains, ...topRestaurants];

  return (
    <div>
      <h2 className="text-2xl font-bold">
        Restaurants with online food delivery in Bangalore
      </h2>
      <div>
        {restaurants.map((restaurant, index) => (
          <RestaurantCard key={index} resInfo={restaurant.info} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantChains;
