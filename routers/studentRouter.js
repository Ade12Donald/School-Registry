import express from "express";
import studentZOD from "../schema/studentSchema.js";
import {
  createStudent,
  getStudent,
  updateStudent,
  deleteStudent,
  getAllCourse,
  loginStudent,
} from "../controllers/studentController.js";
import { validate } from "../middleware/validateMiddleware.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

// Student Account
router.post("/signUp", validate(studentZOD), createStudent);
router.get("login", validate(studentZOD.partial()), loginStudent);

router.use(verifyToken("studentToken"));
// Student-Course Relationship
router.get("/me/course", getAllCourse);
// Student Account edit
router.get("/me/:id", getStudent);
router.patch("/me/:id", validate(studentZOD.partial()), updateStudent);
router.delete("/me/:id", deleteStudent);

export default router;
