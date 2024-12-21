import React from "react";

const SpecificRecipePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-green-600">Cooky</h1>
          <nav>
            <ul className="flex gap-4">
              <li className="text-gray-600 hover:text-green-600 cursor-pointer">Home</li>
              <li className="text-gray-600 hover:text-green-600 cursor-pointer">Recipes</li>
              <li className="text-gray-600 hover:text-green-600 cursor-pointer">Categories</li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-4">
        {/* Recipe Header */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <img
              src="https://via.placeholder.com/800x400"
              alt="Recipe"
              className="rounded-lg object-cover w-full"
            />
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Curry Chicken with Paprika Rice</h2>
            <p className="text-gray-600 mb-4">
              A delicious and hearty dish packed with flavor and nutrients.
            </p>
            <button className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">
              Rate this Recipe
            </button>
          </div>
        </section>

        {/* Ingredients and Instructions */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-4">Ingredients</h3>
            <ul className="list-disc ml-6">
              <li>Chicken</li>
              <li>Rice</li>
              <li>Paprika</li>
              <li>Onions</li>
              <li>Garlic</li>
            </ul>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-4">Instructions</h3>
            <ol className="list-decimal ml-6">
              <li>Cook the rice as per the instructions.</li>
              <li>Prepare the chicken and paprika.</li>
              <li>Sauté onions and garlic until golden brown.</li>
              <li>Combine all ingredients and simmer.</li>
              <li>Serve hot with freshly chopped parsley.</li>
            </ol>
          </div>
        </section>

        {/* Similar Recipes */}
        <section className="mb-8">
          <h3 className="text-lg font-bold mb-4">Similar Recipes</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-md p-4">
              <img
                src="https://via.placeholder.com/200"
                alt="Recipe"
                className="rounded-lg object-cover mb-4"
              />
              <h4 className="font-bold text-gray-800">Recipe Name</h4>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <img
                src="https://via.placeholder.com/200"
                alt="Recipe"
                className="rounded-lg object-cover mb-4"
              />
              <h4 className="font-bold text-gray-800">Recipe Name</h4>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Cooky. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default SpecificRecipePage;