import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file

// Create a connection pool for better performance
// A pool allows multiple connections to be reused, improving performance
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    // optimize for performance
    connectionLimit: 10, // Limit the number of connections in the pool
    waitForConnections: true, // Wait for a connection to be available
    queueLimit: 0, // Unlimited queue size
});

export default pool; // Export the pool for use in other modules
