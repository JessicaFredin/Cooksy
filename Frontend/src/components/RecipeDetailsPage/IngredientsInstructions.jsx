import { useState, useEffect } from "react";
import Cloche from "../../assets/images/NewsletterCardImg.png"


function IngredientsInstructions() {
  const instructions = [
    "Cook rice according to instructions on the package.",
    "Peel and finely chop the onion and shred the pepper.",
    "Add cream, creme fraiche, chicken stock and soy. Let the chicken stew simmer on medium heat for about 10 minutes. Season to taste with salt and pepper.",
    "Heat a frying pan with oil and brown the chicken strips with curry and paprika powder so that the chicken gets a nice colour. Add onion and paprika and fry for another 2 minutes.",
    "Serve the chicken stew with rice."
  ];

  const ingredients = [
    { volume: "1", unit: "tbsp", name: "Rapeseed oil" },
    { volume: "1/5", unit: "tsp", name: "Black pepper ground" },
    { volume: "2", unit: "dl", name: "Jasmine rice" },
    { volume: "1/5", unit: "tsp", name: "Salt" },
    { volume: "1", unit: "tbsp", name: "Paprika seasoning" },
    { volume: "550", unit: "g", name: "Shredded chicken" },
    { volume: "1", unit: "pc", name: "Red onion" },
    { volume: "3", unit: "dl", name: "Whipped cream" },
    { volume: "1", unit: "dl", name: "Creme Fraiche Natural" }
  ];

  const [completedIngredients, setCompletedIngredients] = useState([]);
  const [completedInstructions, setCompletedInstructions] = useState([]);
  const [activeTab, setActiveTab] = useState("ingredients"); // Default to "ingredients"
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  // Uppdatera skärmstorleken vid ändring
  useEffect(() => {
    const handleResize = () => {
      const desktop = window.innerWidth >= 768;
      setIsDesktop(desktop);

      // Om skärmen blir stor, se till att båda sektionerna visas
      if (desktop) {
        setActiveTab(""); // Töm `activeTab` så båda sektionerna visas
      } else {
        // Om vi växlar till mobil, visa standardtabben (ingredients)
        setActiveTab((prev) => (prev === "" ? "ingredients" : prev));
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleCompletion = (type, index) => {
    if (type === "ingredients") {
      setCompletedIngredients((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
      );
    } else if (type === "instructions") {
      setCompletedInstructions((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
      );
    }
  };

  return (
    <div>
      {/* Wrapper för att hantera layout */}
      <div className="flex flex-col md:flex-row">
        {/* Knapparna, döljs vid md-skärmstorlek */}
        {!isDesktop && (
          <div className="flex justify-center p-4">
            <button
              onClick={() => setActiveTab("ingredients")}
              className={`font-medium px-10 py-2 rounded-l-2xl border-2 border-green-200 ${
                activeTab === "ingredients" ? "bg-green-400" : "bg-green-300"
              }`}
            >
              Ingredients
            </button>
            <button
              onClick={() => setActiveTab("instructions")}
              className={`font-medium px-10 py-2 rounded-r-2xl border-2 border-green-200 ${
                activeTab === "instructions" ? "bg-green-400" : "bg-green-300"
              }`}
            >
              Instructions
            </button>
          </div>
        )}

        {/* Ingredients Section */}
        {(isDesktop || activeTab === "ingredients") && (
          <div className="bg-green-100 py-6 px-10 flex-1 rounded-2xl">
            <h3 className="text-2xl font-semibold mb-5">Ingredients</h3>
            <ul className="text-sm text-gray-700 space-y-5">
              {ingredients.map((item, index) => (
                <li key={index} className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-3 h-7 w-7 rounded border-gray-300 focus:ring-pink-500"
                    checked={completedIngredients.includes(index)}
                    onChange={() => toggleCompletion("ingredients", index)}
                  />
                  <span
                    className={`mr-4 text-lg leading-5 text-gray-800 ${
                      completedIngredients.includes(index) ? "line-through text-zinc-500" : ""
                    }`}
                  >
                    {item.volume} {item.unit}
                  </span>
                  <span
                    className={`text-lg leading-5 text-gray-800 ${
                      completedIngredients.includes(index) ? "line-through text-zinc-500" : ""
                    }`}
                  >
                    {item.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Instructions Section */}
        {(isDesktop || activeTab === "instructions") && (
          <div className="bg-green-400 py-2 px-10 flex-1 md:bg-white">
            <h3 className="text-2xl font-semibold mt-4 mb-5">Instructions</h3>
            <ul className="space-y-4">
              {instructions.map((instruction, index) => (
                <li key={index} className="flex items-start">
                  <input
                    type="checkbox"
                    className="mr-3 h-6 w-6 rounded border-gray-300 focus:ring-pink-500"
                    checked={completedInstructions.includes(index)}
                    onChange={() => toggleCompletion("instructions", index)}
                  />
                  <span
                    className={`text-lg text-gray-800 ${
                      completedInstructions.includes(index) ? "line-through text-zinc-500" : ""
                    }`}
                  >
                    {instruction}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex justify-start">
              <img src={Cloche} alt="Done!" className="w-12 h-10 lg:w-16 lg:h-14" />
              <h5 className="text-xl font-semibold flex items-end">Done!</h5>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default IngredientsInstructions;
