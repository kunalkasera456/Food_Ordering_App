import React from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  console.log(items)

  return (
    <div className="space-y-6">
      {items.map((item) => {
        const { name, price, description, imageId, ratings } = item.card.info;

        return (
          <div
            key={item.card.info.id}
            className="p-4 border-b border-gray-300 flex justify-between bg-white hover:shadow-lg transition-shadow duration-300 rounded-lg"
          >
            {/* Left: Item details */}
            <div className="w-8/12 text-left">
              {/* Item Name and Price on the same line */}
              <div className="flex items-center">
                <h3 className="font-semibold text-lg text-gray-800">{name}</h3>
                <p className="text-gray-900 font-bold ml-3">₹ {price / 100}</p>
              </div>

              {/* Rating below the Name and Price */}
              {ratings && (
                <div className="flex items-center text-sm text-gray-600 mt-1">
                  <span className="bg-green-600 text-white px-2 py-1 rounded-md mr-2">
                    {ratings.aggregatedRating.rating} ★
                  </span>
                  <span>{ratings.aggregatedRating.ratingCountV2}</span>
                </div>
              )}

              {/* Description aligned to the left */}
              <p className="text-sm text-gray-500 mt-2 text-left">
                {description}
              </p>
            </div>

            {/* Right: Image and button */}
            <div className="w-3/12 flex flex-col items-center relative">
              <img
                src={CDN_URL + imageId}
                alt={name}
                className="w-full h-28 rounded-lg object-cover shadow-lg"
              />
              <button
                className="mt-3 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition duration-200 absolute bottom-0 transform translate-y-1/2"
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
