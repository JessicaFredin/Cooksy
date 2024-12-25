import express from "express";
import pool from "../config/db.js"; // Ensure this imports your database configuration
import authenticateUser from "../middleware/authenticate.js";

const router = express.Router();

// Route to get all categories
router.get("/categories", authenticateUser, async (req, res) => {
	try {
		const result = await pool.query("SELECT * FROM categories");
		res.json(result.rows);
	} catch (err) {
		console.error("Error fetching categories:", err);
		res.status(500).send("Server error");
	}
});

// Route to get all world cuisines
router.get("/world_cuisines", authenticateUser, async (req, res) => {
	try {
		const result = await pool.query("SELECT * FROM world_cuisines");
		res.json(result.rows);
	} catch (err) {
		console.error("Error fetching world cuisines:", err);
		res.status(500).send("Server error");
	}
});

// Route to get all meal types
router.get("/meal_types", authenticateUser, async (req, res) => {
	try {
		const result = await pool.query("SELECT * FROM meal_types");
		res.json(result.rows);
	} catch (err) {
		console.error("Error fetching meal types:", err);
		res.status(500).send("Server error");
	}
});

// Import multer, path, and fs at the top if not already included
import multer from "multer";
import path from "path";
import fs from "fs";

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
						`INSERT INTO recipes_ingredients (recipe_id, spoonacular_ingredient_id, amount, unit)
                        VALUES ($1, $2, $3, $4)`,
						[
							recipeId,
							ingredient.id, // spoonacular_ingredient_id
							ingredient.volume, // amount
							ingredient.unit, // unit
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
