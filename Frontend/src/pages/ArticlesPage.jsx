import Blogpost from "../components/Blogpost";
import HeadingWithLine from "../components/HeadingWithLine";
import SearchField from "../components/SearchField";
import { useData } from "../contexts/DataContext";

function ArticelsPage() {
	const { data, loading, error } = useData();

	return (
		<div className="grid-layouten grid grid-cols-12 gap-x-4 py-32">
			<div className="col-start-2 col-span-10 pb-16 lg:col-span-5 lg:col-start-2">
				{/* Rubrik*/}
				<HeadingWithLine className="col-start-2" text="Food and Health: Research & Findings" />
				<h2 className="font-pacifico text-xl pb-5 pt-14">What would you like to read about today?</h2>
				 {/* Sökfält  */}
				<SearchField />
			</div>
			{/* Sektion för att lista artiklar */}
			<div className="col-start-2 col-span-10 grid grid-rows-2 gap-4">
				{/* Mappar igenom artiklarna och renderar Blogpost-komponenter */}
				{data.articles.map((articel, index) => (
					<Blogpost
						key={index}
						image={articel.img}
						title={articel.titel}
						description={articel.description}
						id={index}
					/>
				))}
			</div>
		</div>
	);
}

export default ArticelsPage;