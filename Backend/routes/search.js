import express from "express";
import pool from "../config/db.js";

const router = express.Router();

// Enhanced Search Endpoint for Recipes, Profiles, and Articles
router.get("/:query", async (req, res) => {
	try {
		const { query } = req.params;

		// Validate query input
		if (!query || query.trim() === "") {
			return res.status(400).json({ error: "Search query is required" });
		}

		const searchQuery = `%${query.trim().toLowerCase()}%`;

		// Search Recipes with title, description, and category
		const recipesResult = await pool.query(
			`
            SELECT
                r.id, 
                r.title, 
                r.description, 
                r.image_url, 
                c.name AS category_name,
                r.cooking_time_minutes, 
                r.protein, 
                r.carbs, 
                r.fat,
                COALESCE(AVG(rt.rating), 0) AS average_rating,
                COUNT(DISTINCT cm.id) AS total_comments,
                u.first_name AS user_first_name,     
                u.last_name AS user_last_name,       
                u.profile_picture_url AS user_profile_picture_url 
            FROM recipes r
            LEFT JOIN categories c ON r.category_id = c.id
            LEFT JOIN ratings rt ON rt.recipe_id = r.id
            LEFT JOIN comments cm ON cm.recipe_id = r.id
            LEFT JOIN users u ON r.user_id = u.id 
            WHERE LOWER(r.title) LIKE $1
               OR LOWER(r.description) LIKE $1
               OR LOWER(c.name) LIKE $1
            GROUP BY r.id, c.name, u.first_name, u.last_name, u.profile_picture_url  -- Updated GROUP BY
            ORDER BY r.id ASC;
            `,
			[searchQuery]
		);

		// Search Profiles by first and last name
		const profilesResult = await pool.query(
			`
            SELECT 
                u.id, 
                u.first_name, 
                u.last_name, 
                u.profile_picture_url, 
                u.bio,
                (
                    SELECT COUNT(*) 
                    FROM recipes r 
                    WHERE r.user_id = u.id
                ) AS recipes_count
            FROM users u
            WHERE LOWER(u.first_name) LIKE $1 
               OR LOWER(u.last_name) LIKE $1
            ORDER BY u.first_name ASC;

			`,
			[searchQuery]
		);

		// Search Articles by title, description, and content
		const articlesResult = await pool.query(
			`
			SELECT 
				id, 
				title, 
				description, 
				content, 
				image_url 
			FROM articles 
			WHERE LOWER(title) LIKE $1 
			   OR LOWER(description) LIKE $1
			   OR LOWER(content) LIKE $1
			ORDER BY id ASC;
			`,
			[searchQuery]
		);

		// Return combined search results
		res.status(200).json({
			recipes: recipesResult.rows,
			profiles: profilesResult.rows,
			articles: articlesResult.rows,
		});
	} catch (err) {
		console.error("Search error:", err);
		res.status(500).json({
			error: "Server error, please try again later.",
		});
	}
});

export default router;
