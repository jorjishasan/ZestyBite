// Footer.jsx
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import logo from "../assets/logo.svg"; // Adjust the path as needed

import PlatformPromotion from "./PlatformPromotion";

const Footer = () => {
  const footerLinks = [
    {
      title: "Company",
      items: [
        "About",
        "Careers",
        "Team",
        "ZestyBite One",
        "ZestyBite Instamart",
        "ZestyBite Genie",
      ],
    },
    {
      title: "Contact Us",
      items: ["Help & Support", "Partner with us", "Ride with us"],
    },
    {
      title: "Legal",
      items: ["Terms & Conditions", "Cookie Policy", "Privacy Policy"],
    },
  ];

  return (
    <>
      <PlatformPromotion />
      <footer className="bg-gray-900 py-12 text-gray-400">
        <div className="container mx-auto max-w-7xl px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Logo and social links */}
            <div className="flex flex-col items-start">
              <img src={logo} alt="ZestyBite" className="mb-4 block h-8" />
              <div className="mt-4 flex space-x-4">
                {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map(
                  (Icon, index) => (
                    <a
                      key={index}
                      href="#"
                      className="text-gray-400 transition-colors hover:text-white"
                    >
                      <Icon size={20} />
                    </a>
                  ),
                )}
              </div>
            </div>

            {/* Footer links */}
            {footerLinks.map((section, index) => (
              <div key={index}>
                <h3 className="mb-4 text-lg font-semibold text-white">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <a
                        href="#"
                        className="transition-colors hover:text-white"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* copyright */}
          <div className="">
            <p className="mt-12 flex flex-col items-center justify-center space-y-4 border-t border-gray-700 pt-8 text-sm">
              &copy; 2024 ZestyBite. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
