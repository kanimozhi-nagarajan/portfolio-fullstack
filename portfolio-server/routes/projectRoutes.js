import express from "express";
import {
  getProjects,
  createProject,
} from "../controllers/projectController.js";
import { verifyToken } from "../middleware/authMiddleware.js";
import upload from "../config/upload.js";

const router = express.Router();

router.get("/", getProjects);
router.post("/", verifyToken, upload.single("image"), createProject);

export default router;
