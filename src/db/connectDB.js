// setupDB.js
import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file

export const setupDatabase = async () => {
    try {
        // Create a connection to the MySQL server
        const connectDB = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
        });

        // Create the database if it doesn't exist
        await connectDB.query(
            `CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}`
        );

        console.log(
            `✅ Database ${process.env.DB_NAME} created or already exists.`
        );
    } catch (error) {
        console.error("❌ Error setting up the database:", error);
        throw error; // Rethrow the error to be handled in server.js
    }
};
