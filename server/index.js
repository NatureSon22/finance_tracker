import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import FinanceRouter from "./routes/financeRouter.js";

const app = express();
const port = process.env.PORT || 3000;

dotenv.config();

// Middleware to enable CORS
app.use(cors());

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use("/financial-records", FinanceRouter);

// Connect to the database and start the server
const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to database");

    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  } catch (e) {
    console.log("Failed to connect to database:", e);
  }
};

startServer();
