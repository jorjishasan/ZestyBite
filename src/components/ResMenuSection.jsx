/* eslint-disable react/prop-types */
import { useState } from "react";
import findNestedProp from "../utils/findNestedProps";
import ResMenuItemCard from "./ResMenuItemCard";
import chevronDown from "../assets/angle-down-circle.svg";

const ResMenuSection = ({ item, defaultExpanded }) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const sectionTitle = findNestedProp(item, "title");
  const length = findNestedProp(item, "itemCards").length;

  return (
    <div className="mx-auto mb-8 w-10/12 border-b-2 border-gray-200 md:m-0">
      <h3
        className="my-6 flex cursor-pointer items-center justify-between text-xl font-semibold"
        onClick={toggleExpand}
      >
        {sectionTitle + "-" + "(" + length + ")"}
        <span
          className="transform font-bold transition-transform duration-200"
          style={{
            transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
          }}
        >
          <img className="h-7 w-7" src={chevronDown} alt="chevron down" />
        </span>
      </h3>

      {isExpanded && (
        <div className="flex flex-wrap gap-4">
          {findNestedProp(item, "itemCards").map((cuisine) => (
            <ResMenuItemCard
              key={cuisine.card?.info?.id || cuisine.id}
              item={findNestedProp(cuisine, "info")}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ResMenuSection;
