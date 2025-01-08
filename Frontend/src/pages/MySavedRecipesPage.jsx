/*import HeadingWithLine from "../components/HeadingWithLine";
import SearchField from "../components/SearchField";
import RecipeCard from "../components/RecipeCard";
import FiltersMenu from "../components/FiltersMenu"
import { MeatIcon } from "../assets/icons/MeatIcon";
import { ChickenIcon } from "../assets/icons/ChickenIcon";
import { FishIcon } from "../assets/icons/FishIcon";
import { VegetableIcon } from "../assets/icons/VegetableIcon";
import Food1 from "../assets/images/food1.jpg";
import RecipeFolder from "../components/RecipeFolder"
import { useNavigate } from 'react-router-dom'

const MySavedRecipesPage = () => {
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

      const navigate = useNavigate();

      const handleFolderClick = (folder) => {
          navigate(`/folder-details`, { state: { folder } }); // Skicka folderdata via state
      };

      const folders = [
        { name: "Easy recipes", color: "green-400", },
        { name: "American recipes", color: "pink-200"},
        { name: "Summer recipes", color: "blue-100", }
    ];
      console.log(folders.name)

    return(
        <div className="grid-layouten grid grid-cols-12 gap-x-4 py-32">
            <div className="col-start-2 col-span-3">
			<HeadingWithLine className="col-start-2" text="My saved recipes"/>
            </div>
            <div className="md:flex md:justify-between col-start-2 col-span-10 mb-6 md:my-16">
                    <div className="mt-8 mb-16 md:m-0 md:order-2 md:w-3/5 lg:w-2/5">
                      <SearchField/>
                    </div>
                    <FiltersMenu/>
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
        </div>
    );
};
export default MySavedRecipesPage*/