import express from "express";
import courseZOD from "../schema/courseSchema.js";
import { createCourse } from "../controllers/courseController.js";
import { validate } from "../middleware/validateMiddleware.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.use(verifyToken("lecturerToken"));
router.post("/create", validate(courseZOD), createCourse);

export default router;
