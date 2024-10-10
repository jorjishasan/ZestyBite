/* eslint-disable react/prop-types */
import { RESTAURANT_CARD_IMAGE_URL } from "../utils/constant";
import addToCartIcon from "../assets/addToCart.png";

const ResMenuItemCard = ({ item }) => {
  return (
    <div className="mb-4 flex w-[380px] items-center justify-between rounded-lg border border-gray-200 p-4 shadow-lg">
      <div className="flex-grow">
        <h3 className="mb-2 text-lg font-semibold">{item.name}</h3>
        <p className="ellipse mb-2 line-clamp-2 text-sm text-gray-600">
          {item.description}
        </p>
        <p className="font-bold">₹ {Math.floor(item.price / 100)}</p>
      </div>
      <div className="relative ml-4 flex-shrink-0 basis-1/3 rounded-lg shadow-sm">
        <img
          src={RESTAURANT_CARD_IMAGE_URL + item.imageId}
          alt={item.name}
          className="w-full rounded-lg object-cover"
        />
        <button className="absolute bottom-0 right-0 flex w-12 rounded-tl-full bg-white">
          <img
            src={addToCartIcon}
            alt="add to cart"
            className="h-full w-full"
          />
        </button>
      </div>
    </div>
  );
};

export default ResMenuItemCard;
