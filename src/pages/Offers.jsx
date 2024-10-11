/* eslint-disable react/prop-types */

import { FaTag, FaClock } from "react-icons/fa";
import { offers } from "../utils/offersData";

const OfferCard = ({ title, description, discount, expiryDate, imageUrl }) => (
  <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
    <img
      src={imageUrl}
      alt={title}
      className="h-48 w-full object-cover transition-all duration-300 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-1 text-sm">{description}</p>
      <div className="mt-2 flex items-center justify-between">
        <span className="flex items-center text-yellow-400">
          <FaTag className="mr-1" />
          {discount}% OFF
        </span>
        <span className="flex items-center text-sm">
          <FaClock className="mr-1" />
          Expires: {expiryDate}
        </span>
      </div>
    </div>
  </div>
);

const Offers = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 py-20 text-center text-white">
        <h1 className="text-4xl font-bold">Exclusive Food Offers</h1>
        <p className="mt-4 text-xl">Discover delicious deals and save big!</p>
      </div>

      {/* Offers Grid */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {offers.map((offer, index) => (
            <OfferCard key={index} {...offer} />
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-white py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Hungry for more?</h2>
        <p className="mt-4 text-xl text-gray-600">
          Subscribe to our newsletter for exclusive food offers and updates.
        </p>
        <div className="mt-8 flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full max-w-md rounded-l-lg border-gray-300 px-4 py-2 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200"
          />
          <button className="rounded-r-lg bg-orange-600 px-6 py-2 text-white transition-colors hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Offers;
