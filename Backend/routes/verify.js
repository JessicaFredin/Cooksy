// // Updated verify.js
// import express from "express";
// import pool from "../config/db.js";
// import nodemailer from "nodemailer";
// import bcrypt from "bcrypt";

// const router = express.Router();

// // Email configuration
// const transporter = nodemailer.createTransport({
//     service: "Gmail",
//     auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASSWORD,
//     },
// });

// // Generate and send verification code
// router.post("/send-code", async (req, res) => {
//     const { email } = req.body;

//     try {
//         const userCheck = await pool.query(
//             "SELECT * FROM users WHERE email = $1",
//             [email]
//         );
//         if (!userCheck.rows[0]) {
//             return res.status(404).json({ message: "Email not registered" });
//         }

//         const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();
		
//         const hashedCode = await bcrypt.hash(verificationCode, 10);

//         await pool.query(
//             "INSERT INTO email_verifications (email, code_hash, expires_at) VALUES ($1, $2, NOW() + INTERVAL '15 minutes') ON CONFLICT (email) DO UPDATE SET code_hash = $2, expires_at = NOW() + INTERVAL '15 minutes'",
//             [email, hashedCode]
//         );

//         await transporter.sendMail({
//             from: process.env.EMAIL_USER,
//             to: email,
//             subject: "Email Verification",
//             text: `Your verification code is: ${verificationCode}`,
//         });

//         res.status(200).json({ message: "Verification code sent" });
//     } catch (error) {
//         console.error("Error sending verification code:", error);
//         res.status(500).json({ message: "Internal server error" });
//     }
// });

// // Verify the code
// router.post("/verify-code", async (req, res) => {
//     const { email, code } = req.body;

//     try {
//         const result = await pool.query(
//             "SELECT code_hash, expires_at FROM email_verifications WHERE email = $1",
//             [email]
//         );

//         if (result.rows.length === 0) {
//             return res.status(404).json({ message: "No verification code found" });
//         }

// 		const { code_hash, expires_at } = result.rows[0];
// 		console.log(code_hash);

//         if (new Date() > new Date(expires_at)) {
//             return res.status(400).json({ message: "Verification code expired" });
//         }

//         const isCodeValid = await bcrypt.compare(code, code_hash);
//         if (!isCodeValid) {
//             return res.status(400).json({ message: "Invalid verification code" });
//         }

//         await pool.query(
//             "UPDATE users SET is_verified = true WHERE email = $1",
//             [email]
//         );

//         await pool.query("DELETE FROM email_verifications WHERE email = $1", [
//             email,
//         ]);

//         res.status(200).json({ message: "Email successfully verified" });
//     } catch (error) {
//         console.error("Error verifying code:", error);
//         res.status(500).json({ message: "Internal server error" });
//     }
// });

// export default router;
