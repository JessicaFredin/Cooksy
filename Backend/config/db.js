import pg from "pg";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env

// Configure the PostgreSQL connection pool
const pool = new pg.Pool({
	user: process.env.PG_USER,
	host: process.env.PG_HOST,
	database: process.env.PG_DATABASE,
	password: process.env.PG_PASSWORD,
	port: process.env.PG_PORT,
	idleTimeoutMillis: 30000, // Close idle connections after 30 seconds
	max: 20, // Limit the number of connections in the pool
});

pool.on("connect", () => {
	console.log("Connected to the database");
});

pool.on("error", (err) => {
	console.error("Unexpected error on database connection", err);
	process.exit(-1);
});

// Export the pool for use in other files
export default pool;