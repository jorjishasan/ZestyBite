import { useSelector } from "react-redux";
import { useRef } from "react";
import { CATEGORY_API_URL } from "../utils/constant";
import useScrollControl from "../hooks/useScrollControl";
import ScrollButtons from "./ScrollButtons";

const FoodCategory = () => {
  const scrollContainerRef = useRef(null);
  const { canScrollLeft, canScrollRight, scroll } =
    useScrollControl(scrollContainerRef);
  const categories = useSelector(
    (state) => state.restaurants.foodCategory?.card?.card?.imageGridCards?.info,
  );

  if (!Array.isArray(categories) || categories.length === 0) {
    return <p>No categories available or still loading...</p>;
  }

  return (
    <div className="my-10">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-bold">What&apos;s on your mind?</h2>
        <ScrollButtons
          onScrollLeft={() => scroll("left")}
          onScrollRight={() => scroll("right")}
          canScrollLeft={canScrollLeft}
          canScrollRight={canScrollRight}
        />
      </div>
      <div
        ref={scrollContainerRef}
        className="hide-scrollbar flex overflow-x-auto p-4"
      >
        {categories.map((category) => (
          <img
            src={CATEGORY_API_URL + category.imageId}
            key={category.id}
            alt={category.action?.text || "Food category"}
            className="mr-4 w-28 flex-shrink-0 object-cover sm:w-36"
          />
        ))}
      </div>
      <hr className="mx-auto my-8 h-[3px] max-w-6xl bg-gray-100/10" />
    </div>
  );
};

export default FoodCategory;
