import express from "express";
import pool from "../config/db.js";

const router = express.Router();

// Fetch another user's profile by ID
router.get("/:id", async (req, res) => {
	try {
		const { id } = req.params;

		const userProfile = await pool.query(
			"SELECT id, first_name, last_name, profile_picture_url, bio FROM users WHERE id = $1",
			[id]
		);

		if (userProfile.rows.length === 0) {
			return res.status(404).json({ message: "User not found" });
		}

		res.json(userProfile.rows[0]);
	} catch (err) {
		console.error("Error fetching user profile:", err);
		res.status(500).send("Server error");
	}
});

// // Backend: Get Top Contributors
// router.get("/top-contributors", async (req, res) => {
// 	try {
// 		const result = await pool.query(`
//             SELECT
//                 users.id,
//                 users.first_name || ' ' || users.last_name AS name,
//                 users.profile_picture_url AS profile_image,
//                 COUNT(recipes.id) AS recipe_count
//             FROM users
//             LEFT JOIN recipes ON users.id = recipes.user_id
//             GROUP BY users.id, users.first_name, users.last_name, users.profile_picture_url
//             ORDER BY recipe_count DESC
//             LIMIT 10
//         `);
// 		res.json(result.rows);
// 	} catch (error) {
// 		console.error("Error fetching top contributors:", error); // Detailed logging
// 		res.status(500).json({ error: error.message });
// 	}
// });




export default router;
