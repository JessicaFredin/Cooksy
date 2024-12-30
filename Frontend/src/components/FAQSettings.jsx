function FAQSettings() {
	const faqItems = [
		{
			question: "How do I upload a recipe?",
			answer: 'To upload a recipe, click the "Add Recipe" button located on the right side of the navigation bar. If you don’t see this button, make sure you are logged in or create an account first.',
		},
		{
			question: "Can I share my recipe with others?",
			answer: 'Yes, you can share your recipe by clicking the "Share" button located at the top of your recipe page. If you don’t see this button, it means your recipe is set to private and cannot be shared.',
		},
		{
			question: "Where can I find my saved recipe?",
			answer: 'You can find your saved recipes by clicking on your profile picture located on the right side of the navigation bar. This will open a menu where you’ll see an option labeled "My Favorite Recipes."',
		},
	];

	return (
		<div className="bg-whiteFull shadow-md rounded-lg p-6">
			<h2 className="text-xl font-semibold mb-6">FAQ</h2>
			<ul className="space-y-6">
				{faqItems.map((item, index) => (
					<li key={index}>
						<h3 className="text-md font-medium mb-2">
							{item.question}
						</h3>
						<p className="text-sm text-gray-600">{item.answer}</p>
					</li>
				))}
			</ul>
		</div>
	);
}

export default FAQSettings;
