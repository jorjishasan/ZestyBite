/* eslint-disable react/prop-types */
import { RESTAURANT_CARD_IMAGE_URL } from "../utils/constant";

const ResMenuOfferCard = ({ offer }) => {
  return (
    <div className="flex w-[400px] items-center justify-center gap-3 rounded-3xl border-2 border-gray-300 p-4">
      <div className="h-16 w-16">
        <img
          className="h-full w-full"
          src={RESTAURANT_CARD_IMAGE_URL + offer?.info?.offerLogo}
          alt="offer"
        />
      </div>
      <div>
        <h3 className="text-nowrap text-lg font-bold">{offer?.info?.header}</h3>
        <div className="truncate text-gray-400">{offer?.info?.description}</div>
      </div>
    </div>
  );
};

export default ResMenuOfferCard;
