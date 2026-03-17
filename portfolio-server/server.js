import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./config/neonSql.js";
import connectMongo from "./config/mongo.js";
import Project from "./models/Project.js";
import User from "./models/User.js";
import jwt from "jsonwebtoken";
import upload from "./config/upload.js";
import { OAuth2Client } from "google-auth-library";

const client = new OAuth2Client();

connectMongo();

dotenv.config();

const app = express();

app.use("/uploads", express.static("uploads"));

app.use(cors());
app.use(express.json());

app.use("/uploads", express.static("uploads"));

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

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(403).json({ message: "Access denied" });
  }

  try {
    const decoded = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);

    req.user = decoded;

    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

app.post(
  "/api/projects",
  verifyToken,
  upload.single("image"),
  async (req, res) => {
    const { title, description, tech, github, demo } = req.body;

    const project = new Project({
      title,
      description,
      tech: tech.split(","),
      github,
      demo,
      image: `/uploads/${req.file.filename}`,
    });

    await project.save();

    res.json(project);
  },
);

app.post("/api/admin/login", async (req, res) => {
  const { email, password } = req.body;

  if (
    email !== process.env.ADMIN_EMAIL ||
    password !== process.env.ADMIN_PASSWORD
  ) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ email }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  res.json({ token });
});

app.post("/api/auth/google", async (req, res) => {
  const { credential } = req.body;

  const ticket = await client.verifyIdToken({
    idToken: credential,
    audience: process.env.CLIENT_ID,
  });

  const payload = ticket.getPayload();

  const email = payload.email;
  const name = payload.name;

  let user = await User.findOne({ email });

  if (!user) {
    user = new User({
      name,
      email,
      role: email === process.env.ADMIN_EMAIL ? "admin" : "user",
    });

    await user.save();
  }

  const token = jwt.sign(
    { email: user.email, role: user.role },
    process.env.JWT_SECRET,
  );

  res.json({ token });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
