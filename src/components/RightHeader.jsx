/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import offerIcon from "../assets/offers.svg";
import helpIcon from "../assets/help.svg";
import signInIcon from "../assets/sign-in.svg";
import CartIcon from "../assets/CartIcon";

const NavLink = ({ to, text, icon, badge }) => (
  <Link
    to={to}
    className="relative flex items-center gap-1 text-gray-600 hover:text-black"
  >
    {icon &&
      (typeof icon === "string" ? (
        <img src={icon} alt={`${text} icon`} className="h-5 w-5" />
      ) : (
        icon
      ))}
    {text}
    {badge && (
      <span className="-mt-3 text-[8px] font-semibold text-orange-300">
        {badge}
      </span>
    )}
  </Link>
);

const RightHeader = ({ cartItemCount, handleCartHover }) => {
  const navLinks = [
    { to: "/", text: "Home" },
    { to: "/offers", text: "Offers", icon: offerIcon, badge: "NEW" },
    { to: "/help", text: "Help", icon: helpIcon },
    { to: "/signin", text: "Sign In", icon: signInIcon },
  ];

  return (
    <div className="flex items-center gap-10">
      {navLinks.map((link, index) => (
        <NavLink key={index} {...link} />
      ))}
      <Link
        to="/cart"
        className="relative flex items-center gap-1 text-gray-600 hover:text-black"
        onMouseEnter={(e) => handleCartHover(e, true)}
        onMouseLeave={() => handleCartHover(null, false)}
      >
        <CartIcon count={cartItemCount} />
        Cart
      </Link>
    </div>
  );
};

export default RightHeader;
