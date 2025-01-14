import HeadingWithLine from "../components/HeadingWithLine";
import CategoriesCard from "../components/CategoriesCard";

function CategoriesPage() {

    const { categories, worldCuisines, dietaryPreferences, themes } = data

    return (
        <div className="grid-layouten grid grid-cols-12 gap-x-4 py-32">
            <div className="col-start-2 col-span-10">
                <HeadingWithLine text="Categories Categories Categories" />
            </div>

            <div className="col-start-2 col-span-10 pb-12 pt-20">
                <HeadingWithLine text="Health & Nutrition" />
            </div>

            <div className="col-start-2 col-span-10 grid grid-cols-2 gap-4 md:grid-cols-3">
                {categories.map((categorie, index) => (
                    <CategoriesCard img={categorie.img} title={categorie.name} />
                ))}
            </div>

            <div className="col-start-2 col-span-10 pb-12 pt-20">
                <HeadingWithLine className="col-start-2 col-span-10" text="World Cuisines" />
            </div>

            <div className="col-start-2 col-span-10 grid grid-cols-2 gap-4 md:grid-cols-4">
                {worldCuisines.map((worldCuisin, index) => (
                    <CategoriesCard img={worldCuisin.img} title={worldCuisin.name} />
                ))}
            </div>

            <div className="col-start-2 col-span-10 pb-12 pt-20">
                <HeadingWithLine className="col-start-2 col-span-10" text="Dietary Preferences" />
            </div>

            <div className="col-start-2 col-span-10 grid grid-cols-2 gap-4 md:grid-cols-3">
                {dietaryPreferences.map((dietaryPreferenc, index) => (
                    <CategoriesCard img={dietaryPreferenc.img} title={dietaryPreferenc.name} />
                ))}
            </div>

            <div className="col-start-2 col-span-10 pb-12 pt-20">
                <HeadingWithLine className="col-start-2 col-span-10" text="Themes" />
            </div>

            <div className="col-start-2 col-span-10 grid grid-cols-2 gap-4 md:grid-cols-3">
                {themes.map((themes, index) => (
                    <CategoriesCard img={themes.img} title={themes.name} />
                ))}
            </div>
        </div>
    );
}

export default CategoriesPage;