import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import RestaurantCard from "./RestaurantCard";

const initialRestaurants = [
  { id: 1, name: "The Italian Bistro", rating: 4.5 },
  { id: 2, name: "Sushi Palace", rating: 3.9 },
  { id: 3, name: "Spice Hub", rating: 4.2 },
  // Add more restaurants as needed
];

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(initialRestaurants);
  const filterRestaurants = () => {
    const filteredRestaurants = listOfRestaurants.filter(
      (restaurant) => restaurant.rating > 4
    );
    setListOfRestaurants(filteredRestaurants);
  };

  return (
    <div>
      <div className="flex items-center justify-center mt-4">
        {/* Container for search bar */}
        <div className="flex items-center bg-white rounded-full shadow-md overflow-hidden w-full max-w-md">
          {/* Search icon */}
          <span className="px-3 text-gray-400">
            <FaSearch />
          </span>
          {/* Search input */}
          <input
            type="text"
            placeholder="Search restaurants, cuisines, or dishes"
            className="flex-grow py-2 px-4 text-gray-700 focus:outline-none"
          />
          {/* Search button */}
          <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-4 py-2 rounded-full transition duration-300">
            Search
          </button>
        </div>
        <button
          className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-4 py-2 rounded-full transition duration-300 mx-10"
          onClick={filterRestaurants}
        >
          Filter Button
        </button>
      </div>
      <div className="flex flex-wrap gap-6 justify-center p-6">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
