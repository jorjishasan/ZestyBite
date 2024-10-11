/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../redux/cartSlice";
import removeIcon from "../assets/trash.svg";
import incrementIcon from "../assets/plus.svg";
import decrementIcon from "../assets/minus.svg";
import { RESTAURANT_CARD_IMAGE_URL } from "../utils/constant";
const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementQuantity(item.id));
  };

  const handleDecrement = () => {
    dispatch(decrementQuantity(item.id));
  };

  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
  };

  return (
    <div className="flex w-full items-center justify-between gap-5 border-b p-4">
      <div className="flex basis-9/12 items-center space-x-4">
        <img
          src={RESTAURANT_CARD_IMAGE_URL + item.imageId}
          alt={item.name}
          className="h-24 w-24 rounded object-cover"
        />
        <div>
          <h3 className="line-clamp-1 text-lg font-semibold">{item.name}</h3>
          <p className="text-gray-500">{item.category}</p>
          <div className="flex items-center space-x-2">
            <span className="text-gray-400 line-through">
              ₹{Math.round((item.price || item.defaultPrice) / 100 + 100)}
            </span>
            <span className="text-lg font-bold">
              ₹{Math.round((item.price || item.defaultPrice) / 100)}
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <button onClick={handleDecrement} className="rounded bg-gray-200 p-1">
          <img src={decrementIcon} alt="Decrease" className="h-4 w-4" />
        </button>
        <span className="text-lg font-semibold">{item.quantity}</span>
        <button onClick={handleIncrement} className="rounded bg-gray-200 p-1">
          <img src={incrementIcon} alt="Increase" className="h-4 w-4" />
        </button>
        <button onClick={handleRemove} className="ml-4 rounded bg-gray-200 p-1">
          <img src={removeIcon} alt="Remove" className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
