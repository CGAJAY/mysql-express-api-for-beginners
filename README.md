# MySQL + Express.js Beginner API

This is a beginner-friendly Express.js API using MySQL as the database. It is structured with folders for controllers, routes, models, and middleware, and uses ES6 syntax. The project demonstrates how to build a simple CRUD API to manage users.

## 📁 Folder Structure

```
project-root/
├── controllers/
├── models/
├── routes/
├── middlewares/
├── db/
├── .env
├── server.js
├── package.json
└── README.md
```

## 📦 Installation

```bash
npm init -y
npm install express mysql2 dotenv
npm install --save-dev nodemon
```

## 🚀 Getting Started

1. Create a `.env` file:

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=myapp_db
PORT=5000
```

2. Start MySQL server and create database `myapp_db`

3. Run the app:

```bash
npx nodemon server.js
```

---
