import type { Request, Response, NextFunction } from "express";
import UserModel from "../models/user.ts";

// Controller for creating a new user
export const createUser = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const { name, email } = req.body;
        const user = await UserModel.create({ name, email });
        res.status(201).json({
            success: true,
            data: user,
            message: "User created successfully",
        });
    } catch (error: unknown) {
        next(error); // Pass error to error handling middleware
    }
};

// Controller for getting all users
export const getAllUsers = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const users = await UserModel.findAll();
        res.status(200).json({
            success: true,
            data: users,
            message: "Users fetched successfully",
        });
    } catch (error: unknown) {
        next(error);
    }
};

// Controller for getting a single user by ID
export const getUser = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const user = await UserModel.findById(parseInt(req.params.id, 10));
        if (!user) {
            res.status(404).json({
                success: false,
                message: "User not found",
            });
            return;
        }
        res.status(200).json({
            success: true,
            data: user,
            message: "User fetched successfully",
        });
    } catch (error: unknown) {
        next(error);
    }
};

// Controller for updating a user
export const updateUser = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const { name, email } = req.body;
        const user = await UserModel.update(parseInt(req.params.id, 10), {
            name,
            email,
        });
        if (!user) {
            res.status(404).json({
                success: false,
                message: "User not found",
            });
            return;
        }
        res.status(200).json({
            success: true,
            data: user,
            message: "User updated successfully",
        });
    } catch (error: unknown) {
        next(error);
    }
};

// Controller for deleting a user
export const deleteUser = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const deleted = await UserModel.delete(parseInt(req.params.id, 10));
        if (!deleted) {
            res.status(404).json({
                success: false,
                message: "User not found",
            });
            return;
        }
        res.status(200).json({
            success: true,
            message: "User deleted successfully",
        });
    } catch (error: unknown) {
        next(error);
    }
};
