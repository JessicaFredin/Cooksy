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

export default router;
