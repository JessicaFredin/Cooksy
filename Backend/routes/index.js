import express from "express";
import auth from "./auth.js";
import profile from "./profile.js";
import recipes from "./recipes.js";
import categories from "./categories.js";
import meal_types from "./meal_types.js";
import world_cuisines from "./world_cuisines.js";
import comments from "./comments.js";

// const router = express.Router();

const app = express();

app.use(express.json());

app.use("/auth", auth); // Routes related to authentication
app.use("/profile", profile); // Profile routes
app.use("/recipes", recipes); // Recipes routes
app.use("/categories", categories); // Categories routes
app.use("/meal_types", meal_types); // Meal Types routes
app.use("/world_cuisines", world_cuisines); // World Cuisines routes
app.use("/comments", comments); // Comments routes

// Example default route
app.get("/", (req, res) => {
	res.send("Hello, World!");
});

export default app;
