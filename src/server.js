import express from "express";
import dotenv from "dotenv";
import { setupDatabase } from "./script/setupDB.js";
import router from "./routes/user.js";
import errorHandler from "./middlewares/errorHandler.js";

dotenv.config(); // Load environment variables from .env file

const app = express(); // Create an Express application
const PORT = process.env.PORT || 3000; // Set the port to listen on

// Middleware to parse JSON request bodies
app.use(express.json());

// Home route
app.get("/", (req, res) => {
    res.send("Welcome to the Express server!");
});

// Apply centralized error handling middleware
app.use(errorHandler);

// User routes
app.use("/api/users", router); // Use the user routes defined in the router

// 404 error handling for undefined routes
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found",
    });
});

const startServer = async () => {
    try {
        // Create database and tables
        // This will create the database and tables if they don't exist
        // and will throw an error if there's an issue
        // with the database connection or creation.
        // This is a good place to put the database setup code
        // because it ensures that the database is ready before the server starts.
        await setupDatabase(); // Call the function to create the database
        console.log("✅ Database setup completed.");

        // Start the server
        app.listen(PORT, () => {
            console.log(`✅ Server is running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error("❌ Error starting the server:", error);
        process.exit(1); // Exit the process with a failure code
    }
};

// Start the server
startServer(); // Call the function to start the server
