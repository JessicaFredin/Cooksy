import HeadingWithLine from "../components/HeadingWithLine";
import CategoriesCard from "../components/CategoriesCard";
import NewsletterCardImg from "../assets/images/CardImg.png"

function CategoriesPage() {
    return (
        // Huvudlayouten för sidan: ett grid som sträcker sig över 12 kolumner och har mellanrum mellan kolumnerna
        <div className="grid-layouten grid grid-cols-12 gap-x-4 py-32">
            <div className="col-start-2 col-span-10">
                {/*Rubrik */}
                <HeadingWithLine className="text-xl" text="Categories" />
            </div>
            <div className="col-start-2 col-span-10 pb-12 pt-20">
                <HeadingWithLine text="Health & Nutrition" />
            </div>
            {/* Renderar 5 kategorikort med bild och titel */} 
            <div className="col-start-2 col-span-10 grid grid-cols-2 gap-4 md:grid-cols-3">
                <CategoriesCard img={NewsletterCardImg} title="Low-Calorie" />
                <CategoriesCard img={NewsletterCardImg} title="Low-Calorie" />
                <CategoriesCard img={NewsletterCardImg} title="Low-Calorie" />
                <CategoriesCard img={NewsletterCardImg} title="Low-Calorie" />
                <CategoriesCard img={NewsletterCardImg} title="Low-Calorie" />
            </div>

            <div className="col-start-2 col-span-10 pb-12 pt-20">
                <HeadingWithLine className="col-start-2 col-span-10" text="World Cuisines" />
            </div>

            <div className="col-start-2 col-span-10 grid grid-cols-2 gap-4 md:grid-cols-4">
                <CategoriesCard img={NewsletterCardImg} title="Low-Calorie" />
                <CategoriesCard img={NewsletterCardImg} title="Low-Calorie" />
                <CategoriesCard img={NewsletterCardImg} title="Low-Calorie" />
                <CategoriesCard img={NewsletterCardImg} title="Low-Calorie" />
            </div>

            <div className="col-start-2 col-span-10 pb-12 pt-20">
                <HeadingWithLine className="col-start-2 col-span-10" text="Dietary Preferences" />
            </div>

            <div className="col-start-2 col-span-10 grid grid-cols-2 gap-4 md:grid-cols-3">
                <CategoriesCard img={NewsletterCardImg} title="Low-Calorie" />
                <CategoriesCard img={NewsletterCardImg} title="Low-Calorie" />
                <CategoriesCard img={NewsletterCardImg} title="Low-Calorie" />
            </div>

            <div className="col-start-2 col-span-10 pb-12 pt-20">
                <HeadingWithLine className="col-start-2 col-span-10" text="Themes" />
            </div>

            <div className="col-start-2 col-span-10 grid grid-cols-2 gap-4 md:grid-cols-3">
                <CategoriesCard img={NewsletterCardImg} title="Low-Calorie" />
                <CategoriesCard img={NewsletterCardImg} title="Low-Calorie" />
                <CategoriesCard img={NewsletterCardImg} title="Low-Calorie" />
            </div>
        </div>
    );
}

export default CategoriesPage;