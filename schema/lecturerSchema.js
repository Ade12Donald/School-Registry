import { z } from "zod";

const lecturerZOD = z.object({
  fullName: z
    .string()
    .trim()
    .min(5, "Name should have a minimum of 5 characters")
    .max(30, "Name should have a maximum of 25 characters"),
  email: z
    .string()
    .trim()
    .toLowerCase()
    .min(2, "Email should have a minimum of 2 characters")
    .email(),
  password: z
    .string()
    .min(6, "Password should have a minimum of 6 characters")
    .regex(/[A-Z]/, "It should contain at least 1 uppercase Letter")
    .regex(/[a-z]/, "It should contain at least 1 lowercase Letter")
    .regex(/\d/, "It should contain at least 1 digit")
    .regex(
      /[@#*&$<>_-]/,
      "It should contain at least a special symbol => (@,#,*,&,$,<,>,_ or -)",
    ),
  department: z
    .string()
    .trim()
    .toLowerCase()
    .min(2, "Department name should have a minimum of 2 characters"),
});

export default lecturerZOD;
