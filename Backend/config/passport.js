// import passport from "passport";
// import LocalStrategy from "passport-local";

// // Example passport strategy
// passport.use(
// 	new LocalStrategy((username, password, done) => {
// 		// Replace with your authentication logic
// 		if (username === "admin" && password === "password") {
// 			return done(null, { username });
// 		}
// 		return done(null, false, { message: "Invalid credentials" });
// 	})
// );

// passport.serializeUser((user, done) => {
// 	done(null, user.username);
// });

// passport.deserializeUser((username, done) => {
// 	// Replace with logic to fetch user from the database
// 	done(null, { username });
// });




// import passport from "passport";
// import { Strategy as LocalStrategy } from "passport-local";
// import bcrypt from "bcrypt";
// import pool from "../db.js"; // Assuming you have a database pool in db.js

// // Helper function to find a user by email
// const findUserByEmail = async (email) => {
// 	const query = "SELECT * FROM users WHERE email = $1";
// 	const result = await pool.query(query, [email]);
// 	return result.rows[0];
// };

// // Configure Passport Local Strategy
// passport.use(
// 	new LocalStrategy(
// 		{ usernameField: "email" },
// 		async (email, password, done) => {
// 			try {
// 				const user = await findUserByEmail(email);

// 				// User not found
// 				if (!user) {
// 					return done(null, false, {
// 						message: "Incorrect email or password",
// 					});
// 				}

// 				// Check password
// 				const isMatch = await bcrypt.compare(password, user.password);
// 				if (!isMatch) {
// 					return done(null, false, {
// 						message: "Incorrect email or password",
// 					});
// 				}

// 				// Success
// 				return done(null, user);
// 			} catch (err) {
// 				return done(err);
// 			}
// 		}
// 	)
// );

// // Serialize and Deserialize User
// passport.serializeUser((user, done) => done(null, user.id));
// passport.deserializeUser(async (id, done) => {
// 	try {
// 		const result = await pool.query("SELECT * FROM users WHERE id = $1", [
// 			id,
// 		]);
// 		done(null, result.rows[0]);
// 	} catch (err) {
// 		done(err);
// 	}
// });







import passport from "passport";
import LocalStrategy from "passport-local";
import pool from "./db.js";
import bcrypt from "bcrypt";

// Define the local strategy
passport.use(
	new LocalStrategy(
		{ usernameField: "email" },
		async (email, password, done) => {
			try {
				const userCheck = await pool.query(
					"SELECT * FROM users WHERE email = $1",
					[email.toLowerCase()]
				);
				const user = userCheck.rows[0];

				if (!user) {
					return done(null, false, {
						message: "Invalid credentials",
					});
				}

				const isPasswordValid = await bcrypt.compare(
					password,
					user.password_hash
				);
				if (!isPasswordValid) {
					return done(null, false, {
						message: "Invalid credentials",
					});
				}

				return done(null, user); // User authenticated
			} catch (err) {
				return done(err);
			}
		}
	)
);

// Serialize user to session
passport.serializeUser((user, done) => {
	done(null, user.id); // Store the user ID in the session
});

// Deserialize user from session
passport.deserializeUser(async (id, done) => {
	try {
		const userCheck = await pool.query(
			"SELECT * FROM users WHERE id = $1",
			[id]
		);
		done(null, userCheck.rows[0]);
	} catch (err) {
		done(err);
	}
});

export default passport;
