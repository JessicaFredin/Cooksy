import passport from "passport";
import pool from "./db.js"; // PostgreSQL connection
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import dotenv from "dotenv";

dotenv.config();

passport.use(
	new GoogleStrategy(
		{
			clientID: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
			callbackURL: "http://localhost:5000/auth/google/callback", // Redirect URL
		},
		async (accessToken, refreshToken, profile, done) => {
			try {
				// Extract user details from Google's response
				const email = profile.emails?.[0]?.value;
				const firstName = profile.name?.givenName || "";
				const lastName = profile.name?.familyName || "";
				const profilePicture = profile.photos?.[0]?.value || ""; // Fetch profile picture
				const provider = "google";
				const providerId = profile.id;

				if (!email) {
					throw new Error("Email not provided by Google");
				}

				// Step 1: Check if user exists in 'users' table
				let user = await pool.query(
					"SELECT * FROM users WHERE email = $1",
					[email]
				);

				if (!user.rows.length) {
					// Step 2: Insert a new user if not found
					user = await pool.query(
						`INSERT INTO users (email, first_name, last_name, profile_picture_url, is_verified) 
                         VALUES ($1, $2, $3, $4, $5) RETURNING *`,
						[email, firstName, lastName, profilePicture, true]
					);
				} else {
					// Step 3: Update the profile picture if user already exists
					await pool.query(
						`UPDATE users SET profile_picture_url = $1 WHERE email = $2`,
						[profilePicture, email]
					);
				}

				const userId = user.rows[0].id;

				// Step 4: Check if OAuth link already exists
				const oauthUser = await pool.query(
					`SELECT * FROM oauth_users WHERE provider = $1 AND provider_id = $2`,
					[provider, providerId]
				);

				if (!oauthUser.rows.length) {
					// Step 5: Link the user to the OAuth provider
					await pool.query(
						`INSERT INTO oauth_users (user_id, provider, provider_id) 
                         VALUES ($1, $2, $3)`,
						[userId, provider, providerId]
					);
				}

				// Step 6: Pass user to Passport
				done(null, user.rows[0]);
			} catch (err) {
				console.error("Google OAuth error: ", err.message);
				done(err, null);
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
		console.error("Error deserializing user:", err.message);
		done(err, null);
	}
});

export default passport;
