import express from "express";
import pool from "../config/db.js";

const router = express.Router();

router.get("/", async (req, res) => {
	try {
		const result = await pool.query(`
            SELECT
                users.id,
                users.first_name || ' ' || users.last_name AS name,
                users.profile_picture_url AS profile_image,
                COUNT(recipes.id) AS recipe_count
            FROM users
            LEFT JOIN recipes ON users.id = recipes.user_id
            GROUP BY users.id, users.first_name, users.last_name, users.profile_picture_url
            ORDER BY recipe_count DESC
            LIMIT 10
        `);
		res.json(result.rows);
	} catch (error) {
		console.error("Error fetching top contributors:", error);
		res.status(500).json({ error: error.message });
	}
});

export default router;
