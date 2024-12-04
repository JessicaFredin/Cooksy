import express from "express";
import bcrypt from "bcrypt";
import pool from "../config/db.js"; // PostgreSQL connection pool
import validator from "validator";

const router = express.Router();

// Register a new user
router.post("/register", async (req, res) => {
	const { first_name, last_name, email, password, confirmPassword } =
		req.body;

	// Input validation
	if (!validator.isEmail(email)) {
		return res.status(400).json({ message: "Invalid email format" });
	}

	if (
		!first_name ||
		!last_name ||
		first_name.length < 2 ||
		last_name.length < 2
	) {
		return res.status(400).json({
			message:
				"Invalid name. Both first and last name must be at least 2 characters long.",
		});
	}

	// Check if passwords match
	if (password !== confirmPassword) {
		return res.status(400).json({ message: "Passwords do not match" });
	}


	if (password.length < 6 || password.length > 20) {
		return res
			.status(400)
			.json({
				message: "Password must be between 6 and 20 characters long",
			});
	}


	try {
		// Check if user already exists
		const userCheck = await pool.query(
			"SELECT * FROM users WHERE email = $1",
			[email.toLowerCase()]
		);
		if (userCheck.rows.length > 0) {
			return res.status(400).json({ message: "User already exists" });
		}

		// Hash the password and save the user
		const hashedPassword = await bcrypt.hash(password, 10);

		// Insert the new user into the database
		const newUser = await pool.query(
			"INSERT INTO users (first_name, last_name, email, password_hash) VALUES ($1, $2, $3, $4) RETURNING id, first_name, last_name, email",
			[first_name, last_name, email.toLowerCase(), hashedPassword]
		);

		res.status(201).json({
			message: "User registered successfully",
			user: newUser.rows[0], // Return the created user's info (exclude password)
		});
	} catch (err) {
		console.error(err);
		res.status(500).json({ message: "Internal server error" });
	}
});

router.post("/login", async (req, res) => {
	const { email, password } = req.body;

	try {
		// Find user by email
		const userCheck = await pool.query(
			"SELECT * FROM users WHERE email = $1",
			[email.toLowerCase()]
		);
		const user = userCheck.rows[0];

		if (!user) {
			return res
				.status(400)
				.json({ message: "Invalid email or password" });
		}

		// Compare the provided password with the stored hashed password
		const isPasswordValid = await bcrypt.compare(password, user.password_hash);
		if (!isPasswordValid) {
			return res
				.status(400)
				.json({ message: "Invalid email or password" });
		}

		// Save user info in session (or send token if using JWT)
		req.login(user, (err) => {
			if (err) return res.status(500).json({ message: "Login failed" });
			res.status(200).json({
				message: "Login successful",
				user: {
					id: user.id,
					first_name: user.first_name,
					last_name: user.last_name,
					email: user.email,
				},
			});
		});
	} catch (err) {
		console.error(err);
		res.status(500).json({ message: "Internal server error" });
	}
});

// Fetch logged-in user
router.get("/user", (req, res) => {
	if (req.isAuthenticated()) {
		res.status(200).json(req.user); // Return the user's data
	} else {
		res.status(401).json({ message: "Not logged in" });
	}
});

// Logout route
router.post("/logout", (req, res) => {
	req.logout((err) => {
		if (err) return res.status(500).json({ message: "Logout failed" });
		req.session.destroy((err) => {
			if (err)
				return res
					.status(500)
					.json({ message: "Failed to clear session" });
			res.status(200).json({ message: "Logged out successfully" });
		});
	});
});



export default router;
