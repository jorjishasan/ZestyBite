/* eslint-disable react/prop-types */

import { FaTag, FaClock } from "react-icons/fa";

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
  const offers = [
    {
      title: "Pizza Bonanza",
      description: "Get amazing discounts on all pizzas",
      discount: 30,
      expiryDate: "2023-08-31",
      imageUrl:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      title: "Burger Feast",
      description: "Huge savings on our signature burgers",
      discount: 25,
      expiryDate: "2023-09-15",
      imageUrl:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1899&q=80",
    },
    {
      title: "Sushi Delights",
      description: "Premium sushi at unbeatable prices",
      discount: 40,
      expiryDate: "2023-09-30",
      imageUrl:
        "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      title: "Pasta Paradise",
      description: "Indulge in our pasta dishes for less",
      discount: 35,
      expiryDate: "2023-10-15",
      imageUrl:
        "https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
    },
    {
      title: "Healthy Bowls",
      description: "Get fit with our discounted salad bowls",
      discount: 20,
      expiryDate: "2023-10-31",
      imageUrl:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      title: "Dessert Fiesta",
      description: "Treat yourself with discounted desserts",
      discount: 45,
      expiryDate: "2023-11-15",
      imageUrl:
        "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80",
    },
  ];

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
