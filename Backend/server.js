// import express from "express";
// import config from "./config.js";
// import setupMiddlewares from "./middlewares.js";
// import routes from "./routes/index.js"; // Consolidated routes
// import "./config/passport.js"; // Initialize passport configuration

// const app = express();

// // Middleware
// setupMiddlewares(app);

// // Use the centralized routes
// app.use("/", routes); // All routes are imported from a single entry point

// app.listen(config.port, () => {
// 	console.log(`Server is running on http://localhost:${config.port}`);
// });



import express from "express";
import dotenv from "dotenv";
import setupMiddlewares from "./middlewares.js";
import routes from "./routes/index.js";
import "./config/passport.js"; // Initialize passport configuration

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
setupMiddlewares(app);

// Routes
app.use("/", routes);

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
