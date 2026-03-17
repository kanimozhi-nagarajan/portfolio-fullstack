import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./config/neonSql.js";
import connectMongo from "./config/mongo.js";

import projectRoutes from "./routes/projectRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();
connectMongo();

const app = express();

// app.use(cors());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  }),
);
app.use(express.json());

app.use("/uploads", express.static("uploads"));

// Routes
app.use("/api/projects", projectRoutes);
app.use("/api/auth", userRoutes);

app.use("/api/contact", contactRoutes);

app.get("/", (req, res) => {
  res.send("Portfolio API running");
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
