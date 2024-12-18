// import passport from "passport";
// import pool from "./db.js"; // Ensure the path is correct
// import bcrypt from "bcrypt";
// import { Strategy as GoogleStrategy } from "passport-google-oauth20";

// // Define the Google strategy
// passport.use(
// 	new GoogleStrategy(
// 		{
// 			clientID: process.env.GOOGLE_CLIENT_ID,
// 			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
// 			callbackURL: "http://localhost:5000/auth/google/callback", // Redirect URL
// 		},
// 		async (accessToken, refreshToken, profile, done) => {
// 			try {
// 				const email = profile.emails[0].value;
// 				const name = profile.displayName;

// 				// Check if user exists in the database
// 				const userQuery = await pool.query(
// 					"SELECT * FROM users WHERE email = $1",
// 					[email]
// 				);

// 				if (userQuery.rows.length === 0) {
// 					// Create a new user if not found
// 					const newUserQuery = await pool.query(
// 						"INSERT INTO users (email, first_name) VALUES ($1, $2) RETURNING *",
// 						[email, name]
// 					);
// 					return done(null, newUserQuery.rows[0]);
// 				} else {
// 					return done(null, userQuery.rows[0]);
// 				}
// 			} catch (err) {
// 				return done(err, null);
// 			}
// 		}
// 	)
// );

// // Serialize user
// passport.serializeUser((user, done) => {
// 	done(null, user.id);
// });

// // Deserialize user
// passport.deserializeUser(async (id, done) => {
// 	try {
// 		const userQuery = await pool.query(
// 			"SELECT * FROM users WHERE id = $1",
// 			[id]
// 		);
// 		done(null, userQuery.rows[0]);
// 	} catch (err) {
// 		done(err, null);
// 	}
// });

// export default passport;





import passport from "passport";
import pool from "./db.js";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import dotenv from "dotenv";

dotenv.config();

passport.use(
	new GoogleStrategy(
		{
			clientID: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
			callbackURL: "http://localhost:5000/auth/google/callback",
			scope: ["profile", "email"], // Ensure these scopes
		},
		async (accessToken, refreshToken, profile, done) => {
			try {
				console.log("OAuth Profile Data:", profile);

				const email = profile.emails[0]?.value;
				const firstName = profile.name?.givenName || "";
				const lastName = profile.name?.familyName || "";
				const provider = "google";
				const providerId = profile.id;

				if (!email) {
					throw new Error("Email not provided by Google!");
				}

				// Check if user exists in 'users' table
				let user = await pool.query(
					"SELECT * FROM users WHERE email = $1",
					[email]
				);

				if (!user.rows.length) {
					// Insert new user
					user = await pool.query(
						`INSERT INTO users (email, first_name, last_name) 
                         VALUES ($1, $2, $3) RETURNING *`,
						[email, firstName, lastName]
					);
				}

				const userId = user.rows[0].id;

				// Check if OAuth link exists
				const oauthUser = await pool.query(
					`SELECT * FROM oauth_users WHERE provider = $1 AND provider_id = $2`,
					[provider, providerId]
				);

				if (!oauthUser.rows.length) {
					// Link OAuth to user
					await pool.query(
						`INSERT INTO oauth_users (user_id, provider, provider_id) 
                         VALUES ($1, $2, $3)`,
						[userId, provider, providerId]
					);
				}

				done(null, user.rows[0]);
			} catch (err) {
				console.error("Error in Google Strategy:", err.message);
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
		console.error("Error in deserializeUser:", err.message);
		done(err, null);
	}
});

export default passport;
