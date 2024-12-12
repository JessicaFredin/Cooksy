import express from "express";
import dotenv from "dotenv";
import setupMiddlewares from "./middlewares.js";
import routes from "./routes/index.js";
import session from "express-session";
import passport from "./config/passport.js";



dotenv.config();

const app = express();

// Middleware
setupMiddlewares(app);

// Routes
app.use("/", routes);

app.listen(process.env.PORT, () => {
	console.log(
		`Server is running on port http://localhost:${process.env.PORT}`
	);
});
