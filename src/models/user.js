import pool from "../config/db.js"; // Import the database connection pool

// User model class to handle user-related database operations
class User {
    // Method to create a new user
    static async create({ name, email }) {
        try {
            // Insert a new user into the users table
            const [result] = await pool.query(
                "INSERT INTO users (name, email) VALUES (?, ?)",
                [name, email]
            );
            return {
                id: result.insertId, // Return the ID of the newly created user
                name,
                email,
            };
        } catch (error) {
            console.error("❌ Error creating user:", error);
            throw new Error(`Failed to create user: ${error.message}`);
        }
    }

    // Method to find all users
    static async findAll() {
        try {
            // Select all users from the users table
            const [rows] = await pool.query("SELECT * FROM users");
            return rows; // Return the list of users
        } catch (error) {
            console.error("❌ Error fetching users:", error);
            throw new Error(`Failed to fetch users: ${error.message}`);
        }
    }

    // Method to find a user by ID
    static async findById(id) {
        try {
            // Select a user by ID from the users table
            const [rows] = await pool.query(
                "SELECT * FROM users WHERE id = ?",
                [id]
            );
            return rows[0] || null; // Return the user if found, otherwise null
        } catch (error) {
            console.error("❌ Error fetching user:", error);
            throw new Error(`Failed to fetch user: ${error.message}`);
        }
    }

    // Method to update a user by ID
    static async update(id, { name, email }) {
        try {
            // Update a user by ID in the users table
            const [result] = await pool.query(
                "UPDATE users SET name = ?, email = ? WHERE id = ?",
                [name, email, id]
            );

            // Check if any rows were affected
            if (result.affectedRows === 0) {
                return null; // Return null if no user was found
            }

            // Return the updated user
            return {
                id,
                name,
                email,
            };
        } catch (error) {
            console.error("❌ Error updating user:", error);
            throw new Error(`Failed to update user: ${error.message}`);
        }
    }

    // Method to delete a user by ID
    static async delete(id) {
        try {
            // Delete a user by ID from the users table
            const [result] = await pool.query(
                "DELETE FROM users WHERE id = ?",
                [id]
            );

            // Check if any rows were affected
            if (result.affectedRows === 0) {
                return null; // Return null if no user was found
            }

            return { id }; // Return the ID of the deleted user
        } catch (error) {
            console.error("❌ Error deleting user:", error);
            throw new Error(`Failed to delete user: ${error.message}`);
        }
    }
}

// Export the User class for use in other modules
export default User;
