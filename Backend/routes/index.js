import express from "express";
import auth from "./auth.js";
import profile from "./profile.js";
import recipes from "./recipes.js";

// const router = express.Router();

const app = express();

app.use(express.json());

app.use("/auth", auth); // Routes related to authentication
app.use("/profile", profile); // Profile routes
app.use("/recipes", recipes); // Recipes routes

// Example default route
app.get("/", (req, res) => {
	res.send("Hello, World!");
});

export default app;
