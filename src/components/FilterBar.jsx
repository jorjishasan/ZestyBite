/* eslint-disable react/prop-types */

const FilterBar = ({ activeFilters, setActiveFilters }) => {
  const filters = [
    { id: "fastDelivery", label: "Fast Delivery" },
    { id: "ratings4Plus", label: "Ratings 4.0+" },
    { id: "pureVeg", label: "Pure Veg" },
    { id: "offers", label: "Offers" },
    { id: "priceRange", label: "Rs. 300-Rs. 600" },
    { id: "lessThan300", label: "Less than Rs. 300" }, // New filter
  ];

  const toggleFilter = (filterId) => {
    setActiveFilters((prev) =>
      prev.includes(filterId)
        ? prev.filter((id) => id !== filterId)
        : [...prev, filterId],
    );
  };

  return (
    <div className="mb-6 mt-4 flex flex-wrap items-center">
      <div className="flex flex-wrap gap-1 text-sm">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => toggleFilter(filter.id)}
            className={`flex items-center rounded-full border px-3 py-1 ${
              activeFilters.includes(filter.id)
                ? "bg-orange-500 text-white"
                : "bg-white text-gray-700"
            }`}
          >
            {filter.icon && (
              <img src={filter.icon} alt="" className="mr-2 h-4 w-4" />
            )}
            {filter.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;
