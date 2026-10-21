import express from "express";
import courseZOD from "../schema/courseSchema.js";
import { createCourse } from "../controllers/courseController.js";
import { validate } from "../middleware/validateMiddleware.js";

const router = express.Router();

router.post("/create", validate(courseZOD), createCourse);

export default router;
