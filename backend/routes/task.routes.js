import express from "express";
import { addTask, getTask, getTasks } from "../controllers/taskController.js";
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

router.get("/:id", getTask);

router.get("/", getTasks);

router.post("/", addTask);

router.delete("/", deleteTask);

export default router;
