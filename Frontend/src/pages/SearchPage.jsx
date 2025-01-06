import React, { useState } from "react";
import RecipeCard from "../components/RecipeCard";
import { MeatIcon } from "../assets/icons/MeatIcon";
import { ChickenIcon } from "../assets/icons/ChickenIcon";
import { FishIcon } from "../assets/icons/FishIcon";
import { VegetableIcon } from "../assets/icons/VegetableIcon";
import Food1 from "../assets/images/food1.jpg";
import Blogpost from "../components/Blogpost";
import GreenRing from "../assets/svg/GreenRing";
import SortMenu from "../components/SortMenu";
import FiltersMenu from "../components/FiltersMenu";
import HeadingWithLine from "../components/HeadingWithLine";
import ProfileCard from "../components/ProfileCard"
import NoResultImg from "../assets/images/NoResult.png"

const SearchPage = () => {
  const [activeTab, setActiveTab] = useState("recipes");
  const searchResults="protein"
  // Data för varje sektion
  const recipes = [
            {
                id: 1,
                name: "Shishkebab med baba ganoush",
                icon: <MeatIcon />,
                category: "Meat",
                time: "90 min",
                rating: 2,
                reviews: 25,
                comments: 5,
            },
            {
                id: 2,
                name: "Cheeseburger pasta skillet (one pot)",
                icon: <MeatIcon />,
                category: "Meat",
                time: "30 min",
                rating: 5,
                reviews: 36,
                comments: 10,
            },
            {
                id: 3,
                name: "Smashed burger med extra ost",
                icon: <ChickenIcon />,
                category: "Chicken",
                time: "60 min",
                rating: 4,
                reviews: 55,
                comments: 7,
            },
            {
                id: 4,
                name: "Sushi",
                icon: <FishIcon />,
                category: "Fish",
                time: "80 min",
                rating: 1,
                reviews: 15,
                comments: 8,
            },
            {
                id: 5,
                name: "Chickpea and harissa stew with herby yoghurt",
                icon: <VegetableIcon />,
                category: "Vegetable",
                time: "45 min",
                rating: 3,
                reviews: 125,
                comments: 6,
            },
            {
                id: 6,
                name: "Shrimp salad",
                icon: <FishIcon />,
                category: "Fish",
                time: "120 min",
                rating: 3,
                reviews: 37,
                comments: 19,
            }
  ]
  const profiles = []
  const profiles1 = [
    { name: "Alice", id: "1"},
    { name: "Bob", id: "2"},
    { name: "Charlie", id: "3"},
    { name: "Alice", id: "4"},
    { name: "Bob", id: "5"},
    { name: "Charlie", id: "6"}
  ];


  // Render-logik för varje tab
  const renderContent = () => {
    if (activeTab === "recipes") {
      return (
        <div className="col-start-2 col-span-10">
  {recipes.length === 0 ? (
    <div className="flex flex-col justify-center items-center">
    <h3 className="text-center font-medium md:text-3xl font-pacifico m-16">No recipe found</h3>
    <img
    className="md:w-2/3"
      src={NoResulteImg}
    />
    </div>
  ) : (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 gap-x-4">
      {recipes.map((recipe, index) => (
        <div key={index} className="flex justify-center">
          <RecipeCard
            image={Food1} // Importera eller använd relevant bild här.
            dishName={recipe.name}
            categoryName={recipe.category}
            time={recipe.time}
            authorName="Lisa karlsson"
            authorImage={Food1}
            rating={recipe.rating}
            reviews={recipe.reviews}
            commentsCount={recipe.comments}
          />
        </div>
      ))}
    </div>
  )}
</div>
      );
    } else if (activeTab === "profiles") {
      return (
        <div className="col-start-2 col-span-10">
  {profiles.length === 0 ? (
    <div className="flex flex-col justify-center items-center">
    <h3 className="text-center font-medium md:text-3xl font-pacifico m-16">No recipe found</h3>
    <img
    className="md:w-2/3"
      src={NoResulteImg}
    />
    </div>
  ) : (
        <div className="col-start-2 col-span-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 gap-x-4">
          {profiles.map((profile) => (
            <div key={profile.index} className="flex justify-center">
            <ProfileCard
            name={profile.name}
            />
            </div>
          ))}
        </div>
         )}
</div>
      );

    } else if (activeTab === "articles") {
      return (
        <div className="col-start-2 col-span-10">
  {profiles.length === 0 ? (
    <div className="flex flex-col justify-center items-center">
    <h3 className="text-center font-medium md:text-3xl font-pacifico m-16">No recipe found</h3>
    <img
    className="md:w-2/3"
      src={NoResulteImg}
    />
    </div>
  ) : (
    <div className="space-y-6">
    {profiles.map((profile) => (
      <div key={profile.index}>
      <Blogpost
      titel={profile.name}
      />
      </div>
    ))}
    </div>
         )}
         </div>
      );
    }
  };

  return (
    <div className="grid grid-cols-12 gap-x-4 mt-32">
      <div className="col-start-2 col-span-10">
        <HeadingWithLine text={`(1085) results for “${searchResults}”`} />
      </div>
      {/* Sekundär navigation */}
      <div className="col-start-2 col-span-10 space-x-4 flex justify-between md:justify-start lg:space-x-20 mt-10">
      <GreenRing 
        text="Recipes"
        onClick={() => setActiveTab("recipes")} 
        isActive={activeTab === "recipes"}
      />
      <GreenRing 
        text="Profiles"
        onClick={() => setActiveTab("profiles")} 
        isActive={activeTab === "profiles"}
      />
      <GreenRing 
        text="Articles"
        onClick={() => setActiveTab("articles")} 
        isActive={activeTab === "articles"}
      />
      </div>
      <div className="col-start-2 col-span-10 flex items-center justify-between mt-12 mb-8 " >
        <FiltersMenu/>
        <SortMenu/>
      </div>
      {/* Innehållet */}
      <div className="col-start-2 col-span-10">{renderContent()}</div>
    </div>
  );
};

export default SearchPage;