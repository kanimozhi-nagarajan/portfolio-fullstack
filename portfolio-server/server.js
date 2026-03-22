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

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://portfolio-fullstack-sigma-one.vercel.app",
      "https://www.kanimozhi.org",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);

app.options("*", cors());
app.use(express.json());

app.use("/uploads", express.static("uploads"));

// Routes
app.use("/api/projects", projectRoutes);
app.use("/api/auth", userRoutes);

app.use("/api/contact", contactRoutes);

app.get("/", (req, res) => {
  res.send("Portfolio API running");
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
