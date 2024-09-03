import React from 'react';
import useRenderStartRating from '../../../utils/useRenderStartRating';

const RestaurantCard = ({resData}) => {
    console.log(resData)
    const {name, rating} = resData;
    useRenderStartRating()
  return (
    <div className="max-w-[14rem] rounded-lg overflow-hidden shadow-md bg-white hover:shadow-lg transition-shadow duration-300 ease-in-out">
      {/* Image section */}
      <div className="relative">
        <img
          className="w-full h-32 object-cover"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/d9b5570d65d8600f10d985a817e0f0ff"
          alt="Restaurant"
        />
        {/* Overlay with rating */}
        <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white text-xs font-semibold px-2 py-1 flex items-center">
          {/* Stars and numeric rating horizontally */}
          <div className="flex items-center">
            {useRenderStartRating(Math.round(rating))}
            <span className="ml-2">{rating.toFixed(1)}</span> {/* Display numeric rating */}
          </div>
        </div>
      </div>
      
      {/* Content section */}
      <div className="px-3 py-2">
        <h4 className="font-bold text-base mb-1">{name}</h4>
        <p className="text-gray-500 text-xs mb-1">Italian, Chinese</p>
        <p className="text-gray-500 text-xs">30 mins • ₹200 for two</p>
      </div>

      {/* Footer section */}
      <div className="flex justify-between items-center px-3 py-2 border-t">
        <p className="text-xs text-green-700 font-semibold">Promoted</p>
        <button className="bg-yellow-400 text-white text-xs px-2 py-1 rounded">20% OFF</button>
      </div>
    </div>
  );
};

export default RestaurantCard;
