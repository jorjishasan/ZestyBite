import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import useGetRestaurantMenu from "../hooks/useGetRestaurantMenu";

const RestaurantMenu = () => {
  const { id } = useParams();
  useGetRestaurantMenu(id);

  const { info, itemCards, offers } = useSelector(
    (state) => state.restaurantMenu,
  );

  if (!info || !itemCards) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1>{info.name}</h1>
      {offers && offers.length > 0 && (
        <div>
          <h2>Offers</h2>
          {/* Render offers */}
        </div>
      )}
      <h2>Menu</h2>
      {/* Render itemCards */}
    </div>
  );
};

export default RestaurantMenu;
