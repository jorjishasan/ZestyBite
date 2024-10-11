import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CartHover = () => {
  const cartItems = useSelector((state) => state.cart);

  const totalAmount = cartItems.reduce(
    (total, item) => total + (item.price || item.defaultPrice) * item.quantity,
    0,
  );

  return (
    <div className="w-64 rounded-md bg-white py-4 shadow-lg">
      <hr />
      <div className="p-4">
        {cartItems.map((item) => (
          <div key={item.id} className="mb-2 flex items-center justify-between">
            <div className="flex items-center">
              <span className="mr-2 text-gray-600">🛒</span>
              <span>{item.name}</span>
            </div>
            <div>
              <span>{item.quantity}x</span>
              <span className="ml-2">
                ₹
                {Math.round(
                  ((item.price || item.defaultPrice) * item.quantity) / 100,
                )}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-gray-200 p-4">
        <Link
          to="/cart"
          className="block w-full rounded-md bg-orange-500 py-2 text-center text-white transition duration-300 hover:bg-orange-600"
        >
          Checkout ₹{Math.round(totalAmount / 100)}
        </Link>
      </div>
    </div>
  );
};

export default CartHover;
