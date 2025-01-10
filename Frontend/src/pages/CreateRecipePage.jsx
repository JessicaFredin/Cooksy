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

function CreateRecipePage() {
	// State för att hantera receptdata och formulärfält
	const [ingredients, setIngredients] = useState([
		{ volume: "", unit: "", name: "", id: null },
	]);
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

	// Hämtar initiala kategorier, måltidstyper och världskök från API:et vid sidladdning
	useEffect(() => {
		const fetchData = async () => {
			try {
				// Hämtar data parallellt för att minska laddningstiden
				const baseURL = import.meta.env.VITE_APP_BACKEND_URL;

				const [categoriesRes, mealTypesRes, worldCuisinesRes] =
					await Promise.all([
						axios.get(`${baseURL}/categories`, {
							withCredentials: true,
						}),
						axios.get(`${baseURL}/meal_types`, {
							withCredentials: true,
						}),
						axios.get(`${baseURL}/world_cuisines`, {
							withCredentials: true,
						}),
					]);
                // Sätter hämtad data i state
				setCategories(categoriesRes.data);
				setMealTypes(mealTypesRes.data);
				setWorldCuisines(worldCuisinesRes.data);
			} catch (err) {
				console.error("Error fetching dropdown data:", err);
			}
		};

		fetchData();
	}, []);

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
			!imageFile ||
			!nutrition ||
			ingredients.length === 0 ||
			instructions.length === 0
		) {
			alert("Please fill out all fields before submitting.");
			return;
		}
		console.log(instructions);

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
			formData.append("recipe_image", imageFile);
			formData.append("nutrition", JSON.stringify(nutrition)); // Add nutrition
			formData.append("ingredients", JSON.stringify(ingredients));
			formData.append("instructions", JSON.stringify(instructions));
			formData.append("sharing_option", sharingOption);

			// Skickar uppdaterat recept till backend
			const response = await axios.post(
				`${baseURL}/recipes/add`,
				formData,
				{
					withCredentials: true,
					headers: {
						"Content-Type": "multipart/form-data",
					},
				}
			);

			alert("Recipe added successfully!");
			console.log(response.data); //Logga svar för felsökning
		} catch (error) {
			console.error("Error submitting recipe:", error);
			alert("There was an error adding the recipe. Please try again.");
		}
	};

	return (
		<div className="grid grid-cols-12 gap-x-4 py-12">
			<div className="col-start-2 col-span-10">
				<div>
					<HeadingWithLine text="Create your own recipe" />
				</div>

				<form onSubmit={handleSubmit} className="grid gap-6">
					{/* Formulär för tilläggning av recept*/}
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

						{/* Recept beskrivning */}
						<div className="relative">
							<label className="block font-semibold mb-2">
								Describe your recipe
							</label>
							<textarea
								value={description}
								onChange={(e) => setDescription(e.target.value)}
								placeholder="Write your recipe description"
								className="w-full border placeholder-black/30 rounded-lg p-2"
								rows="4"
							></textarea>
							<span className="absolute bottom-4 right-4 text-xs text-gray-500 ">
								(max 100 characters)
							</span>
						</div>

						{/* Poritonstorlek och tid*/}
						<div className="w-1/2 grid grid-rows-2 gap-4">
							<div>
								<label className="block font-semibold mb-2">
									Serving Size
								</label>
								<input
									type="number"
									min="1"
									value={servingSize}
									onChange={(e) =>
										setServingSize(e.target.value)
									}
									placeholder="e.g. 4"
									className="w-full border placeholder-black/30 rounded-lg p-2"
								/>
							</div>
							<div>
								<label className="block font-semibold mb-2">
									Cooking Time (min)
								</label>
								<input
									type="number"
									min="0"
									value={cookingTime}
									onChange={(e) =>
										setCookingTime(e.target.value)
									}
									placeholder="e.g. 30"
									className="w-full border placeholder-black/30 rounded-lg p-2"
								/>
							</div>
						</div>
						{/* Ingredienser sektion */}
						<div className="space-y-10">
							<Ingredients
								ingredients={ingredients}
								setIngredients={setIngredients}
							/>
						</div>
						{/* Näringsinformation */}
						<div className="space-y-4">
							<NutritionInformation
								ingredients={ingredients}
								setNutrition={setNutrition} 
							/>
						</div>
						{/* Instuktioner */}
						<div className="space-y-10">
							<StepInstructions
								instructions={instructions}
								setInstructions={setInstructions}
							/>
						</div>
						{/* Kategori dropdown */}
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

						{/* Måltidstyp dropdown */}
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
									setSelectedWorldCuisine(e.target.value)
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
						{/* Delnings alternativ */}
						<div>
							<SharingOptions
								selectedOption={sharingOption}
								onChange={handleSharingChange}
							/>
						</div>
						{/* Submit-knapp */}
						<div>
							<Button size="mediumMoreWidth" type="submit">
								Post Recipe
							</Button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}

export default CreateRecipePage;
