/* Data för fördelar som nutrienterna i receptet inehåller */
function NutritionInfo(){
    const  nutritionData = [
          { name: "Protein", ingredient: "chicken", benefit: "Vital for muscle repair and overall body maintenance." },
          { name: "Vitamin A", ingredient: "paprika", benefit: "Supports vision, immune health, and skin health." },
          { name: "Curcumin", ingredient: "turmeric", benefit: "A powerful anti-inflammatory and antioxidant." },
          { name: "Carbohydrates", ingredient: "rice", benefit: "Provides energy to fuel daily activities." },
          { name: "Selenium", ingredient: "chicken", benefit: "Supports the immune system and has antioxidant properties." },
        ]
    

    return(
        <div className="border-2 border-green-500 rounded-2xl p-4">
            {nutritionData.map((item, index) => (
                <div key={index} className="mb-1">
                    <span className="text-sm font-semibold">{item.name}</span>{" "}
                    <span className="text-sm">({item.ingredient})</span>{" "}
                    <span className="text-sm">- {item.benefit}</span>
                </div>
            ))}
        </div>
    )
}

export default NutritionInfo;