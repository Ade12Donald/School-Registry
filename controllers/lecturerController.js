import lecturerModel from "../models/lecturerModel.js";
import errorHandling from "../utils/errorHandling.js";

export const createLecturer = async (req, res) => {
  try {
    const { fullName, email, password, department } = req.body;

    const lecturer = await lecturerModel.create({
      fullName,
      email,
      password,
      department,
    });

    res.status(201).json({
      message: "Lecturer created successfully",
      data: lecturer,
      greeting: `Welcome, ${lecturer.fullName.split(" ")[1]}`,
    });
  } catch (error) {
    errorHandling(error, res);
  }
};
