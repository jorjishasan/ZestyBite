/* eslint-disable react/prop-types */
import { RESTAURANT_CARD_IMAGE_URL } from "../utils/constant";
import starIcon from "../assets/starIcon.svg";
import clockIcon from "../assets/clockIcon.svg";
import deliveryIcon from "../assets/deliveryIcon.svg";

const RestaurantCard = ({ resInfo }) => {
  const { name, cuisines, avgRating, sla, cloudinaryImageId } = resInfo;

  return (
    <div className="w-[300px] transform transition-all duration-200 ease-in-out hover:scale-105 sm:w-[270px]">
      <div className="h-[130px] w-full overflow-hidden rounded-t-lg">
        <img
          className="h-full w-full transform object-cover transition-transform duration-300 ease-in-out hover:scale-110"
          src={`${RESTAURANT_CARD_IMAGE_URL}${cloudinaryImageId}`}
          alt={name}
        />
      </div>

      <h3 className="mt-3 px-2 text-lg">{name}</h3>
      <h4 className="mt-1 px-2 text-xs text-gray-500">
        {cuisines.join(" - ")}
      </h4>
      <div className="mb-2 mt-3 flex gap-4 px-2 text-sm text-black">
        <InfoItem icon={starIcon} text={avgRating} bold />
        <InfoItem icon={deliveryIcon} text="Free" />
        <InfoItem icon={clockIcon} text={`${sla?.deliveryTime} min`} />
      </div>
    </div>
  );
};

const InfoItem = ({ icon, text, bold = false }) => (
  <span className={`flex items-center gap-1 ${bold ? "font-bold" : ""}`}>
    <img src={icon} alt="" />
    {text}
  </span>
);

export default RestaurantCard;
