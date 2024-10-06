// Footer.jsx
import logo from "../assets/logo.svg"; // Adjust the path as needed
import PlatformPromotion from "./PlatformPromotion";

const Footer = () => {
  return (
    <>
      <PlatformPromotion />
      <footer className="bg-gray-900 py-8 text-gray-500">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex flex-wrap justify-between">
            <div className="mb-6 w-full md:mb-0 md:w-1/4">
              <img src={logo} alt="Food & Furious" className="mb-4 h-8" />
              <p className="text-sm">© 2024 Bundl Technologies Pvt. Ltd</p>
            </div>

            <div className="mb-6 w-full md:mb-0 md:w-1/5">
              <h3 className="mb-4 font-semibold text-white">Company</h3>
              <ul className="space-y-2">
                {[
                  "About",
                  "Careers",
                  "Team",
                  "Swiggy One",
                  "Swiggy Instamart",
                  "Swiggy Genie",
                ].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-white">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6 w-full md:mb-0 md:w-1/5">
              <h3 className="mb-4 font-semibold text-white">Contact us</h3>
              <ul className="space-y-2">
                {["Help & Support", "Partner with us", "Ride with us"].map(
                  (item) => (
                    <li key={item}>
                      <a href="#" className="hover:text-white">
                        {item}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>

            <div className="mb-6 w-full md:mb-0 md:w-1/5">
              <h3 className="mb-4 font-semibold text-white">Legal</h3>
              <ul className="space-y-2">
                {[
                  "Terms & Conditions",
                  "Cookie Policy",
                  "Privacy Policy",
                  "Investor Relations",
                ].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-white">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
