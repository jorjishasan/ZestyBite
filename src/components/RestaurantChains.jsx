import { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import FilterBar from "./FilterBar";

const RestaurantChains = () => {
  const [activeFilters, setActiveFilters] = useState([]);

  const restaurantChains = useSelector(
    (state) =>
      state.restaurants.restaurantChains?.card?.card?.gridElements
        ?.infoWithStyle?.restaurants || [],
  );

  const topRestaurants = useSelector(
    (state) =>
      state.restaurants.topRestaurants?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [],
  );

  const allRestaurants = useMemo(
    () => [...restaurantChains, ...topRestaurants],
    [restaurantChains, topRestaurants],
  );

  // Apply filters
  const filteredRestaurants = useMemo(() => {
    if (activeFilters.length === 0) return allRestaurants;

    return allRestaurants.filter((restaurant) => {
      const info = restaurant?.info || {};
      if (activeFilters.includes("fastDelivery") && info.sla?.deliveryTime > 30)
        return false;
      if (activeFilters.includes("ratings4Plus") && info.avgRating < 4)
        return false;
      if (activeFilters.includes("pureVeg") && !info.veg) return false;
      if (activeFilters.includes("offers") && !(info.offers?.length > 0))
        return false;
      if (
        activeFilters.includes("priceRange") &&
        (info.costForTwo < 300 || info.costForTwo > 600)
      )
        return false;
      if (activeFilters.includes("lessThan300") && info.costForTwo >= 300)
        return false;
      return true;
    });
  }, [allRestaurants, activeFilters]);

  return (
    <div>
      <h2 className="mb-4 text-2xl font-bold">
        Restaurants with online food delivery in Rajshahi (
        {filteredRestaurants.length || 0})
      </h2>
      <FilterBar
        activeFilters={activeFilters}
        setActiveFilters={setActiveFilters}
      />
      <div className="mt-4 flex flex-row flex-wrap gap-10 sm:flex-row sm:gap-16">
        {filteredRestaurants.map((restaurant, index) => (
          <Link
            key={index}
            to={`/restaurants/${restaurant.info.id}`}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5" // Adjust based on your layout needs
          >
            <RestaurantCard resInfo={restaurant.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RestaurantChains;
