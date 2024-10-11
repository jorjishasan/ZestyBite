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
  } = useCartHover();

  return (
    <div className="w-full bg-white shadow-[0_15px_40px_-20px_rgba(40,44,63,0.15)]">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          <LeftHeader />
          <RightHeader
            cartItemCount={cartItemCount}
            handleCartHover={isCartPage ? null : handleCartHover}
          />
        </div>
      </nav>
      {!isCartPage && isCartHovered && (
        <div
          style={{
            position: "absolute",
            top: `${cartPosition.top}px`,
            left: `${cartPosition.left}px`,
            zIndex: 50,
          }}
          onMouseEnter={clearCartHoverTimeout}
          onMouseLeave={() => handleCartHover(null, false)}
        >
          <CartHover />
        </div>
      )}
    </div>
  );
};

export default Header;
