import brandIcon from "../assets/logo.svg";
import locationIcon from "../assets/location-pin.svg";
import offerIcon from "../assets/offers.svg";
import helpIcon from "../assets/help.svg";
import signInIcon from "../assets/sign-in.svg";
import cartIcon from "../assets/cart.svg";

const Header = () => {
  const navLinks = [
    { href: "/", text: "Home" },
    { href: "/offers", text: "Offers", icon: offerIcon, badge: "NEW" },
    { href: "/help", text: "Help", icon: helpIcon },
    { href: "/signin", text: "Sign In", icon: signInIcon },
    { href: "/cart", text: "Cart", icon: cartIcon },
  ];

  return (
    <div className="w-full bg-white shadow-[0_15px_40px_-20px_rgba(40,44,63,0.15)]">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          {/* Left Side */}
          <div className="flex items-center">
            {/* Logo */}
            <img src={brandIcon} alt="Brand Logo" className="w-13 h-13" />

            {/* Location */}
            <div className="ml-4 flex items-center text-gray-600">
              <img
                src={locationIcon}
                alt="Location Icon"
                className="-mt-1 mr-1 w-5"
              />
              <span className="text-sm">Rajshahi</span>
              <a
                href="/change-location"
                className="ml-1 text-sm text-orange-500 underline"
              >
                Change Location
              </a>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-10">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="relative flex items-center gap-1 text-gray-600 hover:text-black"
              >
                {link.icon && (
                  <img
                    src={link.icon}
                    alt={`${link.text} icon`}
                    className="h-5 w-5"
                  />
                )}
                {link.text}
                {link.badge && (
                  <span className="-mt-3 text-[8px] font-semibold text-orange-300">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
