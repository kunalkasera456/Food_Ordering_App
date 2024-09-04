import React from "react";
import useRenderStartRating from "../utils/useRenderStartRating";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const {
    avgRating,
    cloudinaryImageId,
    name,
    sla,
    costForTwo,
    cuisines,
    aggregatedDiscountInfoV3,
  } = resData;

  const discountHeader = aggregatedDiscountInfoV3?.header;
  const discountSubHeader = aggregatedDiscountInfoV3?.subHeader;

  useRenderStartRating();

  return (
    <div className="w-[14rem] h-[19rem] rounded-lg overflow-hidden shadow-md bg-white hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:scale-95 flex flex-col justify-between">
      {/* Image section */}
      <div className="relative">
        <img
          className="w-full h-40 object-cover"
          src={CDN_URL + cloudinaryImageId}
          alt="Restaurant"
        />
        {/* Overlay with rating */}
        <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white text-xs font-semibold px-2 py-1 flex items-center">
          {/* Stars and numeric rating horizontally */}
          <div className="flex items-center">
            {useRenderStartRating(Math.round(avgRating))}
            <span className="ml-2">{avgRating.toFixed(1)}</span>
          </div>
        </div>
      </div>

      {/* Content section */}
      <div className="px-3 py-2 flex-grow">
        <h4 className="font-bold text-base mb-1">{name}</h4>
        <p className="text-gray-500 text-xs mb-1 truncate">{cuisines.join(", ")}</p>
        <p className="text-gray-500 text-xs">
          {sla.slaString} • {costForTwo}
        </p>
      </div>

      {/* Footer section */}
      <div className="flex justify-between items-center px-3 py-2 border-t">
        <p className="text-xs text-green-700 font-semibold">Promoted</p>
        {discountHeader && discountSubHeader ? (
          <button className="bg-yellow-500 text-white text-xs px-2 py-1 rounded-md">
            {discountHeader} {discountSubHeader}
          </button>
        ) : (
          <span className="text-xs text-gray-500">No Offers Available</span>
        )}
      </div>
    </div>
  );
};

export default RestaurantCard;
