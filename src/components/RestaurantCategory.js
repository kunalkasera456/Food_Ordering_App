import React from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  
  // Handle arrow click to toggle accordion open or close
  const handleArrowClick = (e) => {
    e.stopPropagation(); // Prevent click propagation to other elements
    setShowIndex(); // Toggle the accordion
  };

  return (
    <div className="w-6/12 mx-auto my-4">
      <div className="p-4 items-center bg-zinc-100 rounded-xl shadow-lg cursor-pointer">
        <div className="flex justify-between">
          {/* Item Category Name */}
          <span className="text-lg font-bold">
            {data.title} ({data.itemCards.length})
          </span>
          
          {/* Arrow Icon to toggle accordion */}
          <span
            onClick={handleArrowClick} // Only the arrow click will toggle accordion
            className="text-lg font-bold cursor-pointer"
          >
            {showItems ? <FaChevronUp /> : <FaChevronDown />}
          </span>
        </div>

        {/* Conditionally render ItemList based on showItems state */}
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
