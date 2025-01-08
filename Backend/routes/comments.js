import express from "express";
import pool from "../config/db.js"; // Ensure this imports your database configuration
import authenticateUser from "../middleware/authenticate.js";

const router = express.Router();

// ---------------------------------
// Routes for Comments
// ---------------------------------

// Get all comments for a specific recipe
router.get("/:recipeId", async (req, res) => {
	const { recipeId } = req.params;

	try {
		const comments = await pool.query(
			`SELECT c.*, u.first_name, u.last_name, u.profile_picture 
            FROM comments c
            JOIN users u ON c.user_id = u.id
            WHERE c.recipe_id = $1
            ORDER BY c.created_at ASC`,
			[recipeId]
		);
		res.status(200).json(comments.rows);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Failed to fetch comments" });
	}
});

// Post a new comment
router.post("/:recipeId", authenticateUser, async (req, res) => {
	const { recipeId } = req.params;
	const { content } = req.body;
	const userId = req.user.id;

	try {
		const newComment = await pool.query(
			`INSERT INTO comments (recipe_id, user_id, content) 
            VALUES ($1, $2, $3) RETURNING *`,
			[recipeId, userId, content]
		);
		res.status(201).json(newComment.rows[0]);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Failed to add comment" });
	}
});

// Delete a comment
router.delete("/:commentId", authenticateUser, async (req, res) => {
	const { commentId } = req.params;
	const userId = req.user.id;

	try {
		// Ensure the user owns the comment
		const comment = await pool.query(
			`SELECT * FROM comments WHERE id = $1 AND user_id = $2`,
			[commentId, userId]
		);

		if (comment.rows.length === 0) {
			return res
				.status(403)
				.json({ error: "You can only delete your own comments" });
		}

		await pool.query(`DELETE FROM comments WHERE id = $1`, [commentId]);
		res.status(200).json({ message: "Comment deleted" });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Failed to delete comment" });
	}
});

// ---------------------------------
// Routes for Replies
// ---------------------------------

// Get replies for a specific comment
router.get("/:commentId/replies", async (req, res) => {
	const { commentId } = req.params;

	try {
		const replies = await pool.query(
			`SELECT r.*, u.first_name, u.last_name, u.profile_picture 
            FROM replies r
            JOIN users u ON r.user_id = u.id
            WHERE r.comment_id = $1
            ORDER BY r.created_at ASC`,
			[commentId]
		);
		res.status(200).json(replies.rows);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Failed to fetch replies" });
	}
});

// Post a reply to a comment
router.post("/:commentId/replies", authenticateUser, async (req, res) => {
	const { commentId } = req.params;
	const { content } = req.body;
	const userId = req.user.id;

	try {
		const newReply = await pool.query(
			`INSERT INTO replies (comment_id, user_id, content) 
            VALUES ($1, $2, $3) RETURNING *`,
			[commentId, userId, content]
		);
		res.status(201).json(newReply.rows[0]);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Failed to add reply" });
	}
});

// ---------------------------------
// Routes for Comment Votes
// ---------------------------------

// Add a like or dislike to a comment or reply
router.post("/votes", authenticateUser, async (req, res) => {
	const { commentId, replyId, voteType } = req.body; // voteType: 1 for like, -1 for dislike
	const userId = req.user.id;

	try {
		const newVote = await pool.query(
			`INSERT INTO comment_votes (comment_id, reply_id, user_id, vote_type) 
            VALUES ($1, $2, $3, $4) RETURNING *`,
			[commentId, replyId, userId, voteType]
		);
		res.status(201).json(newVote.rows[0]);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Failed to add vote" });
	}
});

// ---------------------------------
// Export the Router
// ---------------------------------

export default router;
