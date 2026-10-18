import express from "express";
import { createCourse } from "../controllers/courseController";

const router = express.Router();

router.post("/create", createCourse);

export default router;
