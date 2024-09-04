import React from 'react'
import { FaStar, FaRegStar} from 'react-icons/fa';

const useRenderStartRating = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="text-yellow-500" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-gray-300" />);
      }
    }
    return stars;
}

export default useRenderStartRating

