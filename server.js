import express from "express";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file

const app = express(); // Create an Express application
const PORT = process.env.PORT || 3000; // Set the port to listen on

// Middleware to parse JSON request bodies
app.use(express.json());

// Home route
app.get("/", (req, res) => {
    res.send("Welcome to the Express server!");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
