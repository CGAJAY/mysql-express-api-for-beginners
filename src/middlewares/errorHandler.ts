import type { Request, Response, NextFunction } from "express";

// Centralized error handling middleware
const errorHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    console.error("❌ Error:", err.message);

    // Send error response to the client
    res.status(500).json({
        success: false,
        message: err.message || "Internal Server Error",
    });
};

// Export the middleware
export default errorHandler;
