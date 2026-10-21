import { z } from "zod";

const loginZOD = z.object({
  email: z
    .string()
    .trim()
    .min(2, "Email should have a minimum of 2 characters")
    .toLowerCase()
    .email(),
  password: z.string().min(1, "Password cannot be empty"),
});

export default loginZOD;
