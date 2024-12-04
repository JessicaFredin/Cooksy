import express from "express";
import authRoutes from "./authRoutes.js";

const router = express.Router();

router.use("/auth", authRoutes); // Routes related to authentication

// Example default route
router.get("/", (req, res) => {
	res.send("Hello, World!");
});

export default router;
