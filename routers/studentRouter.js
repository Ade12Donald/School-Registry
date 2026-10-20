import express from "express";
import {
  createStudent,
  getStudent,
  updateStudent,
  deleteStudent,
  getAllCourse,
} from "../controllers/studentController.js";
import { validate } from "../middleware/validateMiddleware.js";
import studentZOD from "../schema/studentSchema.js";

const router = express.Router();

// Student Account
router.post("/signUp", validate(studentZOD), createStudent);
router.get("/me/:id", getStudent);
router.patch("/me/:id", validate(studentZOD.partial()), updateStudent);
router.delete("/me/:id", deleteStudent);

// Student-Course Relationship
router.get("/me/course", getAllCourse);

export default router;
