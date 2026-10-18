import courseModel from "../models/courseModel.js";

export const createCourse = async (req, res) => {
  try {
    const { course, lecturer } = req.body;

    const createdCourse = await studentModel.create({ course, lecturer });

    res.status(201).json({
      message: "Course created successfully",
      courseData: createdCourse,
    });
  } catch (error) {
    res.status(500).json({ ERROR: error.message });
  }
};
