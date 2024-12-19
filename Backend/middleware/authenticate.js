import pool from "../config/db.js";

const authenticateUser = async (req, res, next) => {
	try {
		if (
			!req.session ||
			!req.session.passport ||
			!req.session.passport.user
		) {
			return res.status(401).json({ message: "Unauthorized" });
		}

		const userId = req.session.passport.user;

		// Fetch user from DB
		const result = await pool.query(
			"SELECT id, first_name, last_name, email, profile_picture_url FROM users WHERE id = $1",
			[userId]
		);

		if (result.rows.length === 0) {
			return res.status(404).json({ message: "User not found" });
		}

		// Attach user data to req.user
		req.user = result.rows[0];
		next();
	} catch (err) {
		console.error("Authentication error:", err);
		res.status(500).json({ message: "Internal server error" });
	}
};

export default authenticateUser;
