import { int, z } from "zod";

const studentZOD = z.object({
  fullName: z
    .string()
    .trim()
    .min(5, "Name should have a minimum of 5 characters")
    .max(25, "Name should have a maximum of 25 characters"),
  email: z.string().trim().min(2).toLowerCase().email(),
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
  year: z.coerce
    .number()
    .int()
    .min(100)
    .max(600)
    .multipleOf(100, "Level must be 100, 200, ..... 600"),
  faculty: z
    .string()
    .trim()
    .min(2)
    .toLowerCase()
    .pipe(
      z.enum(
        [
          "architecture",
          "arts",
          "basic clinical sciences",
          "basic medical sciences",
          "clinical sciences",
          "communication & media studies",
          "computing & informatics",
          "creative arts",
          "dental sciences",
          "education",
          "engineering",
          "environmental sciences",
          "health professions",
          "law",
          "life sciences",
          "management sciences",
          "pharmacy",
          "physical & earth sciences",
          "social sciences",
        ],
        {
          error:
            "Pick a valid faculty: Architecture, Arts, Basic Clinical Sciences, Basic Medical Sciences, Clinical Sciences, Communication & Media Studies, Computing & Informatics, Creative Arts, Dental Sciences, Education, Engineering, Environmental Sciences, Health Professions, Law, Life Sciences, Management Sciences, Pharmacy, Physical & Earth Sciences, or Social Sciences",
        },
      ),
    ),
  department: z.string().trim().min(2).toLowerCase(),
  courses: z.string().trim().min(2).toLowerCase(),
});

export default studentZOD;
