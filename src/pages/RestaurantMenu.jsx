import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import useGetRestaurantMenu from "../hooks/useGetRestaurantMenu";
import ResMenuOfferSection from "../components/ResMenuOfferSection";
import ResMenuSection from "../components/ResMenuSection";

const RestaurantMenu = () => {
  const { id } = useParams();
  useGetRestaurantMenu(id);

  const { info, itemCards, offers } = useSelector(
    (state) => state.restaurantMenu,
  );

  if (!info) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-7 text-xs text-gray-300">
        Home / Restaurant / <span className="text-gray-800">{info?.name}</span>
      </div>

      <ResMenuOfferSection offers={offers} />

      <h2 className="mb-12 mt-12 text-center text-2xl font-bold md:text-3xl">
        Restaurant Menu
      </h2>
      {itemCards && itemCards.length > 0 ? (
        itemCards.map((item, index) => (
          <ResMenuSection
            key={item.card?.card?.title || index}
            item={item}
            defaultExpanded={index === 1}
          />
        ))
      ) : (
        <p>No menu items available</p>
      )}
    </div>
  );
};

export default RestaurantMenu;
