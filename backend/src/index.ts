// ===================================================
// IMPORTS
// ===================================================

import express, { Express, Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import itemsRouter from "./routes/items";
import cors from "cors";

dotenv.config();
const port = process.env.PORT || 3000;

mongoose
  .connect(
    "mongodb+srv://db-task-user:BYun1024@sandbox-db-tim.itb8z3k.mongodb.net/?retryWrites=true&w=majority&appName=sandbox-db-tim"
  )
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB..."));
// ===================================================
// SETUP
// ===================================================

const app: Express = express();
app.use(cors());
app.use(express.json());

// ===================================================
// ROUTES
// ===================================================

app.use("/items", itemsRouter);

// ===================================================
// 404 - NOT FOUND
// ===================================================

app.use((_: Request, res: Response) => {
  res.status(404).json({ message: "Not Found" });
});

// ===================================================
// ERROR HANDLER
// ===================================================

app.use((error: Error, _: Request, res: Response, __: NextFunction) => {
  console.error(error);
  res.status(500).json({ message: error.message });
});

// ===================================================
// SERVER
// ===================================================

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
