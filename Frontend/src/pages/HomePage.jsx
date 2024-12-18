import SearchField from "../components/SearchField";
import CooksyHatImage from "../assets/images/CooksyHat.png";
import SwooshLine from "../assets/svg/SwooshLine";
import HighlightedHeader from "../components/HighlightedHeader";
import MainIngredient from "../components/MainIngredient";
import Blogpost from "../components/Blogpost";
import HeadingWithLine from "../components/HeadingWithLine";

function HomePage() {
	return (
		<div className="overflow-hidden">
			{/* Grid Background */}
			{/* <div className="absolute inset-0 grid grid-cols-12 gap-4 pointer-events-none opacity-25 w-full">
				<div className="bg-purple-300"></div>
				<div className="bg-purple-300"></div>
				<div className="bg-purple-300"></div>
				<div className="bg-purple-300"></div>
				<div className="bg-purple-300"></div>
				<div className="bg-purple-300"></div>
				<div className="bg-purple-300"></div>
				<div className="bg-purple-300"></div>
				<div className="bg-purple-300"></div>
				<div className="bg-purple-300"></div>
				<div className="bg-purple-300"></div>
				<div className="bg-purple-300"></div>
			</div> */}
			{/* 
			<div className="grid grid-cols-12">
				<div className="relative col-span-12">
					<HighlightedHeader className="w-full">
						Cook, share, and inspire with Cooksy
					</HighlightedHeader>
				</div>
			</div> */}

			{/* <div className="relative mt-20 grid grid-cols-12 gap-6"> */}
			{/* <div className="relative col-start-2 col-span-12 ">
					<HighlightedHeader className="w-full">
						Cook, share, and inspire with Cooksy
					</HighlightedHeader>
					<div className="flex items-center md:me-16 md:col-span-5 md:col-start-2 sm:col-start-1 sm:col-span-10 sm:me-0 w-full">
						<div className="text-center sm:text-left w-1/2 my-3">
							<SearchField />
						</div>
					</div>
				</div> */}

			<div className="relative mt-20 grid grid-cols-12 gap-6">
				<div className="relative col-start-2 col-span-6">
					<HighlightedHeader />
					<div className="flex items-center w-full">
						<div className="text-center sm:text-left w-full my-3">
							<SearchField />
						</div>
					</div>
                </div>
                
              

				<div className="flex items-center justify-center col-start-8 col-span-4">
					<img
						src={CooksyHatImage}
						alt="Cooksy Hat"
						className="w-full md:w-5/6 sm:w-2/3 h-auto"
					/>
				</div>

				{/* <div className="flex items-center justify-center md:col-start-8 md:col-span-4 sm:col-start-1 sm:col-span-10">
					<img
						src={CooksyHatImage}
						alt="Cooksy Hat"
						className="md:w-5/6 sm:w-2/3 h-auto "
					/>
				</div> */}
			</div>

			<div className="w-full">
				<SwooshLine />
			</div>
			<div className="grid-layouten grid grid-cols-12 gap-x-4 py-32">
				<div className="col-start-2 pb-10">
					<HeadingWithLine text="MainIngredient"/>
				</div>
				
				<div className="col-start-2 col-span-10 grid grid-cols-2 gap-4 md:grid-cols-4">
					<MainIngredient/>
			     	<MainIngredient/>
				    <MainIngredient/>
		    		<MainIngredient/>
		    	</div>
				<div className="col-start-2 col-span-10 py-10">
					<HeadingWithLine text="Food and Health: Research & Findings"/>
				</div>

				<div className="col-start-2 col-span-10 grid grid-rows-2 gap-4">
					<Blogpost/>
			     	<Blogpost/>
		    	</div>
			
			</div>
		</div>
	);
}

export default HomePage;
