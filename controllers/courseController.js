import lecturerModel from "../models/lecturerModel.js";
import courseModel from "../models/courseModel.js";
import errorHandling from "../utils/errorHandling.js";
import lecturerNameConverter from "../utils/NameToID.js";

export const createCourse = async (req, res) => {
  try {
    const { course, lecturer: lecturerName, code, units } = req.body;

    const lecturer = await lecturerNameConverter(
      lecturerName,
      lecturerModel,
      "fullName",
    );

    const createdCourse = await courseModel.create({
      course,
      code,
      lecturer,
      units,
    });

    res.status(201).json({
      message: "Course created successfully",
      courseData: createdCourse,
    });
  } catch (error) {
    errorHandling(error, res);
  }
};
  }
};
