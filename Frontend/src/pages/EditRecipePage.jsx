import { useState, useEffect } from "react";
import HeadingWithLine from "../components/HeadingWithLine";
import Button from "../components/Button";
import NutritionInformation from "../components/NutritionInformation";
import StepInstructions from "../components/StepInstructions";
import Ingredients from "../components/Ingredients";
import SharingOptions from "../components/SharingOptions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function EditRecipePage({ recipeId }) {
    // State för att hantera receptdata och formulärfält
    const [ingredients, setIngredients] = useState([]);
    const [nutrition, setNutrition] = useState({
        protein: 0,
        carbs: 0,
        fat: 0,
        energy: 0,
    });
    const [categories, setCategories] = useState([]);
    const [mealTypes, setMealTypes] = useState([]);
    const [worldCuisines, setWorldCuisines] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedMealType, setSelectedMealType] = useState("");
    const [selectedWorldCuisine, setSelectedWorldCuisine] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [servingSize, setServingSize] = useState("");
    const [cookingTime, setCookingTime] = useState("");
    const [instructions, setInstructions] = useState([]);
    const [imageFile, setImageFile] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);
    const [sharingOption, setSharingOption] = useState("public");
     // Funktion för att hantera delningsalternativ
    const handleSharingChange = (event) => {
        setSharingOption(event.target.value);
    };

    //Hämtar initial data för kategorier, måltidstyper, världskök och recept
    useEffect(() => {
        const fetchData = async () => {
            try {
                const baseURL = import.meta.env.VITE_APP_BACKEND_URL;
                //Hämtar data parallellt för att minska laddningstiden
                const [categoriesRes, mealTypesRes, worldCuisinesRes, recipeRes] =
                    await Promise.all([
                        axios.get(`${baseURL}/recipes/categories`, {
                            withCredentials: true,
                        }),
                        axios.get(`${baseURL}/recipes/meal_types`, {
                            withCredentials: true,
                        }),
                        axios.get(`${baseURL}/recipes/world_cuisines`, {
                            withCredentials: true,
                        }),
                        axios.get(`${baseURL}/recipes/${recipeId}`, {
                            withCredentials: true,
                        }),
                    ]);
                // Sätter hämtad data i state
                setCategories(categoriesRes.data);
                setMealTypes(mealTypesRes.data);
                setWorldCuisines(worldCuisinesRes.data);

                // Sätter data för aktuellt recept
                const recipeData = recipeRes.data;
                setTitle(recipeData.title);
                setDescription(recipeData.description);
                setServingSize(recipeData.serving_size);
                setCookingTime(recipeData.cooking_time_minutes);
                setSelectedCategory(recipeData.category_id);
                setSelectedMealType(recipeData.meal_type_id);
                setSelectedWorldCuisine(recipeData.world_cuisine_id);
                setIngredients(recipeData.ingredients);
                setNutrition(recipeData.nutrition);
                setInstructions(recipeData.instructions);
                setSharingOption(recipeData.sharing_option);
                setPreviewImage(recipeData.recipe_image_url);
            } catch (err) {
                console.error("Error fetching data:", err);
            }
        };

        fetchData();
    }, [recipeId]);

    // Funktion för att hantera formulärinlämning
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validerar formulärfält innan submission
        if (
            !title ||
            !description ||
            !servingSize ||
            !cookingTime ||
            !selectedCategory ||
            !selectedMealType ||
            !selectedWorldCuisine ||
            !nutrition ||
            ingredients.length === 0 ||
            instructions.length === 0
        ) {
            alert("Please fill out all fields before submitting.");
            return;
        }

        try {
            const baseURL = import.meta.env.VITE_APP_BACKEND_URL;
            const formData = new FormData();

            // Lägger till alla formulärfält i FormData för att kunna skicka filuppladdningar
            formData.append("title", title);
            formData.append("description", description);
            formData.append("serving_size", servingSize);
            formData.append("cooking_time_minutes", cookingTime);
            formData.append("category_id", selectedCategory);
            formData.append("meal_type_id", selectedMealType);
            formData.append("world_cuisine_id", selectedWorldCuisine);
            if (imageFile) formData.append("recipe_image", imageFile);
            formData.append("nutrition", JSON.stringify(nutrition));
            formData.append("ingredients", JSON.stringify(ingredients));
            formData.append("instructions", JSON.stringify(instructions));
            formData.append("sharing_option", sharingOption);

            // Skickar uppdaterat recept till backend
            const response = await axios.put(
                `${baseURL}/recipes/update/${recipeId}`,
                formData,
                {
                    withCredentials: true,
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            alert("Recipe updated successfully!");
            console.log(response.data); // Loggar svaret för felsökning
        } catch (error) {
            console.error("Error updating recipe:", error);
            alert("There was an error updating the recipe. Please try again.");
        }
    };

    return (
        <div className="grid grid-cols-12 gap-x-4 py-12">
            <div className="col-start-2 col-span-10">
                <div>
                    <HeadingWithLine text="Edit Recipe" />
                </div>
                {/* Formulär för tilläggning av recept*/}
                <form onSubmit={handleSubmit} className="grid gap-6">
                    {/* Recept titel */}
                    <div className="space-y-10 lg:w-1/2">
                        <div>
                            <label className="block font-semibold mb-2">
                                Recipe Title
                            </label>
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Enter title"
                                className="w-full border rounded-lg p-2 shadow-lg border-black placeholder-black/30"
                            />
                        </div>

                        {/* Ladda upp bild */}
                        <div>
                            <label className="block font-semibold mb-2">
                                Upload Image
                            </label>
                            <div
                                className="border-2 border-dashed border-gray-400 rounded-lg p-4 items-center relative"
                                onDrop={(e) => {
                                    e.preventDefault();
                                    const file = e.dataTransfer.files[0];
                                    if (file) {
                                        setImageFile(file);
                                        const reader = new FileReader();
                                        reader.onload = (event) =>
                                            setPreviewImage(
                                                event.target.result
                                            );
                                        reader.readAsDataURL(file);
                                    }
                                }}
                                onDragOver={(e) => e.preventDefault()}
                            >
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => {
                                        const file = e.target.files[0];
                                        if (file) {
                                            setImageFile(file);
                                            const reader = new FileReader();
                                            reader.onload = (event) =>
                                                setPreviewImage(
                                                    event.target.result
                                                );
                                            reader.readAsDataURL(file);
                                        }
                                    }}
                                    className="absolute inset-0 opacity-0 cursor-pointer"
                                />
                                <div className="cursor-pointer flex flex-col items-center justify-center space-y-2">
                                    {previewImage ? (
                                        <img
                                            src={previewImage}
                                            alt="Preview"
                                            className="w-full h-full object-cover rounded-lg"
                                        />
                                    ) : (
                                        <>
                                            <FontAwesomeIcon
                                                icon={faUpload}
                                                className="text-gray-500 text-6xl"
                                            />
                                            <p className="text-gray-600 font-medium">
                                                Choose a file or drag it here
                                            </p>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Other fields */}
                        <div className="space-y-10">
                            <Ingredients
                                ingredients={ingredients}
                                setIngredients={setIngredients}
                            />
                            <NutritionInformation
                                ingredients={ingredients}
                                setNutrition={setNutrition}
                            />
                            <StepInstructions
                                instructions={instructions}
                                setInstructions={setInstructions}
                            />
                            {/* Dropdowns */}
                            <div className="space-y-4">
                                <label className="block font-semibold mb-2">
                                    Category
                                </label>
                                <select
                                    className="w-full border placeholder-black/30 rounded-lg p-2"
                                    value={selectedCategory}
                                    onChange={(e) =>
                                        setSelectedCategory(e.target.value)
                                    }
                                >
                                    <option value="" disabled>
                                        Select a category
                                    </option>
                                    {categories.map((category) => (
                                        <option
                                            key={category.id}
                                            value={category.id}
                                        >
                                            {category.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="space-y-4">
                                <label className="block font-semibold mb-2">
                                    Meal Type
                                </label>
                                <select
                                    className="w-full border placeholder-black/30 rounded-lg p-2"
                                    value={selectedMealType}
                                    onChange={(e) =>
                                        setSelectedMealType(e.target.value)
                                    }
                                >
                                    <option value="" disabled>
                                        Select a meal type
                                    </option>
                                    {mealTypes.map((mealType) => (
                                        <option
                                            key={mealType.id}
                                            value={mealType.id}
                                        >
                                            {mealType.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="space-y-4">
                                <label className="block font-semibold mb-2">
                                    World Cuisine
                                </label>
                                <select
                                    className="w-full border placeholder-black/30 rounded-lg p-2"
                                    value={selectedWorldCuisine}
                                    onChange={(e) =>
                                        setSelectedWorldCuisine(
                                            e.target.value
                                        )
                                    }
                                >
                                    <option value="" disabled>
                                        Select a world cuisine
                                    </option>
                                    {worldCuisines.map((worldCuisine) => (
                                        <option
                                            key={worldCuisine.id}
                                            value={worldCuisine.id}
                                        >
                                            {worldCuisine.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        {/* Sharing Options */}
                        <div>
                            <SharingOptions
                                selectedOption={sharingOption}
                                onChange={handleSharingChange}
                            />
                        </div>
                        {/* Submit Button */}
                        <div>
                            <Button size="mediumMoreWidth" type="submit">
                                Update Recipe
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditRecipePage;