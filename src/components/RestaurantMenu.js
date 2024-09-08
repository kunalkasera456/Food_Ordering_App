import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(0); // No accordion open by default
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines } = resInfo?.cards[2]?.card?.card?.info;

  const itemCategories =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (e) =>
        e.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  const toggleShowIndex = (index) => {
    setShowIndex(index === showIndex ? null : index); // Toggle between open and close
  };

  return (
    <div className="text-center">
      <h1 className="font-bold text-2xl my-6">{name}</h1>
      <h3 className="font-bold text-lg">{cuisines.join(",")}</h3>

      {/* Map over categories and toggle open/close based on arrow click */}
      {itemCategories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showIndex} // Show items if the index matches
          setShowIndex={() => toggleShowIndex(index)} // Toggle index when arrow clicked
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
