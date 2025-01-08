import express from "express";
import pool from "../config/db.js"; // Ensure this imports your database configuration
import authenticateUser from "../middleware/authenticate.js";
import multer from "multer";
import path from "path";
import fs from "fs";

const router = express.Router();

// --------------------- GET Public Recipes (No Auth Required) ---------------------
router.get("/", async (req, res) => {
	try {
		// We join categories & meal_types & users so we get everything in one query.
		const result = await pool.query(`
      SELECT
        recipes.id,
        recipes.user_id,
        recipes.category_id,
        categories.name AS category_name,
        recipes.meal_type_id,
        meal_types.name AS meal_type_name,
        recipes.world_cuisine_id,
        recipes.description,
        recipes.title,
        recipes.image_url,
        recipes.serving_size,
        recipes.cooking_time_minutes,
        recipes.protein,
        recipes.carbs,
        recipes.fat,
        recipes.energy_kj,
        recipes.energy_kcal,
        recipes.is_public,
        users.first_name,
        users.last_name,
        users.profile_picture_url
      FROM recipes
      JOIN categories ON categories.id = recipes.category_id
      JOIN meal_types ON meal_types.id = recipes.meal_type_id
      JOIN users ON users.id = recipes.user_id
      WHERE recipes.is_public = true
      ORDER BY recipes.id ASC
    `);

		res.json(result.rows); // Array of recipe objects
	} catch (err) {
		console.error("Error fetching recipes:", err);
		res.status(500).send("Server error");
	}
});

// router.get("/:id", async (req, res) => {
// 	const { id } = req.params;

// 	try {
// 		const recipeQuery = `
//             SELECT
//                 recipes.*,
//                 users.first_name,
//                 users.last_name,
//                 users.profile_picture_url
//             FROM recipes
//             LEFT JOIN users ON recipes.user_id = users.id
//             WHERE recipes.id = $1
//         `;

// 		const recipeResult = await pool.query(recipeQuery, [id]);

// 		if (!recipeResult.rows.length) {
// 			return res.status(404).json({ error: "Recipe not found" });
// 		}

// 		const recipe = recipeResult.rows[0];
// 		res.json(recipe);
// 	} catch (error) {
// 		console.error("Error fetching recipe:", error.message); // Log detailed error
// 		res.status(500).send("Server error");
// 	}
// });

router.get("/:id", async (req, res) => {
	try {
		const { id } = req.params;

		// Fetch recipe details
		const recipeQuery = `
            SELECT
			  recipes.*,
			  users.first_name AS user_first_name,
			  users.last_name AS user_last_name,
			  users.profile_picture_url AS user_profile_picture,
			  categories.name AS category_name
			FROM recipes
			LEFT JOIN users 
			  ON recipes.user_id = users.id
			LEFT JOIN categories
			  ON recipes.category_id = categories.id
			WHERE recipes.id = $1
        `;
		const recipeResult = await pool.query(recipeQuery, [id]);

		if (!recipeResult.rows.length) {
			return res.status(404).json({ error: "Recipe not found" });
		}

		// Fetch ingredients
		const ingredientsQuery = `
            SELECT 
				recipes_ingredients.spoonacular_ingredient_id,
				recipes_ingredients.ingredient_name,
                recipes_ingredients.amount, 
                recipes_ingredients.unit
            FROM recipes_ingredients
            WHERE recipes_ingredients.recipe_id = $1
        `;
		const ingredientsResult = await pool.query(ingredientsQuery, [id]);

		// Fetch instructions
		const instructionsQuery = `
            SELECT 
                instruction_text AS text, 
                instruction_order AS "order"
            FROM instructions
            WHERE recipe_id = $1
            ORDER BY instruction_order ASC
        `;
		const instructionsResult = await pool.query(instructionsQuery, [id]);

		// Combine all data into a single response
		const recipe = recipeResult.rows[0];
		recipe.ingredients = ingredientsResult.rows.map((ingredient) => ({
			spoonacular_id: ingredient.spoonacular_ingredient_id,
			ingredient_name: ingredient.ingredient_name,
			amount: ingredient.amount,
			unit: ingredient.unit,
		}));
		recipe.instructions = instructionsResult.rows;

		res.json(recipe);
	} catch (error) {
		console.error("Error fetching recipe:", error.message); // Log detailed error
		res.status(500).send("Server error");
	}
});

router.get("/:id/ratings", async (req, res) => {
	try {
		const { id } = req.params;

		const result = await pool.query(
			`
			SELECT 
				COALESCE(AVG(rating), 0) AS average_rating, 
				COUNT(rating) AS review_count
			FROM ratings
			WHERE recipe_id = $1
		`,
			[id]
		);

		res.json(result.rows[0]);
	} catch (err) {
		console.error("Error fetching ratings:", err);
		res.status(500).send("Server error");
	}
});

router.post("/:id/rate", authenticateUser, async (req, res) => {
	try {
		const { id } = req.params;
		const { rating } = req.body;
		const userId = req.user.id;

		if (rating < 1 || rating > 5) {
			return res
				.status(400)
				.json({ error: "Rating must be between 1 and 5." });
		}

		await pool.query(
			`
			INSERT INTO ratings (user_id, recipe_id, rating)
			VALUES ($1, $2, $3)
			ON CONFLICT (user_id, recipe_id)
			DO UPDATE SET rating = $3
		`,
			[userId, id, rating]
		);

		// Return the updated average rating and review count
		const updatedResult = await pool.query(
			`
			SELECT 
				COALESCE(AVG(rating), 0) AS average_rating, 
				COUNT(rating) AS review_count
			FROM ratings
			WHERE recipe_id = $1
		`,
			[id]
		);

		res.json(updatedResult.rows[0]);
	} catch (err) {
		console.error("Error adding/updating rating:", err);
		res.status(500).send("Server error");
	}
});

// Configure multer for recipe image uploads
const recipeStorage = multer.diskStorage({
	destination: function (req, file, cb) {
		const uploadDir = "uploads/recipes/"; // Path for saving recipe images

		// Check if the directory exists; if not, create it
		if (!fs.existsSync(uploadDir)) {
			fs.mkdirSync(uploadDir, { recursive: true });
		}

		cb(null, uploadDir); // Save recipe images in the directory
	},
	filename: function (req, file, cb) {
		const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
		const extension = path.extname(file.originalname);
		cb(null, file.fieldname + "-" + uniqueSuffix + extension);
	},
});

const recipeUpload = multer({
	storage: recipeStorage,
	fileFilter: (req, file, cb) => {
		const allowedTypes = /jpeg|jpg|png|gif/;
		const extname = allowedTypes.test(
			path.extname(file.originalname).toLowerCase()
		);
		const mimetype = allowedTypes.test(file.mimetype);

		if (extname && mimetype) {
			return cb(null, true);
		} else {
			cb(new Error("Only images are allowed"));
		}
	},
});

// Add Recipe Route with Image Upload
router.post(
	"/add",
	authenticateUser,
	recipeUpload.single("recipe_image"), // Middleware to handle the file upload
	async (req, res) => {
		try {
			const {
				title,
				description,
				serving_size,
				cooking_time_minutes,
				category_id,
				meal_type_id,
				world_cuisine_id,
				ingredients,
				instructions,
				sharing_option,
				nutrition, // Nutrition info from frontend
			} = req.body;

			const userId = req.user.id; // Authenticated user ID

			// Check if an image was uploaded
			const imageUrl = req.file
				? `/uploads/recipes/${req.file.filename}`
				: null;

			// Validate instructions
			const parsedInstructions = JSON.parse(instructions || "[]");
			if (
				!parsedInstructions.length ||
				parsedInstructions.some((inst) => !inst.text.trim())
			) {
				return res.status(400).json({
					error: "At least one valid instruction is required.",
				});
			}

			// Validate nutrition info
			const parsedNutrition = JSON.parse(nutrition || "{}");
			const { protein, carbs, fat, energy } = parsedNutrition;

			// Get isPublic status
			const isPublic = sharing_option === "public" ? true : false;

			// Insert the recipe into the recipes table
			const recipeResult = await pool.query(
				`INSERT INTO recipes 
                (user_id, title, description, image_url, serving_size, cooking_time_minutes, category_id, meal_type_id, world_cuisine_id, protein, carbs, fat, energy_kj, energy_kcal, is_public) 
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15) RETURNING id`,
				[
					userId,
					title,
					description,
					imageUrl,
					serving_size,
					cooking_time_minutes,
					category_id,
					meal_type_id,
					world_cuisine_id,
					protein,
					carbs,
					fat,
					energy * 4.18,
					energy,
					isPublic,
				]
			);

			const recipeId = recipeResult.rows[0].id;

			// Insert ingredients into recipes_ingredients table
			if (ingredients && ingredients.length > 0) {
				for (const ingredient of JSON.parse(ingredients)) {
					await pool.query(
						`INSERT INTO recipes_ingredients (recipe_id, spoonacular_ingredient_id, amount, unit, ingredient_name)
                        VALUES ($1, $2, $3, $4, $5)`,
						[
							recipeId,
							ingredient.id, // spoonacular_ingredient_id
							ingredient.volume, // amount
							ingredient.unit, // unit
							ingredient.name, // name
						]
					);
				}
			}

			// Insert instructions into instructions table
			for (const [index, instruction] of parsedInstructions.entries()) {
				await pool.query(
					`INSERT INTO instructions (recipe_id, instruction_text, instruction_order)
                    VALUES ($1, $2, $3)`,
					[recipeId, instruction.text, index + 1]
				);
			}

			// Return success response
			res.status(201).json({
				message: "Recipe added successfully",
				recipeId,
			});
		} catch (err) {
			console.error("Error adding recipe:", err);
			res.status(500).send("Server error");
		}
	}
);

export default router;
