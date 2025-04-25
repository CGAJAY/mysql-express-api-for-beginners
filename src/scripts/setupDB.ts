import mysql from "mysql2/promise";
import type { Connection } from "mysql2/promise";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const { createConnection } = mysql;

// Function to set up the database and create tables
const setupDatabase = async (): Promise<void> => {
    let connectDB: Connection | null = null; // Initialize connection variable
    try {
        // Create a connection to the MySQL server
        connectDB = await createConnection({
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

        // Use the created database
        await connectDB.query(`USE ${process.env.DB_NAME}`);
        console.log(`✅ Using database ${process.env.DB_NAME}.`);

        // Create the users table if it doesn't exist
        await connectDB.query(`
            CREATE TABLE IF NOT EXISTS users (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL UNIQUE,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);
        console.log("✅ Users table created or already exists.");
    } catch (error) {
        console.error("❌ Error setting up the database:", error);
        throw error; // Rethrow the error to be handled by the caller
    } finally {
        if (connectDB) {
            await connectDB.end();
        }
    }
};

export default setupDatabase;
