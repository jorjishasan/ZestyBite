import { Link } from "react-router-dom";
import brandIcon from "../assets/logo.svg";
import locationIcon from "../assets/location-pin.svg";

const LeftHeader = () => {
  return (
    <div className="flex items-center">
      <img src={brandIcon} alt="Brand Logo" className="w-13 h-13" />
      <div className="ml-4 flex items-center text-gray-600">
        <img
          src={locationIcon}
          alt="Location Icon"
          className="-mt-1 mr-1 w-5"
        />
        <span className="text-sm">Rajshahi</span>
        <Link
          to="/change-location"
          className="ml-1 text-sm text-orange-500 underline"
        >
          Change Location
        </Link>
      </div>
    </div>
  );
};

export default LeftHeader;
