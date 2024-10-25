import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import emptyCart from "../assets/emptyCart.svg";
const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const total = cartItems.reduce(
    (acc, item) => acc + (item.price || item.defaultPrice) * item.quantity,
    0,
  );

  return cartItems.length === 0 ? (
    <div className="flex flex-col items-center justify-center px-4 py-10">
      <h2 className="mt-10 text-center text-xl font-semibold opacity-70 sm:text-2xl">
        No items in cart, eat something! 👀
      </h2>
      <img
        className="my-10 w-[200px] sm:my-20 sm:w-[300px]"
        src={emptyCart}
        alt="empty cart"
      />
    </div>
  ) : (
    <div className="mx-auto mb-20 mt-6 w-full max-w-[580px] px-4 sm:px-6 lg:px-8">
      <h2 className="mb-4 text-xl font-semibold opacity-70 sm:text-2xl">
        Cart Items
      </h2>
      <div className="space-y-4">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      <button className="mt-6 w-full rounded-md bg-orange-500 py-3 text-center text-sm font-semibold text-white sm:py-4 sm:text-base">
        CONTINUE ₹{Math.round(total / 100)}
      </button>
    </div>
  );
};

export default Cart;
