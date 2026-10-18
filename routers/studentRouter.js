import express from "express";
import {
  createStudent,
  getStudent,
  updateStudent,
  deleteStudent,
} from "../controllers/studentController.js";
import { validate } from "../middleware/validateMiddleware.js";
import studentZOD from "../schema/studentSchema.js";

const router = express.Router();

router.post("/signUp", validate(studentZOD), createStudent);
router.get("/me/:id", getStudent);
router.patch("/me/:id", validate(studentZOD.partial()), updateStudent);
router.delete("/me/:id", deleteStudent);

export default router;
