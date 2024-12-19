import express from "express";
import bcrypt from "bcrypt";
import pool from "../config/db.js"; // PostgreSQL connection pool
import validator from "validator";
import passport from "passport";
import crypto from "crypto";
import nodemailer from "nodemailer";
import authenticateUser from "../middleware/authenticate.js";

const router = express.Router();

// Updated /register route
router.post("/register", async (req, res) => {
	const { first_name, last_name, email, password, confirmPassword } =
		req.body;

	// Input validation
	if (!validator.isEmail(email)) {
		return res.status(400).json({ message: "Invalid email format" });
	}
	if (password !== confirmPassword) {
		return res.status(400).json({ message: "Passwords do not match" });
	}
	if (password.length < 6 || password.length > 20) {
		return res
			.status(400)
			.json({ message: "Password must be 6-20 characters" });
	}

	try {
		const hashedPassword = await bcrypt.hash(password, 10);

		// Check if user already exists
		const userCheck = await pool.query(
			"SELECT * FROM users WHERE email = $1",
			[email.toLowerCase()]
		);
		if (userCheck.rows.length > 0) {
			return res.status(400).json({ message: "User already exists" });
		}

		// Insert user into DB
		const newUser = await pool.query(
			"INSERT INTO users (first_name, last_name, email, password_hash, is_verified) VALUES ($1, $2, $3, $4, $5) RETURNING id, email",
			[first_name, last_name, email.toLowerCase(), hashedPassword, false]
		);

		// Generate verification code
		const verificationCode = Math.floor(
			100000 + Math.random() * 900000
		).toString();

		const verificationCode_hash = await bcrypt.hash(verificationCode, 10);

		// Save verification code to DB
		await pool.query(
			"INSERT INTO email_verifications (email, code_hash, expires_at) VALUES ($1, $2, NOW() + INTERVAL '15 minutes')",
			[newUser.rows[0].email, verificationCode_hash]
		);

		// Send verification email
		const transporter = nodemailer.createTransport({
			host: process.env.EMAIL_HOST,
			port: process.env.EMAIL_PORT,
			auth: {
				user: process.env.EMAIL_USER,
				pass: process.env.EMAIL_PASSWORD,
			},
		});

		await transporter.sendMail({
			from: process.env.EMAIL_FROM,
			to: email,
			subject: "Email Verification",
			text: `Your verification code is: ${verificationCode}`,
		});

		res.status(201).json({
			message: "User registered. Verify your email.",
		});
	} catch (err) {
		console.error("Error during registration:", err); // Log the error
		res.status(500).json({
			message: err.message || "Internal server error",
		});
	}
});

// Verify the code
router.post("/verify-code", async (req, res) => {
	const { email, code } = req.body;

	try {
		const result = await pool.query(
			"SELECT code_hash, expires_at FROM email_verifications WHERE email = $1",
			[email]
		);

		if (result.rows.length === 0) {
			return res
				.status(404)
				.json({ message: "No verification code found" });
		}

		const { code_hash, expires_at } = result.rows[0];
		console.log(code_hash);

		if (new Date() > new Date(expires_at)) {
			return res
				.status(400)
				.json({ message: "Verification code expired" });
		}

		const isCodeValid = await bcrypt.compare(code, code_hash);
		if (!isCodeValid) {
			return res
				.status(400)
				.json({ message: "Invalid verification code" });
		}

		await pool.query(
			"UPDATE users SET is_verified = true WHERE email = $1",
			[email]
		);

		await pool.query("DELETE FROM email_verifications WHERE email = $1", [
			email,
		]);

		res.status(200).json({ message: "Email successfully verified" });
	} catch (error) {
		console.error("Error verifying code:", error);
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
		const isPasswordValid = await bcrypt.compare(
			password,
			user.password_hash
		);
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
// router.get("/user", (req, res) => {
// 	if (req.isAuthenticated()) {
// 		res.status(200).json(req.user); // Return the user's data
// 	} else {
// 		res.status(401).json({ message: "Not logged in" });
// 	}
// });

// // Fetch logged-in user
// router.get("/user", (req, res) => {
// 	if (req.isAuthenticated()) {
// 		const { id, first_name, last_name, email } = req.user;
// 		res.status(200).json({ id, first_name, last_name, email });
// 	} else {
// 		res.status(401).json({ message: "Not logged in" });
// 	}
// });

// // Fetch the authenticated user
// router.get("/user", (req, res) => {
// 	if (req.isAuthenticated()) {
// 		const { id, first_name, last_name, email, profile_picture_url } = req.user;
// 		res.status(200).json({
// 			id,
// 			first_name,
// 			last_name,
// 			email,
// 			profile_picture_url, // Include the profile picture URL
// 		});
// 	} else {
// 		res.status(401).json({ message: "Not logged in" });
// 	}
// });

// Fetch the authenticated user
router.get("/user", authenticateUser, (req, res) => {
	const { id, first_name, last_name, email, profile_picture_url } = req.user;
	res.status(200).json({
		id,
		first_name,
		last_name,
		email,
		profile_picture_url,
	});
});

// Redirect to Google login
router.get(
	"/google",
	passport.authenticate("google", { scope: ["profile", "email"] })
);

// Google callback URL
router.get(
	"/google/callback",
	passport.authenticate("google", {
		failureRedirect: "/login",
	}),
	(req, res) => {
		res.redirect("http://localhost:5173/"); // Redirect to the frontend/home after login
	}
);

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
