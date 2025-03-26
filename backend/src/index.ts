// ===================================================
// IMPORTS
// ===================================================

import express, { Express, Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import itemsRouter from "./routes/items";
import cors from "cors";
import connectDB from "./config/database";
import { graphqlHTTP } from "express-graphql";
import schema from "./graphql/schemas";
import resolvers from "./graphql/resolvers";

dotenv.config();
const port = process.env.PORT || 3000;
connectDB();
// ===================================================
// SETUP
// ===================================================

const app: Express = express();
app.use(cors());
app.use(express.json());
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true, // Enable GraphiQL for testing
  })
);

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
