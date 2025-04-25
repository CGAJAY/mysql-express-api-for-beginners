import type { Request, Response, NextFunction } from "express";

// Middleware to validate user input
const validateUser = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    const { name, email } = req.body;

    // Check if name and email are provided
    if (!name || !email) {
        res.status(400).json({
            success: false,
            message: "Name and email are required",
        });
        return;
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        res.status(400).json({
            success: false,
            message: "Invalid email format",
        });
        return;
    }

    // If validation passes, proceed to the next middleware/controller
    next();
};

// Export the middleware
export default validateUser;
