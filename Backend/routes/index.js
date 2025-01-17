import express from "express";
import auth from "./auth.js";
import profile from "./profile.js";
import recipes from "./recipes.js";
import categories from "./categories.js";
import meal_types from "./meal_types.js";
import world_cuisines from "./world_cuisines.js";
import comments from "./comments.js";
import search from "./search.js";
import user from "./user.js"
import top_contributors from "./top_contributors.js"
import filters from "./filters.js"

const app = express();

app.use(express.json());

app.use("/auth", auth); // Routes related to authentication
app.use("/profile", profile); // Profile routes
app.use("/recipes", recipes); // Recipes routes
app.use("/categories", categories); // Categories routes
app.use("/meal_types", meal_types); // Meal Types routes
app.use("/world_cuisines", world_cuisines); // World Cuisines routes
app.use("/comments", comments); // Comments routes
app.use("/search", search); // Search routes
app.use("/user", user); // User routes
app.use("/top_contributors", top_contributors); // Top Contributors routes
app.use("/filters", filters); // Filters routes


// Example default route
app.get("/", (req, res) => {
	res.send("Hello, World!");
});

export default app;
