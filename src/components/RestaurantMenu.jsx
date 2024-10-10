/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import useGetRestaurantMenu from "../hooks/useGetRestaurantMenu";
import useScrollControl from "../hooks/useScrollControl";
import ScrollButtons from "./ScrollButtons";
import { useRef } from "react";
import { RESTAURANT_CARD_IMAGE_URL } from "../utils/constant";
import findNestedProp from "../utils/findNestedProps";

const RestaurantMenu = () => {
  const scrollContainerRef = useRef(null);
  const { canScrollLeft, canScrollRight, scroll } =
    useScrollControl(scrollContainerRef);

  const { id } = useParams();
  useGetRestaurantMenu(id);

  const { info, itemCards, offers } = useSelector(
    (state) => state.restaurantMenu,
  );

  console.log("ItemCards: ", itemCards);

  if (!info) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-7 text-xs text-gray-300">
        Home / Restaurant / <span className="text-gray-800">{info?.name}</span>
      </div>
      <div>
        <h2 className="mb-6 text-2xl font-bold">Deals For You</h2>
        <div
          ref={scrollContainerRef}
          className="hide-scrollbar mb-4 flex gap-2 overflow-x-auto"
        >
          {offers &&
            offers.length > 0 &&
            offers.map((offer, index) => (
              <OfferCard key={index} offer={offer} />
            ))}
        </div>
        <ScrollButtons
          onScrollLeft={() => scroll("left")}
          onScrollRight={() => scroll("right")}
          canScrollLeft={canScrollLeft}
          canScrollRight={canScrollRight}
        />
      </div>

      <h2>Menu</h2>
      {itemCards && itemCards.length > 0 ? (
        itemCards.map((item, index) => (
          <div key={index} className="flex-wrap gap-4">
            <h3>{findNestedProp(item, "title")}</h3>
            <div className="flex flex-wrap gap-4">
              {findNestedProp(item, "itemCards").map((cuisine) => (
                <MenuItem
                  key={cuisine.id}
                  item={findNestedProp(cuisine, "info")}
                />
              ))}
            </div>
          </div>
        ))
      ) : (
        <p>No menu items available</p>
      )}
    </div>
  );
};

const OfferCard = ({ offer }) => {
  return (
    <div className="flex w-[400px] items-center justify-center gap-3 rounded-3xl border-2 border-gray-300 p-4">
      <div className="h-16 w-16">
        <img
          className="h-full w-full"
          src={RESTAURANT_CARD_IMAGE_URL + offer?.info?.offerLogo}
          alt="offer"
        />
      </div>
      <div>
        <h3 className="text-nowrap text-lg font-bold">{offer?.info?.header}</h3>
        <div className="truncate text-gray-400">{offer?.info?.description}</div>
      </div>
    </div>
  );
};

const MenuItem = ({ item }) => {
  return (
    <div className="mb-4 flex w-[400px] items-center justify-between rounded-lg border p-4 shadow-sm">
      <div className="flex-grow">
        <h3 className="mb-2 text-lg font-semibold">{item.name}</h3>
        <p className="ellipse mb-2 text-sm text-gray-600">{item.description}</p>
        <p className="font-bold">₹ {item.price / 100}</p>
      </div>
      <div className="relative ml-4 flex-shrink-0">
        <img
          src={RESTAURANT_CARD_IMAGE_URL + item.imageId}
          alt={item.name}
          className="h-24 w-24 rounded-lg object-cover"
        />
        <button className="absolute bottom-2 right-2 flex h-8 w-8 items-center justify-center rounded-full bg-white font-bold text-green-600 shadow-md">
          +
        </button>
      </div>
    </div>
  );
};

export default RestaurantMenu;
