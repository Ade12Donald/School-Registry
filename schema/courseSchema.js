import { z } from "zod";

const courseZOD = z.object({
  courses: z.string().trim().min(2).toLowerCase(),
  lecturer: z.array(
    z
      .string()
      .trim()
      .min(2, "Lecture's Name should have a minimum of 2 characters")
      .toLowerCase(),
  ),
  code: z
    .string()
    .trim()
    .toUpperCase()
    .length(6, min(2, "Courses must be 6 characters")),
  units: z.number().int().min(2, "Courses should be a minimum of 2"),
});

export default courseZOD;
