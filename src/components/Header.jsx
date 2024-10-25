import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import LeftHeader from "./LeftHeader";
import RightHeader from "./RightHeader";
import CartHover from "./CartHover";
import useCartHover from "../hooks/useCartHover";

const Header = () => {
  const location = useLocation();
  const isCartPage = location.pathname.includes("/cart");

  const cartItems = useSelector((state) => state.cart);
  const cartItemCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  const {
    isCartHovered,
    cartPosition,
    handleCartHover,
    clearCartHoverTimeout,
    cartHoverRef,
  } = useCartHover();

  // Only show CartHover if we're not on the cart page AND the cart is being hovered
  const showCartHover = !isCartPage && isCartHovered;

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-[0_15px_40px_-20px_rgba(40,44,63,0.15)]">
      <nav className="flex justify-center px-4 sm:px-6 lg:px-8">
        <div className="flex w-full max-w-7xl items-center justify-between py-3">
          <LeftHeader />
          <RightHeader
            cartItemCount={cartItemCount}
            handleCartHover={handleCartHover}
          />
        </div>
      </nav>
      {showCartHover && (
        <div
          ref={cartHoverRef}
          style={{
            position: "absolute",
            ...cartPosition,
            zIndex: 60,
          }}
          onMouseEnter={() => clearCartHoverTimeout()}
          onMouseLeave={() => handleCartHover(null, false)}
        >
          <CartHover />
        </div>
      )}
    </header>
  );
};

export default Header;
