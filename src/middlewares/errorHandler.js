// Centralized error handling middleware for Express
const errorHandler = (err, req, res, next) => {
    console.error("❌ Error:", err); // Log the error to the console

    // Check if the error is a validation error
    if (err.name === "ValidationError") {
        return res.status(400).json({
            success: false,
            message: err.message, // Send the validation error message
        });
    }

    // Check if the error is a database error
    if (err.code === "ER_DUP_ENTRY") {
        return res.status(409).json({
            success: false,
            message: "Duplicate entry", // Send a conflict error message
        });
    }

    // Handle other types of errors
    res.status(500).json({
        success: false,
        message: "Internal Server Error", // Send a generic server error message
    });
};

export default errorHandler; // Export the error handling middleware
