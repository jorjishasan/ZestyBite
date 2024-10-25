import { Link } from "react-router-dom";
import brandIcon from "../assets/logo.svg";
import locationIcon from "../assets/location-pin.svg";

const LeftHeader = () => {
  return (
    <div className="flex items-center">
      <Link to="/">
        <img
          src={brandIcon}
          alt="Brand Logo"
          className="sm:w-13 sm:h-13 h-10 w-10"
        />
      </Link>
      <div className="invisible ml-2 flex items-center text-gray-600 sm:visible sm:ml-4">
        <img
          src={locationIcon}
          alt="Location Icon"
          className="-mt-1 mr-1 w-4 sm:w-5"
        />
        <span className="text-xs sm:text-sm">Rajshahi</span>
        <Link
          to="/"
          className="ml-1 text-xs text-orange-500 underline sm:text-sm"
        >
          Change Location
        </Link>
      </div>
    </div>
  );
};

export default LeftHeader;
