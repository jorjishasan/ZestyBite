/* eslint-disable react/prop-types */
import { useState } from "react";
import findNestedProp from "../utils/findNestedProps";
import ResMenuItemCard from "./ResMenuItemCard";

const ResMenuSection = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const sectionTitle = findNestedProp(item, "title");
  const length = findNestedProp(item, "itemCards").length;

  return (
    <div className="mb-8 w-10/12 border-b-2 border-gray-200">
      <h3
        className="mb-4 flex cursor-pointer items-center justify-between text-xl font-semibold"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {sectionTitle + "-" + "(" + length + ")"}
        <span
          className="transform text-4xl font-bold transition-transform duration-200"
          style={{
            transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
          }}
        >
          ⌵
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
