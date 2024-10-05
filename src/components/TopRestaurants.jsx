import { useRef } from "react";
import useScrollControl from "../hooks/useScrollControl";
import ScrollButtons from "./ScrollButtons";
import { useSelector } from "react-redux";
import RestaurantCard from "./RestaurantCard";

const TopRestaurants = () => {
  const scrollContainerRef = useRef(null);
  const { canScrollLeft, canScrollRight, scroll } =
    useScrollControl(scrollContainerRef);
  const topRestaurants = useSelector(
    (state) =>
      state.restaurants.topRestaurants?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
  );
  return (
    <div className="my-10">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-bold">
          Top restaurant chains in Rajshahi
        </h2>
        <ScrollButtons
          onScrollLeft={() => scroll("left")}
          onScrollRight={() => scroll("right")}
          canScrollLeft={canScrollLeft}
          canScrollRight={canScrollRight}
        />
      </div>
      <div
        ref={scrollContainerRef}
        className="hide-scrollbar flex gap-4 overflow-x-auto"
      >
        {topRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resInfo={restaurant.info} />
        ))}
      </div>
      <hr className="mx-auto my-8 h-[3px] max-w-6xl bg-gray-100/10" />
    </div>
  );
};

export default TopRestaurants;
