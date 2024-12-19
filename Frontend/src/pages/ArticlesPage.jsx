import Blogpost from "../components/Blogpost";
import HeadingWithLine from "../components/HeadingWithLine";
import SearchField from "../components/SearchField";

function ArticelsPage() {
	return (
        <div className="grid-layouten grid grid-cols-12 gap-x-4 py-32">
            <div className="col-start-2 col-span-10 pb-16 lg:col-span-5 lg:col-start-2">
				<HeadingWithLine className="col-start-2" text="Food and Health: Research & Findings"/>
                <h2 className="font-pacifico text-xl pb-5 pt-14">What would you like to read about today?</h2>
                <SearchField />
			</div>
				<div className="col-start-2 col-span-10 grid grid-rows-2 gap-4">
					<Blogpost/>
			     	<Blogpost/>
                    <Blogpost/>
			     	<Blogpost/>
		    	</div>
			</div>
	);
}

export default ArticelsPage;
