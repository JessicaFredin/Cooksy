import passport from "passport";
import pool from "./db.js"; // Ensure the path is correct
import bcrypt from "bcrypt";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";

// Define the Google strategy
passport.use(
	new GoogleStrategy(
		{
			clientID: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
			callbackURL: "http://localhost:5000/auth/google/callback", // Redirect URL
		},
		async (accessToken, refreshToken, profile, done) => {
			try {
				const email = profile.emails[0].value;
				const name = profile.displayName;

				// Check if user exists in the database
				const userQuery = await pool.query(
					"SELECT * FROM users WHERE email = $1",
					[email]
				);

				if (userQuery.rows.length === 0) {
					// Create a new user if not found
					const newUserQuery = await pool.query(
						"INSERT INTO users (email, first_name) VALUES ($1, $2) RETURNING *",
						[email, name]
					);
					return done(null, newUserQuery.rows[0]);
				} else {
					return done(null, userQuery.rows[0]);
				}
			} catch (err) {
				return done(err, null);
			}
		}
	)
);

// Serialize user
passport.serializeUser((user, done) => {
	done(null, user.id);
});

// Deserialize user
passport.deserializeUser(async (id, done) => {
	try {
		const userQuery = await pool.query(
			"SELECT * FROM users WHERE id = $1",
			[id]
		);
		done(null, userQuery.rows[0]);
	} catch (err) {
		done(err, null);
	}
});

export default passport;
