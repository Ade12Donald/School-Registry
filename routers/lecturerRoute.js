import express from "express";
import { createLecturer } from "../controllers/lecturerController.js";
import lecturerZOD from "../schema/lecturerSchema.js";
import { validate } from "../middleware/validateMiddleware.js";

const router = express.Router();

router.post("/create", validate(lecturerZOD), createLecturer);

export default router;
