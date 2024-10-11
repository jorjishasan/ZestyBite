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
    <div className="flex flex-col items-center justify-center">
      <h2 className="mt-10 text-2xl font-semibold opacity-70">
        No items in cart, eat something! 👀
      </h2>
      <img className="my-20 w-[300px]" src={emptyCart} alt="empty cart" />
    </div>
  ) : (
    <div className="mx-auto mb-20 mt-6 w-[580px]">
      <h2 className="mb-4 text-2xl font-semibold opacity-70">Cart Items</h2>
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}

      <button className="mt-4 w-full rounded-md bg-orange-500 py-4 text-center font-semibold text-white">
        Pay ₹{Math.round(total / 100)}
      </button>
    </div>
  );
};

export default Cart;
