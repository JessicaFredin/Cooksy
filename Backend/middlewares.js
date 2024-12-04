import express from "express";
import session from "express-session";
import bodyParser from "body-parser";
import passport from "passport";

const setupMiddlewares = (app) => {
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());
	app.use(express.static("public"));

	// Configure session middleware
	app.use(
		session({
			secret: process.env.SESSION_SECRET || "default_secret", // Use the .env variable or fallback
			resave: false,
			saveUninitialized: false,
			cookie: { secure: process.env.NODE_ENV === "production" }, // Secure cookies in production
		})
	);

	// Passport initialization
	app.use(passport.initialize());
	app.use(passport.session()); // Passport session depends on express-session
};

export default setupMiddlewares;
