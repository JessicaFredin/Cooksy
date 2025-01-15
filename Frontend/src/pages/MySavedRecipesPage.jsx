import HeadingWithLine from "../components/HeadingWithLine";
import SearchField from "../components/SearchField";
import RecipeCard from "../components/RecipeCard";
import FiltersMenu from "../components/FiltersMenu"
import RecipeFolder from "../components/RecipeFolder";
import SaveInFolderPopup from "../components/SaveInFolderPopup";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { useData } from "../contexts/DataContext";

const MySavedRecipesPage = () => {
  const { data, loading, error } = useData();

  const navigate = useNavigate();

  const handleFolderClick = (folder) => {
    navigate(`/folder-details`, { state: { folder } }); // Skicka folderdata via state
  };

  const folders = [
    { name: "Easy recipes", color: "green-400", },
    { name: "American recipes", color: "pink-200" },
    { name: "Summer recipes", color: "blue-100", }
  ];
  console.log(folders.name)

  return (
    <div className="grid-layouten grid grid-cols-12 gap-x-4 py-32">
      <div className="col-start-2 col-span-3">
        <HeadingWithLine className="col-start-2" text="My saved recipes" />
      </div>
      <div className="md:flex md:justify-between col-start-2 col-span-10 mb-6 md:my-16">
        <div className="mt-8 mb-16 md:m-0 md:order-2 md:w-3/5 lg:w-2/5">
          <SearchField />
        </div>
        <FiltersMenu />
      </div>
      <div className="col-start-2 col-span-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 gap-x-4">
        {folders.map((folder, index) => (
          <div key={index} onClick={() => handleFolderClick(folder)} className="flex justify-center">
            <RecipeFolder
              titel={folder.name}
              color={folder.color}
            />
          </div>
        ))}
        {data.recipes.map((recipe, index) => (
          <div key={index} className="flex justify-center">
            <RecipeCard
              image={recipe.img} // Importera eller använd relevant bild här.
              dishName={recipe.name}
              categoryName={recipe.category}
              time={recipe.time}
              authorName="Lisa karlsson"
              authorImage={recipe.img}
              rating={recipe.rating}
              reviews={recipe.reviews}
              commentsCount={recipe.comments}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default MySavedRecipesPage