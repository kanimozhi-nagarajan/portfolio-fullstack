import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./config/neonSql.js";
import connectMongo from "./config/mongo.js";
import Project from "./models/Project.js";

connectMongo();

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Portfolio API running");
});

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    await pool.query(
      "INSERT INTO messages(name,email,message) VALUES($1,$2,$3)",
      [name, email, message],
    );

    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

app.get("/api/projects", async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});

app.post("/api/projects", async (req, res) => {
  const project = new Project(req.body);

  await project.save();

  res.json(project);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
