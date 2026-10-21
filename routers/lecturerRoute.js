import express from "express";
import lecturerZOD from "../schema/lecturerSchema.js";
import { createLecturer } from "../controllers/lecturerController.js";
import { validate } from "../middleware/validateMiddleware.js";

const router = express.Router();

router.post("/create", validate(lecturerZOD), createLecturer);

export default router;
