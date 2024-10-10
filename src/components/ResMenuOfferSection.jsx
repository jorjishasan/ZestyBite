/* eslint-disable react/prop-types */
import { useRef } from "react";
import useScrollControl from "../hooks/useScrollControl";
import ScrollButtons from "./ScrollButtons";
import ResMenuOfferCard from "./ResMenuOfferCard";

const ResMenuOfferSection = ({ offers }) => {
  const scrollContainerRef = useRef(null);
  const { canScrollLeft, canScrollRight, scroll } =
    useScrollControl(scrollContainerRef);

  return (
    <div>
      <h2 className="mb-6 text-2xl font-bold">Deals For You</h2>
      <div
        ref={scrollContainerRef}
        className="hide-scrollbar mb-4 flex gap-2 overflow-x-auto"
      >
        {offers &&
          offers.length > 0 &&
          offers.map((offer, index) => (
            <ResMenuOfferCard
              key={offer.info?.offerIds?.[0] || index}
              offer={offer}
            />
          ))}
      </div>
      <ScrollButtons
        onScrollLeft={() => scroll("left")}
        onScrollRight={() => scroll("right")}
        canScrollLeft={canScrollLeft}
        canScrollRight={canScrollRight}
      />
    </div>
  );
};

export default ResMenuOfferSection;
