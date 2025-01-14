

import HeadingWithLine from "../HeadingWithLine";

const FAQ = () => {
	return (
		<div className="grid grid-cols-12 gap-x-4 py-12">
			{/* Rubrik */}
			<div className="col-start-2 col-span-10 mb-8">
				<HeadingWithLine text="FAQ" />
			</div>

			{/* FAQ Innehåll */}
			<div className="col-start-2 col-span-10 space-y-8 text-gray-800">
				<p className="text-lg">
					This FAQ section provides quick answers to common questions
					about Cooksy. By reviewing the FAQs, you'll better
					understand how to use the platform.
				</p>

				<div className="space-y-4">
					<h2 className="text-xl font-bold">
						How do I upload a recipe?
					</h2>
					<p>
						To upload a recipe, click the "Add Recipe" button
						located on the right side of the navigation bar. If you
						don’t see this button, make sure you are logged in or
						create an account first.
					</p>
				</div>

				<div className="space-y-4">
					<h2 className="text-xl font-bold">
						Can I share my recipe with others?
					</h2>
					<p>
						Yes, you can share your recipe by clicking the "Share"
						button located at the top of your recipe page. If you
						don’t see this button, it means your recipe is set to
						private and cannot be shared.
					</p>
				</div>

				<div className="space-y-4">
					<h2 className="text-xl font-bold">
						Where can I find my saved recipe?
					</h2>
					<p>
						You can find your saved recipes by clicking on your
						profile picture located on the right side of the
						navigation bar. This will open a menu where you’ll see
						an option labeled "My Favorite Recipes."
					</p>
				</div>
			</div>
		</div>
	);
};

export default FAQ;
