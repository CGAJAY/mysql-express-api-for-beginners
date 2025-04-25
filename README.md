# User Management API (TypeScript)

A RESTful API built with Express.js, MySQL, and TypeScript for managing users.

## Prerequisites
- Node.js (v16 or higher)
- MySQL (v8 or higher)
- npm

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd user-management-api
   ```

2. Checkout the TypeScript branch:
   ```bash
   git checkout feature/typescript-version
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add the following:
   ```plaintext
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=your_password
   DB_NAME=user_management
   PORT=3000
   ```

5. Start the MySQL server and ensure it's running.

6. Run the application in development mode:
   ```bash
   npm run dev
   ```
   Or, build and run for production:
   ```bash
   npm run build
   npm start
   ```

## API Endpoints
- `GET /api/users` - Get all users
- `POST /api/users` - Create a new user
- `GET /api/users/:id` - Get a user by ID
- `PUT /api/users/:id` - Update a user
- `DELETE /api/users/:id` - Delete a user

## Example Request
Create a user:
```bash
curl -X POST http://localhost:3000/api/users \
-H "Content-Type: application/json" \
-d '{"name":"John Doe","email":"john@example.com"}'
```

## Project Structure
- `src/config/` - Database connection configuration
- `src/controllers/` - Business logic for handling requests
- `src/middlewares/` - Reusable middleware functions
- `src/models/` - Database schemas and operations
- `src/routes/` - API endpoint definitions
- `src/scripts/` - Database setup scripts
- `src/app.ts` - Main application entry point
- `tsconfig.json` - TypeScript compiler configuration