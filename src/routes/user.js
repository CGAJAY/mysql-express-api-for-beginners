import express from "express";
import {
    createUser,
    getAllUsers,
    getUser,
    updateUser,
    deleteUser,
} from "../controllers/user.js";
import validateUser from "../middlewares/ValidateUser.js";

const router = express.Router();

router.post("/", validateUser, createUser); // Create a new user
router.get("/", getAllUsers); // Get all users
router.get("/:id", getUser); // Get a user by ID
router.put("/:id", validateUser, updateUser); // Update a user by ID
router.delete("/:id", deleteUser); // Delete a user by ID

export default router;
