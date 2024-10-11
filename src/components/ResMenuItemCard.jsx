/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/cartSlice";
import { RESTAURANT_CARD_IMAGE_URL } from "../utils/constant";
import addCartIcon from "../assets/addToCart.svg";
import addedCartIcon from "../assets/addedToCart.svg";
// Make sure this path is correct

const ResMenuItemCard = ({ item }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  const isInCart = cartItems.some((cartItem) => cartItem.id === item.id);

  const handleToggleCart = () => {
    if (isInCart) {
      dispatch(removeFromCart(item.id));
    } else {
      dispatch(addToCart(item));
    }
  };

  return (
    <div
      className={`transition-border mb-4 flex w-[380px] items-center justify-between rounded-lg border p-4 shadow-lg duration-100 ${
        isInCart ? "border-green-400" : "border-gray-200"
      }`}
    >
      <div className="flex-grow">
        <h3 className="mb-2 text-lg font-semibold">{item.name}</h3>
        <p className="ellipse mb-2 line-clamp-2 text-sm text-gray-600">
          {item.description}
        </p>
        <p className="font-bold">
          ₹ {Math.floor((item.price || item.defaultPrice) / 100)}
        </p>
      </div>
      <div className="relative ml-4 flex-shrink-0 basis-1/3 rounded-lg shadow-sm">
        <img
          src={RESTAURANT_CARD_IMAGE_URL + item.imageId}
          alt={item.name}
          className="w-full rounded-lg object-cover"
        />
        <button
          className="pointer absolute bottom-0 right-0 flex w-12 rounded-tl-full bg-white"
          onClick={handleToggleCart}
        >
          <img
            src={isInCart ? addedCartIcon : addCartIcon}
            alt={isInCart ? "remove from cart" : "add to cart"}
            className="h-full w-full"
          />
        </button>
      </div>
    </div>
  );
};

export default ResMenuItemCard;
