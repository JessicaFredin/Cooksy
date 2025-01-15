import HeadingWithLine from "../components/HeadingWithLine";
import Button from "../components/Button";
import SortMenu from "../components/SortMenu";
import FiltersMenu from "../components/FiltersMenu";
import RecipeCard from "../components/RecipeCard";
import { useParams } from 'react-router-dom';
import { useData } from "../contexts/DataContext";

function OtherProfilePage() {
    const { data } = useData();
    const { id } = useParams(); // Hämta ID från URL:en
    const { profiles, recipes } = data;

    // Hitta den specifika profilen baserat på ID
    const profile = profiles[id];

    // Kontrollera om profilen finns
    if (!profile) {
        return <p className="text-center mt-32">Profile not found</p>;
    }

    return (
        <div className="my-32 grid grid-cols-12 gap-6 ">
            <div className="col-start-2 col-span-10">
                <div className="grid grid-cols-12 gap-4">
                    {/* Profilbild */}
                    <div className="relative col-span-12 md:col-span-4 h-full">
                        <img
                            src={profile.img} // Använd den hittade profilens bild
                            alt={profile.name}
                            className="rounded-lg h-96 object-cover w-full object-top"
                        />
                        <div className="absolute bottom-0 bg-green-300 w-full h-14 rounded-b-lg flex justify-center items-center">
                            <div className="text-center">
                                <h4 className="">Uploaded recipes</h4>
                                <h4>{profile.recipes}</h4>
                            </div>
                        </div>
                    </div>

                    {/* Profilinfo */}
                    <div className="col-span-12 md:col-span-8 ">
                        <div className="flex flex-col  mb-6">
                            <div className="flex justify-between mb-6">
                                <h1 className="text-4xl font-pacifico mb-6">
                                    {profile.name}
                                </h1>

                                <div className=" flex flex-col justify-center text-sm text-gray-600 ">
                                    <h4 className="font-bold mb-2">
                                        {profile.followers} followers
                                    </h4>
                                    <Button size="small">Follow</Button>
                                </div>

                            </div>
                            <p>{profile.description}</p>
                        </div>
                    </div>
                </div>

                {/* Rubrik */}
                <div className="col-start-2 col-span-10 mt-20">
                    <HeadingWithLine text={`${profile.name}'s Recipes`} />
                </div>

                {/* Filter och sorteringsmenyer */}
                <div className="col-start-2 col-span-10 flex items-center justify-between mt-12 mb-8">
                    <FiltersMenu />
                    <SortMenu />
                </div>

                {/* Receptkort */}
                <div className="col-start-2 col-span-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 gap-x-4">
                    {recipes.map((recipe, index) => (
                        <div key={index} className="flex justify-center">
                            <RecipeCard
                                image={recipe.img}
                                dishName={recipe.name}
                                categoryName={recipe.category}
                                time={recipe.time}
                                authorName={profile.name} // Använd profilens namn som författare
                                rating={recipe.rating}
                                reviews={recipe.reviews}
                                commentsCount={recipe.comments}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default OtherProfilePage;