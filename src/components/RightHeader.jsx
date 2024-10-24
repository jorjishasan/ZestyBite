/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import offerIcon from "../assets/offers.svg";
import helpIcon from "../assets/help.svg";
import signInIcon from "../assets/sign-in.svg";
import CartIcon from "../assets/CartIcon";

const RightHeader = ({ cartItemCount, handleCartHover }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative flex flex-nowrap items-center">
      <Link
        to="/cart"
        className="visible relative flex items-center gap-1 text-gray-600 hover:text-black lg:invisible"
      >
        <CartIcon count={cartItemCount} />
      </Link>
      <button className="p-2 lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        <FaBars className="ml-3 text-gray-600" size={24} />
      </button>
      <div
        className={`absolute right-0 top-full z-50 mt-2 w-48 flex-col gap-4 rounded-lg bg-white p-4 px-6 shadow-lg lg:w-auto ${
          menuOpen ? "flex" : "hidden"
        } lg:static lg:flex lg:flex-row lg:gap-10 lg:rounded-none lg:bg-transparent lg:p-0 lg:shadow-none`}
      >
        <Link
          to="/"
          className="relative flex items-center gap-1 text-gray-600 hover:text-black"
        >
          Home
        </Link>
        <Link
          to="/offers"
          className="relative flex items-center gap-1 text-gray-600 hover:text-black"
        >
          <img src={offerIcon} alt="Offers icon" className="h-5 w-5" />
          Offers
          <span className="-mt-3 text-[8px] font-semibold text-orange-300">
            NEW
          </span>
        </Link>
        <Link
          to="/help"
          className="relative flex items-center gap-1 text-gray-600 hover:text-black"
        >
          <img src={helpIcon} alt="Help icon" className="h-5 w-5" />
          Help
        </Link>
        <Link
          to="/signin"
          className="relative flex items-center gap-1 whitespace-nowrap text-gray-600 hover:text-black"
        >
          <img src={signInIcon} alt="Sign In icon" className="h-5 w-5" />
          Sign In
        </Link>
        <Link
          to="/cart"
          className="relative mr-4 hidden gap-1 text-gray-600 hover:text-black lg:block xl:flex"
          onMouseEnter={(e) => handleCartHover(e, true)}
          onMouseLeave={() => handleCartHover(null, false)}
        >
          <CartIcon count={cartItemCount} />
          <span className="hidden xl:inline">Cart</span>
        </Link>
      </div>
    </div>
  );
};

export default RightHeader;
