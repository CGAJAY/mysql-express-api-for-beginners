# MySQL + Express.js Beginner API (with TypeScript Support)

This is a beginner-friendly Express.js API using MySQL as the database. It demonstrates how to build a simple CRUD API to manage users, with two versions of the code: one using JavaScript and the other using TypeScript. The project is structured with separate folders for controllers, routes, models, middleware, and database configuration, following industry-standard practices.

## 📁 Folder Structure

```
project-root/
├── src/
│   ├── config/
│   │   └── db.[ts|js]
│   ├── controllers/
│   │   └── user.[ts|js]
│   ├── middlewares/
│   │   ├── errorHandler.[ts|js]
│   │   └── validateUser.[ts|js]
│   ├── models/
│   │   └── user.[ts|js]
│   ├── routes/
│   │   └── user.[ts|js]
│   ├── scripts/
│   │   └── setupDB.[ts|js]
│   └── app.[ts|js]
├── .env
├── package.json
├── tsconfig.json (TypeScript version only)
└── README.md
```

## 🚀 Getting Started

### 1. Clone the Repository

Clone the project from GitHub:

```bash
git clone <repository_url>
cd <project-folder>
```

### 2. Check Out the Desired Branch

-   **For the JavaScript version**, use the `main` branch:

```bash
git checkout main
```

-   **For the TypeScript version**, use the `feature/typescript-version` branch:

```bash
git checkout feature/typescript-version
```

### 3. Install Dependencies

Install the necessary dependencies for the chosen version:

```bash
npm install
```

### 4. Set Up the `.env` File

Create a `.env` file in the project root with the following contents:

```ini
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=user_management
PORT=3000
```

Replace `your_password` with your MySQL password.

### 5. Start the MySQL Server

Ensure your MySQL server is running. You can start it using a tool like MySQL Workbench or the command line:

```bash
mysql.server start
```

### 6. Start the App

-   **For the JavaScript version**:

```bash
npm run dev
```

-   **For the TypeScript version**:

```bash
npm run dev
```

The application will automatically create the `user_management` database and the `users` table if they don't exist. The server will run on `http://localhost:3000` (or the port specified in `.env`).

## 📝 Notes

-   **MySQL Database**: The app automatically sets up the `user_management` database and `users` table on startup.
-   **Ports**: The app runs on port `3000` by default. Change the `PORT` in `.env` if needed.
-   **API Endpoints**:
    -   `GET /api/users` - Fetch all users
    -   `POST /api/users` - Create a new user
    -   `GET /api/users/:id` - Fetch a user by ID
    -   `PUT /api/users/:id` - Update a user
    -   `DELETE /api/users/:id` - Delete a user
-   **Testing**: Use tools like Postman or curl to test the API endpoints. Example:
    ```bash
    curl -X POST http://localhost:3000/api/users \
    -H "Content-Type: application/json" \
    -d '{"name":"John Doe","email":"john@example.com"}'
    ```

## 🛠️ Development

-   **JavaScript Version**: Check out the `main` branch to work with the JavaScript code. Use `npm run dev` to start the server with `nodemon` for auto-reloading.
-   **TypeScript Version**: Check out the `feature/typescript-version` branch. Ensure `ts-node` and TypeScript dependencies are installed. Use `npm run dev` for development or `npm run build && npm start` for production.
-   **Switching Between Versions**: Use `git checkout` to switch between branches. Re-run `npm install` if dependencies differ.

## 🛠️ Troubleshooting

-   **MySQL Connection Issues**: Verify that your MySQL server is running and that the `.env` credentials are correct.
-   **Port Conflicts**: If port `3000` is in use, update the `PORT` in `.env` or stop the conflicting process.
-   **TypeScript Errors**: Ensure `tsconfig.json` is configured correctly and all imports use the `@`-prefixed aliases (e.g., `@controllers/userController`).

## 📚 Learn More

-   [Express.js Documentation](https://expressjs.com/)
-   [MySQL Documentation](https://dev.mysql.com/doc/)
-   [TypeScript Documentation](https://www.typescriptlang.org/docs/)

This project is designed to help beginners learn how to build a RESTful API with Express.js and MySQL, with the option to explore TypeScript for type safety.
