import User from "../models/user.js";

// Create a new user
export const createUser = async (req, res, next) => {
    const { name, email } = req.body;
    try {
        const newUser = await User.create({ name, email }); // Create a new user
        res.status(201).json(newUser); // Respond with the newly created user
    } catch (error) {
        next(error); // Pass the error to the next middleware
    }
};

// Get all users
export const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.findAll(); // Fetch all users
        res.status(200).json(users); // Respond with the list of users
    } catch (error) {
        next(error); // Pass the error to the next middleware
    }
};

// Get a user by ID
export const getUser = async (req, res, next) => {
    const { id } = req.params; // Extract the user ID from the request parameters
    try {
        const user = await User.findById(id); // Fetch the user by ID
        if (!user) {
            return res.status(404).json({ message: "User not found" }); // Respond with 404 if user not found
        }
        res.status(200).json(user); // Respond with the user
    } catch (error) {
        next(error); // Pass the error to the next middleware
    }
};

// Update a user by ID
export const updateUser = async (req, res, next) => {
    const { id } = req.params; // Extract the user ID from the request parameters
    const { name, email } = req.body; // Extract the updated data from the request body
    try {
        const updatedUser = await User.update(id, { name, email }); // Update the user by ID
        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" }); // Respond with 404 if user not found
        }
        res.status(200).json(updatedUser); // Respond with the updated user
    } catch (error) {
        next(error); // Pass the error to the next middleware
    }
};

// Delete a user by ID
export const deleteUser = async (req, res, next) => {
    const { id } = req.params; // Extract the user ID from the request parameters
    try {
        const deletedUser = await User.delete(id); // Delete the user by ID
        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" }); // Respond with 404 if user not found
        }
        res.status(200).json({
            success: true,
            message: "User deleted successfully",
        }); // Respond with success message
    } catch (error) {
        next(error); // Pass the error to the next middleware
    }
};
