import { z } from "zod";

const courseZOD = z.object({
  courses: z.string().trim().min(2).toLowerCase(),
  lecturer: z.string().trim().min(2).toLowerCase(),
});

export default courseZOD;
