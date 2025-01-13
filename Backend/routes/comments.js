import express from "express";
import pool from "../config/db.js"; // Ensure this imports your database configuration
import authenticateUser from "../middleware/authenticate.js";

const router = express.Router();

// ---------------------------------
// Routes for Comments
// ---------------------------------

// Get all comments and their replies for a specific recipe
router.get("/:recipeId", async (req, res) => {
	const { recipeId } = req.params;

	try {
		const commentsResult = await pool.query(
			`
			SELECT 
			    c.id AS comment_id,
			    c.content AS comment_content,
			    c.user_id AS comment_user_id,
			    c.recipe_id AS comment_recipe_id,
			    c.created_at AS comment_created_at,
			    u.first_name AS user_first_name,
			    u.last_name AS user_last_name,
			    u.profile_picture_url AS user_profile_picture_url,
			    COALESCE(COUNT(DISTINCT CASE WHEN cv.vote_type = 1 THEN cv.id END), 0) AS likes_count,
    			COALESCE(COUNT(DISTINCT CASE WHEN cv.vote_type = -1 THEN cv.id END), 0) AS dislikes_count,
			    COALESCE(json_agg(json_build_object(
			        'id', r.id,
			        'content', r.content,
			        'user_id', r.user_id,
			        'created_at', r.created_at,
			        'first_name', ur.first_name,
			        'last_name', ur.last_name,
			        'profile_picture_url', ur.profile_picture_url  -- Corrected this field
			    )) FILTER (WHERE r.id IS NOT NULL), '[]') AS replies
			FROM comments c
			JOIN users u ON c.user_id = u.id
			LEFT JOIN comment_votes cv ON cv.comment_id = c.id
			LEFT JOIN replies r ON r.comment_id = c.id
			LEFT JOIN users ur ON r.user_id = ur.id  -- Correct join to fetch reply user details
			WHERE c.recipe_id = $1
			GROUP BY c.id, u.id
			ORDER BY c.created_at ASC;
			`,
			[recipeId]
		);

		res.status(200).json(commentsResult.rows);
	} catch (error) {
		console.error("Error fetching comments and replies:", error);
		res.status(500).json({ error: "Failed to fetch comments and replies" });
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

// Post a reply to a comment
router.post("/:commentId/replies", authenticateUser, async (req, res) => {
	const { commentId } = req.params;
	let { content } = req.body; // Ensure this is plain text
	const userId = req.user.id;

	try {
		// Convert content to string if it's accidentally an object
		if (typeof content !== "string") {
			content = String(content);
		}

		const newReply = await pool.query(
			`INSERT INTO replies (comment_id, user_id, content) 
             VALUES ($1, $2, $3) 
             RETURNING id AS reply_id, comment_id, user_id, content, created_at`,
			[commentId, userId, content]
		);

		// Fetch user details for the reply
		const userDetails = await pool.query(
			`SELECT first_name, last_name, profile_picture_url 
             FROM users 
             WHERE id = $1`,
			[userId]
		);

		const replyWithUser = {
			...newReply.rows[0],
			...userDetails.rows[0],
		};

		res.status(201).json(replyWithUser);
	} catch (error) {
		console.error("Error adding reply:", error);
		res.status(500).json({ error: "Failed to add reply" });
	}
});

// ---------------------------------
// Routes for Comment Votes
// ---------------------------------

// Add or remove a like/dislike to a comment or reply
router.post("/votes/:commentId", authenticateUser, async (req, res) => {
	const { commentId } = req.params;
	const { voteType } = req.body;
	const userId = req.user.id;

	try {
		// Check if the user has already voted
		const existingVote = await pool.query(
			`SELECT * FROM comment_votes 
             WHERE user_id = $1 AND comment_id = $2`,
			[userId, commentId]
		);

		if (existingVote.rows.length > 0) {
			const currentVoteType = existingVote.rows[0].vote_type;

			if (currentVoteType === voteType) {
				// Same vote clicked again → Remove vote
				await pool.query(
					`DELETE FROM comment_votes 
                     WHERE user_id = $1 AND comment_id = $2`,
					[userId, commentId]
				);
				return res.status(200).json({ message: "Vote removed" });
			} else {
				// Different vote → Update vote
				const updatedVote = await pool.query(
					`UPDATE comment_votes 
                     SET vote_type = $1 
                     WHERE user_id = $2 AND comment_id = $3
                     RETURNING *`,
					[voteType, userId, commentId]
				);
				return res.status(200).json(updatedVote.rows[0]);
			}
		} else {
			// No vote → Insert new vote
			const newVote = await pool.query(
				`INSERT INTO comment_votes (comment_id, user_id, vote_type) 
                 VALUES ($1, $2, $3) RETURNING *`,
				[commentId, userId, voteType]
			);
			return res.status(201).json(newVote.rows[0]);
		}
	} catch (error) {
		console.error("Error handling vote:", error);
		res.status(500).json({ error: "Failed to process vote" });
	}
});

// ---------------------------------
// Export the Router
// ---------------------------------

export default router;
