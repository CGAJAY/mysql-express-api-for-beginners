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
            // Check if a user with the email already exists
            const [existingUsers] = await pool.query(
                "SELECT email FROM users WHERE email = ?",
                [email]
            );
            if ((existingUsers as any[]).length > 0) {
                throw new Error("Email already in use");
            }

            // Insert a new user into the users table
            const [result]: any = await pool.query(
                "INSERT INTO users (name, email) VALUES (?, ?)",
                [name, email]
            );
            return { id: result.insertId, name, email };
        } catch (error: any) {
            console.error("❌ Error creating user:", error);
            // Handle MySQL duplicate entry error (in case the SELECT check is bypassed)
            if (
                error.code === "ER_DUP_ENTRY" ||
                error.message === "Email already in use"
            ) {
                throw new Error("Email already in use");
            }
            // Rethrow other errors with their original message
            throw new Error(error.message || "Failed to create user");
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
