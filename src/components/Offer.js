import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { offers } from "../utils/mokedata";



const Offer = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredOffers, setFilteredOffers] = useState(offers);

  const handleSearch = () => {
    const filtered = offers.filter((offer) =>
      offer.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredOffers(filtered);
  };

  return (
    <div className="container mx-auto p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-center">Exciting Offers Just for You!</h1>
        <div className="flex items-center justify-center mt-4">
          <div className="flex items-center bg-white rounded-full shadow-md overflow-hidden w-full max-w-md">
            <span className="px-3 text-gray-400">
              <FaSearch />
            </span>
            <input
              type="text"
              placeholder="Search offers..."
              className="flex-grow py-2 px-4 text-gray-700 focus:outline-none"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button
              className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-4 py-2 rounded-full transition duration-300"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Offers List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredOffers.map((offer) => (
          <div key={offer.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img              src={offer.image}
              alt={offer.title}
              className="w-full h-32 object-cover"
            />
            <div className="p-4">
              <h2 className="font-semibold text-lg mb-2">{offer.title}</h2>
              <p className="text-gray-600 mb-2">{offer.description}</p>
              <p className="text-gray-500 text-sm">{offer.terms}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offer;

