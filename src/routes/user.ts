import express from "express";
import type { Router } from "express";
import {
    createUser,
    getAllUsers,
    getUser,
    updateUser,
    deleteUser,
} from "../controllers/user.ts";
import validateUser from "../middlewares/validateUser.ts";

const userRouter: Router = express.Router();

userRouter.post("/", validateUser, createUser); // Create a new user
userRouter.get("/", getAllUsers); // Get all users
userRouter.get("/:id", getUser); // Get a user by ID
userRouter.put("/:id", validateUser, updateUser); // Update a user by ID
userRouter.delete("/:id", deleteUser); // Delete a user by ID

export default userRouter;
