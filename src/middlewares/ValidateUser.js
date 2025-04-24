// Middleware to validate user data
const validateUser = (req, res, next) => {
    const { name, email } = req.body; // Extract name and email from request body

    // Check if name and email are provided
    if (!name || !email) {
        return res.status(400).json({
            success: false,
            message: "Name and email are required",
        }); // Respond with 400 if validation fails
    }

    // Check if email is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple regex for email validation
    if (!emailRegex.test(email)) {
        return res.status(400).json({
            success: false,
            message: "Invalid email format",
        }); // Respond with 400 if email format is invalid
    }

    next(); // Proceed to the next middleware or route handler
};

export default validateUser; // Export the middleware function
