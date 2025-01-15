import express from "express";
import pool from "../config/db.js"; // Ensure this imports your database configuration
import multer from "multer";
import path from "path";
import authenticateUser from "../middleware/authenticate.js";

const router = express.Router();

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, "uploads/");
	},
	filename: function (req, file, cb) {
		const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
		const extension = path.extname(file.originalname);
		cb(null, file.fieldname + "-" + uniqueSuffix + extension);
	},
});

// Configure multer for image uploads
const upload = multer({
	storage,
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

// Get user profile data
router.get("/", authenticateUser, async (req, res) => {
	try {
		const userId = req.user.id; // Ensure `req.user` is populated via middleware
		const profileData = await pool.query(
			"SELECT id, first_name, last_name, email, profile_picture_url, bio FROM users WHERE id = $1",
			[userId]
		);

		if (profileData.rows.length === 0) {
			return res.status(404).json({ message: "Profile not found" });
		}

		res.json(profileData.rows[0]);
	} catch (err) {
		console.error("Error fetching profile data:", err);
		res.status(500).send("Server error");
	}
});

// Update profile picture
router.put(
	"/picture",
	authenticateUser,
	upload.single("profile_picture"),
	async (req, res) => {
		try {
			if (!req.file) {
				return res.status(400).json({ message: "No file uploaded" });
			}
			const userId = req.user.id;
			const profilePictureUrl = `/uploads/${req.file.filename}`;

			// const profilePictureUrl = `/uploads/profile_pictures/${req.file.filename}`

			await pool.query(
				"UPDATE users SET profile_picture_url = $1 WHERE id = $2",
				[profilePictureUrl, userId]
			);

			res.json({
				message: "Profile picture updated successfully",
				profilePictureUrl,
			});
		} catch (err) {
			console.error("Error updating profile picture:", err);
			res.status(500).send("Server error");
		}
	}
);

// Update bio
router.put("/bio", authenticateUser, async (req, res) => {
	try {
		const userId = req.user.id; // Assuming authentication middleware sets `req.user`
		const { bio } = req.body;

		// Update the user's bio in the database
		const result = await pool.query(
			"UPDATE users SET bio = $1 WHERE id = $2 RETURNING bio",
			[bio, userId]
		);

		// Respond with the updated bio
		res.json({
			bio: result.rows[0].bio,
		});
	} catch (err) {
		console.error("Error updating bio:", err);
		res.status(500).send("Server error");
	}
});

export default router;
