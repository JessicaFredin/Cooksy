import HeadingWithLine from "../components/HeadingWithLine";
import CategoriesCard from "../components/CategoriesCard";
import { useData } from "../contexts/DataContext";

function CategoriesPage() {
	// Hämtar data, laddningsstatus och eventuella fel från DataContext
	const { data, loading, error } = useData();
	console.log(data);
	// Hanterar laddning, fel och ingen data
	if (loading) return <p>Loading...</p>; // Visar en laddningsindikator
	if (error) return <p>Error: {error}</p>; // Visar ett felmeddelande om något går fel
	if (!data) return <p>No data available</p>; // Visar ett meddelande om ingen data finns tillgänglig

	return (
		<div className="grid-layouten grid grid-cols-12 gap-x-4 py-32">
			<div className="col-start-2 col-span-10">
				<HeadingWithLine text="Categories" />
			</div>

			<div className="col-start-2 col-span-10 pb-12 pt-20">
				<HeadingWithLine text="Health & Nutrition" />
			</div>

			<div className="col-start-2 col-span-10 grid grid-cols-2 gap-4 md:grid-cols-3">
				{data.categories.map((category, index) => (
					<CategoriesCard
						key={index}
						img={category.img}
						title={category.name}
					/>
				))}
			</div>

			<div className="col-start-2 col-span-10 pb-12 pt-20">
				<HeadingWithLine text="World Cuisines" />
			</div>

			<div className="col-start-2 col-span-10 grid grid-cols-2 gap-4 md:grid-cols-4">
				{data.worldCuisines.map((worldCuisine, index) => (
					<CategoriesCard
						key={index}
						img={worldCuisine.img}
						title={worldCuisine.name}
					/>
				))}
			</div>

			<div className="col-start-2 col-span-10 pb-12 pt-20">
				<HeadingWithLine text="Dietary Preferences" />
			</div>

			<div className="col-start-2 col-span-10 grid grid-cols-2 gap-4 md:grid-cols-3">
				{data.dietaryPreferences.map((dietaryPreference, index) => (
					<CategoriesCard
						key={index}
						img={dietaryPreference.img}
						title={dietaryPreference.name}
					/>
				))}
			</div>

			<div className="col-start-2 col-span-10 pb-12 pt-20">
				<HeadingWithLine text="Themes" />
			</div>

			<div className="col-start-2 col-span-10 grid grid-cols-2 gap-4 md:grid-cols-3">
				{data.themes.map((theme, index) => (
					<CategoriesCard
						key={index}
						img={theme.img}
						title={theme.name}
					/>
				))}
			</div>
		</div>
	);
}

export default CategoriesPage;
