import express from "express";
import { createCourse } from "../controllers/courseController";
import courseZOD from "../schema/courseSchema";
import { validate } from "../middleware/validateMiddleware";

const router = express.Router();

router.post("/create", validate(courseZOD), createCourse);

export default router;
