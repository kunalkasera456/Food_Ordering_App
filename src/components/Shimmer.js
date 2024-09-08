import React from "react";
import { Shimmer_card_unit } from "../utils/constants"; // Import the constant

const Shimmer = () => {
  return (
    <div className="flex flex-wrap gap-6 justify-center p-6 mx-20 mt-16">
      {Array(Shimmer_card_unit) // Use the constant to determine the number of shimmer cards
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="w-[14rem] h-[22rem] rounded-lg overflow-hidden shadow-md bg-white animate-pulse"
          >
            {/* Shimmer for image section */}
            <div className="w-full h-32 bg-gray-300"></div>

            {/* Shimmer for content section */}
            <div className="px-3 py-2">
              <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
              <div className="h-3 bg-gray-300 rounded w-1/2 mb-2"></div>
              <div className="h-3 bg-gray-300 rounded w-1/3"></div>
            </div>

            {/* Shimmer for footer section */}
            <div className="flex justify-between items-center px-3 py-2 border-t">
              <div className="h-3 bg-gray-300 rounded w-1/4"></div>
              <div className="h-3 bg-gray-300 rounded w-1/3"></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
