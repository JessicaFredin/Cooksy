import express from "express";
import pool from "../config/db.js"; // Ensure this imports your database configuration
import authenticateUser from "../middleware/authenticate.js";
import multer from "multer";
import path from "path";
import fs from "fs";

const router = express.Router();

// Route to get all categories
router.get("/", authenticateUser, async (req, res) => {
	try {
		const result = await pool.query("SELECT * FROM categories");
		res.json(result.rows);
	} catch (err) {
		console.error("Error fetching categories:", err);
		res.status(500).send("Server error");
	}
});

export default router;
