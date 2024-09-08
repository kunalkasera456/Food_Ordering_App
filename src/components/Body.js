import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [listOfFilterRestaurent, setListOfFilterRestaurent] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true); // Add loading state

  const topRatedRestaurants = () => {
    const topRatedRestaurants = listOfRestaurants.filter(
      (restaurant) => restaurant.info.avgRating > 4
    );

    setListOfFilterRestaurent(topRatedRestaurants);
  };

  const handleSearchText = () => {
    const filteredRestaurants = listOfRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setListOfFilterRestaurent(filteredRestaurants);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true); // Show shimmer on fetch start
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    setListOfRestaurants(
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setListOfFilterRestaurent(
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setLoading(false); // Hide shimmer once data is fetched
  };

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus)
    return <h1 className="text-center mt-6 text-xl">Please Check Your Internet Connection</h1>;

  // Show shimmer until data is loaded
  return loading ? (
    <Shimmer />
  ) : (
    <div>
      <div className="flex items-center justify-center mt-6">
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
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          {/* Search button */}
          <button
            className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold px-4 py-2 rounded-full transition duration-300"
            onClick={handleSearchText}
          >
            Search
          </button>
        </div>
        <button
          className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold px-4 py-2 rounded-full transition duration-300 mx-10"
          onClick={topRatedRestaurants}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="flex flex-wrap gap-6 justify-center p-6 mx-20 ">
        {listOfFilterRestaurent.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant?.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
