import React, { useState } from "react";





const SearchBar = () => {
  

  return (
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
        onClick={filterRestaurant}
      >
        Filter Button
      </button>
    </div>
  );
};

export default SearchBar;
