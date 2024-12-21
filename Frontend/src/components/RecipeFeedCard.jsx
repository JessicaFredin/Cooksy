import React from "react";
import HeartFavourites from "./HeartFavourites";
import StarRating from "./StarRating";
import AddToMealPlanner from "./AddToMealPlanner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDrumstickBite, faClock } from "@fortawesome/free-solid-svg-icons";
import profile1 from "../assets/images/profile1.jpg";
import recept1 from "../assets/images/recept1.jpg";

const RecipeFeedCard = ({ size = "large" }) => {
  const isLarge = size === "large";

  const recipeData = {
    image: recept1,
    name: "Recipe Name",
    category: "Meat",
    time: "60 min",
    author: "Lisa Karlsson",
    authorImage: profile1,
    reviews: 0,
    description: "A delicious and hearty recipe perfect for any occasion."
  };

  // Dynamiska klasser och dimensioner beroende på storlek
  const cardWidth = isLarge ? "w-[360px]" : "w-[356px]";
  const cardHeight = isLarge ? "h-[510px]" : "h-[434px]";
  const imageHeight = isLarge ? "h-[276px]" : "h-[200px]";
  const textSize = isLarge ? "text-lg" : "text-sm";

  return (
    <div
      className={`relative ${cardWidth} ${cardHeight} bg-white rounded-lg shadow-md overflow-hidden flex flex-col`}
    >
      {/* Image Section */}
      <div className={`relative ${imageHeight} overflow-hidden group`}>
        <img
          src={recept1} alt="Image"
          className="w-full h-full object-cover"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-[#333333]/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-[#FAFAFA] text-4xl font-semibold">View Recipe</span>
        </div>
        {/* Heart Icon */}
        <div className="absolute top-2 right-2">
          <HeartFavourites size="small" />
        </div>
        {/* Add to Meal Planner Icon */}
        <div className="absolute top-12 right-2">
          <AddToMealPlanner size="small" />
        </div>
        {/* Author Section */}
        <div className="absolute bottom-0 right-0 bg-[#A8D400] text-white px-4 flex items-center w-[calc(100%-40%)] rounded-tl-[10px]">
          <p className="text-sm ml-2">{recipeData.author}</p>
          <img
            src={profile1}
            className="w-8 h-8 rounded-[10px]"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="p-3 flex flex-col flex-grow">
        <h2 className={`text-gray-900 font-semibold ${textSize} mb-2`}>
          {recipeData.name}
        </h2>
        <p className={`text-gray-700 ${textSize} mb-4`}>{recipeData.description}</p>
        <div className="flex-grow"></div>
        <div className="mt-auto">
          <div className="flex justify-between items-center pb-2">
            <div className="flex items-center text-s text-gray-600">
              <FontAwesomeIcon
                icon={faDrumstickBite}
                className="text-[#333333] mr-2"
              />
              <span>{recipeData.category}</span>
            </div>
            <div className="flex items-center text-s text-gray-600">
              <FontAwesomeIcon
                icon={faClock}
                className="text-[#333333] mr-2"
              />
              <span>{recipeData.time}</span>
            </div>
          </div>
          <div className="border-b border-gray-300 mb-2"></div>
          <div className="flex justify-between items-center p-1">
            <StarRating totalStars={5} size="1rem" />
            <p className="text-s text-black">{recipeData.reviews} reviews</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeFeedCard;