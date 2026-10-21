import express from "express";
import lecturerZOD from "../schema/lecturerSchema.js";
import {
  createLecturer,
  deleteLecturer,
  getLecturer,
  loginLecturer,
  updateLecturer,
} from "../controllers/lecturerController.js";
import { validate } from "../middleware/validateMiddleware.js";
import { verifyToken } from "../middleware/authMiddleware.js";
import loginZOD from "../schema/loginSchema.js";

const router = express.Router();

router.post("/create", validate(lecturerZOD), createLecturer);
router.get("login", validate(loginZOD), loginLecturer);

router.use(verifyToken("lecturerToken"));

router.get("/getLecturer", getLecturer);
router.patch(
  "/updateLecturer",
  validate(lecturerZOD.partial()),
  updateLecturer,
);
router.delete("/deleteLecturer", deleteLecturer);

export default router;
