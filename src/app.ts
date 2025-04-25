import express from "express";
import type { Express, Request, Response } from "express";
import dotenv from "dotenv";
import userRouter from "./routes/user.ts";
import errorHandler from "./middlewares/errorHandler.ts";
import setupDatabase from "./scripts/setupDB.ts";

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
        success: true,
        message: "Silence is golden",
    });
});

app.use("/api/users", userRouter);

app.use((req: Request, res: Response) => {
    res.status(404).json({
        success: false,
        message: "Route not found",
    });
});

app.use(errorHandler);

const startServer = async () => {
    try {
        console.log("Setting up the database...");
        await setupDatabase();
        console.log("Database setup complete");

        app.listen(PORT, () => {
            console.log(`🚀 Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error("❌ Error setting up the database:", error);
        process.exit(1);
    }
};

startServer();
