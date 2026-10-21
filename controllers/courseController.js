import lecturerModel from "../models/lecturerModel.js";
import courseModel from "../models/courseModel.js";
import errorHandling from "../utils/errorHandling.js";
import lecturerNameConverter from "../utils/NameToID.js";

export const createCourse = async (req, res) => {
  try {
    const { course, lecturer: lecturerName, code, units } = req.body;
    if (!(req.user.tag === "lecturer")) {
      return res
        .status(403)
        .status({ ERROR: "You are not authorized to create a course" });
    }

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

export const getCourse = async (req, res) => {
  try {
    const { id: courseId } = req.params;

    if (!mongoose.isValidObjectId(courseId)) {
      return res.status(400).json({ Error: "Input a valid Course Id" });
    }

    const course = await courseModel.findById(courseId);

    if (!course) {
      res.status(404).json({
        ERROR: "Course NOT FOUND",
      });
    }

    res.status(200).json({
      message: "Course fetched successfully",
      courseData: course,
    });
  } catch (error) {
    errorHandling(error, res);
  }
};
