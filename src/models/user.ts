import pool from "../config/db.ts";

// Interface for User data
interface User {
    id?: number;
    name: string;
    email: string;
    created_at?: Date;
}

// User model class to handle database operations
class UserModel {
    // Create a new user
    static async create({
        name,
        email,
    }: {
        name: string;
        email: string;
    }): Promise<User> {
        try {
            const [result]: any = await pool.query(
                "INSERT INTO users (name, email) VALUES (?, ?)",
                [name, email]
            );
            return { id: result.insertId, name, email };
        } catch (error: unknown) {
            throw new Error(
                `Failed to create user: ${(error as Error).message}`
            );
        }
    }

    // Find all users
    static async findAll(): Promise<User[]> {
        try {
            const [rows] = await pool.query("SELECT * FROM users");
            return rows as User[];
        } catch (error: unknown) {
            throw new Error(
                `Failed to fetch users: ${(error as Error).message}`
            );
        }
    }

    // Find a user by ID
    static async findById(id: number): Promise<User | null> {
        try {
            const [rows] = await pool.query(
                "SELECT * FROM users WHERE id = ?",
                [id]
            );
            return (rows as User[])[0] || null;
        } catch (error: unknown) {
            throw new Error(
                `Failed to fetch user: ${(error as Error).message}`
            );
        }
    }

    // Update a user by ID
    static async update(
        id: number,
        { name, email }: { name: string; email: string }
    ): Promise<User | null> {
        try {
            const [result]: any = await pool.query(
                "UPDATE users SET name = ?, email = ? WHERE id = ?",
                [name, email, id]
            );
            if (result.affectedRows === 0) {
                return null; // No user found
            }
            return { id, name, email };
        } catch (error: unknown) {
            throw new Error(
                `Failed to update user: ${(error as Error).message}`
            );
        }
    }

    // Delete a user by ID
    static async delete(id: number): Promise<boolean> {
        try {
            const [result]: any = await pool.query(
                "DELETE FROM users WHERE id = ?",
                [id]
            );
            return result.affectedRows > 0; // True if deleted, false if not found
        } catch (error: unknown) {
            throw new Error(
                `Failed to delete user: ${(error as Error).message}`
            );
        }
    }
}

// Export the User model
export default UserModel;
