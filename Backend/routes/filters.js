import express from "express";
import pool from "../config/db.js"; // Ensure this imports your database configuration

const router = express.Router();

// Route to get distinct filter options dynamically
router.get("/", async (req, res) => {
	try {
		const mealTypesQuery = await pool.query(
			"SELECT DISTINCT name FROM meal_types"
		);
		const worldCuisinesQuery = await pool.query(
			"SELECT DISTINCT name FROM world_cuisines"
		);
		const categoriesQuery = await pool.query(
			"SELECT DISTINCT name FROM categories"
		);

		const filters = {
			"Calories (per portion)": [
				"0-100 kcal",
				"100-200 kcal",
				"200-400 kcal",
				"400-600 kcal",
				"600-800 kcal",
				"800+ kcal",
			],
			Time: [
				"0-30 min",
				"31-60 min",
				"61-90 min",
				"91-120 min",
				"121-150 min",
				"150+ min",
			],
			"Meal Type": mealTypesQuery.rows.map((row) => row.name),
			Diet: ["Vegan", "Vegetarian", "Keto", "Paleo"],
			"Protein Type": [
				"Chicken",
				"Beef",
				"Fish",
				"Lentils",
				"Seafood",
				"Egg",
				"Lamb",
			],
			"Recipes Without": [
				"Dairy",
				"Eggs",
				"Nuts",
				"Gluten",
				"Fish",
				"Seeds",
				"Flour",
				"Milk",
				"Cheese",
				"Sugar",
				"Soy",
				"Cream",
			],
			"World Cuisine": worldCuisinesQuery.rows.map((row) => row.name),
			Category: categoriesQuery.rows.map((row) => row.name),
		};

		res.status(200).json(filters);
	} catch (err) {
		console.error("Error fetching filters:", err);
		res.status(500).json({ message: "Server Error" });
	}
});

// Route to get filtered recipes
router.get("/recipes", async (req, res) => {
	const { mealType, cuisine, category, maxCalories, maxTime } = req.query;

	try {
		let query = `SELECT * FROM recipes WHERE is_public = true`;
		const values = [];

		if (mealType) {
			query += ` AND meal_type_id = (SELECT id FROM meal_types WHERE name = $${
				values.length + 1
			})`;
			values.push(mealType);
		}

		if (cuisine) {
			query += ` AND world_cuisine_id = (SELECT id FROM world_cuisines WHERE name = $${
				values.length + 1
			})`;
			values.push(cuisine);
		}

		if (category) {
			query += ` AND category_id = (SELECT id FROM categories WHERE name = $${
				values.length + 1
			})`;
			values.push(category);
		}

		if (maxCalories) {
			query += ` AND energy_kcal <= $${values.length + 1}`;
			values.push(maxCalories);
		}

		if (maxTime) {
			query += ` AND cooking_time_minutes <= $${values.length + 1}`;
			values.push(maxTime);
		}

		const filteredRecipes = await pool.query(query, values);

		res.status(200).json(filteredRecipes.rows);
	} catch (err) {
		console.error("Error filtering recipes:", err);
		res.status(500).json({ message: "Server Error" });
	}
});

// Route to get the number of filtered recipes (without applying)
router.get("/recipes/count", async (req, res) => {
    const { mealType, cuisine, category, maxCalories, maxTime } = req.query;

    try {
        let query = `SELECT COUNT(*) FROM recipes WHERE is_public = true`;
        const values = [];

        if (mealType) {
            query += ` AND meal_type_id = (SELECT id FROM meal_types WHERE name = $${values.length + 1})`;
            values.push(mealType);
        }

        if (cuisine) {
            query += ` AND world_cuisine_id = (SELECT id FROM world_cuisines WHERE name = $${values.length + 1})`;
            values.push(cuisine);
        }

        if (category) {
            query += ` AND category_id = (SELECT id FROM categories WHERE name = $${values.length + 1})`;
            values.push(category);
        }

        if (maxCalories) {
            query += ` AND energy_kcal <= $${values.length + 1}`;
            values.push(maxCalories);
        }

        if (maxTime) {
            query += ` AND cooking_time_minutes <= $${values.length + 1}`;
            values.push(maxTime);
        }

        const result = await pool.query(query, values);
        res.status(200).json({ count: result.rows[0].count });
    } catch (err) {
        console.error("Error fetching count:", err);
        res.status(500).json({ message: "Server Error" });
    }
});


export default router;
