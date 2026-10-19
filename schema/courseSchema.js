import { z } from "zod";

const courseZOD = z.object({
  course: z.string().trim().min(2).toLowerCase(),
  lecturer: z.array(
    z
      .string()
      .trim()
      .min(2, "Lecture's Name should have a minimum of 2 characters"),
  ),
  code: z
    .string()
    .trim()
    .toUpperCase()
    .length(6, 2, "Courses must be 6 characters"),
  units: z.number().int().min(0, "Courses should be a minimum of 2"),
});

export default courseZOD;
