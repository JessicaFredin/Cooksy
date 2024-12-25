import express from "express";
import session from "express-session";
import bodyParser from "body-parser";
import passport from "./config/passport.js";
import cors from "cors";
import path from "path";

import { fileURLToPath } from "url";
// Emulate __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const setupMiddlewares = (app) => {
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());
	app.use(express.static("public"));
	// Serve the /uploads directory

	app.use("/uploads", express.static(path.join(__dirname, "uploads")));

	app.use(
		cors({
			origin: "http://localhost:5173", // Your frontend's URL
			credentials: true, // Allow cookies
		})
	);

	// Configure session middleware
	app.use(
		session({
			secret: process.env.SESSION_SECRET || "default_secret", // Use the .env variable or fallback
			resave: false,
			saveUninitialized: false,
			cookie: { secure: process.env.NODE_ENV === "production" }, // Secure cookies in production
			httpOnly: true,
			maxAge: 1000 * 60 * 60 * 24, // 1 day
		})
	);

	// Passport initialization
	app.use(passport.initialize());
	app.use(passport.session()); // Passport session depends on express-session
};

export default setupMiddlewares;
