import mongoose from "mongoose";
import studentModel from "../models/studentModel.js";
import courseIDConverter from "../utils/NameToID.js";
import courseModel from "../models/courseModel.js";
import errorHandling from "../utils/errorHandling.js";

export const createStudent = async (req, res) => {
  try {
    const {
      fullName,
      email,
      password,
      faculty,
      department,
      year,
      courses: coursesName,
    } = req.body;

    const courses = await courseIDConverter(coursesName, courseModel, "course");

    const student = await studentModel.create({
      fullName,
      email,
      password,
      faculty,
      department,
      year,
      courses,
    });
    res.status(201).json({
      message: "Student created successfully",
      data: student,
      greeting: `Welcome, ${student.fullName.split(" ")[1]}`,
    });
  } catch (error) {
    errorHandling(error, res);
  }
};

export const getStudent = async (req, res) => {
  try {
    const { id: myId } = req.params;

    if (!mongoose.isValidObjectId(myId)) {
      return res.status(400).json({ Error: "Input a valid user Id" });
    }

    const me = await studentModel.findById(myId).select("-password");
    if (!me) {
      return res.status(404).json({
        ERROR: "User NOT FOUND",
      });
    }

    res.status(200).json({
      message: "Student fetched successfully",
      greeting: `Welcome, ${me.fullName.split(" ")[1]}`,
      data: me,
    });
  } catch (error) {
    res.status(500).json({ ERROR: error.message });
  }
};

export const updateStudent = async (req, res) => {
  try {
    const { id: myId } = req.params;
    const {
      fullName,
      email,
      password,
      faculty,
      department,
      year,
      courses: coursesName,
    } = req.body;

    if (!mongoose.isValidObjectId(myId)) {
      return res.status(400).json({ Error: "Input a valid user Id" });
    }

    const courses = await courseIDConverter(coursesName, courseModel, "course");

    const me = await studentModel.findByIdAndUpdate(
      myId,
      { fullName, email, faculty, department, year, courses },
      {
        returnDocument: "after",
        runValidators: true,
      },
    );

    if (!me) {
      return res.status(404).json({
        ERROR: "User NOT FOUND",
      });
    }

    me.password = password;
    await me.save();

    res.status(200).json({
      message: "Student updated successfully",
      data: me,
    });
  } catch (error) {
    errorHandling(error, res);
  }
};

export const deleteStudent = async (req, res) => {
  try {
    const { id: myId } = req.params;

    if (!mongoose.isValidObjectId(myId)) {
      return res.status(400).json({ Error: "Input a valid user Id" });
    }

    const me = await studentModel.findByIdAndDelete(myId);
    if (!me) {
      return res.status(404).json({
        ERROR: "User NOT FOUND",
      });
    }

    res.status(200).json({
      message: "Student updated successfully",
      greeting: `Bye, ${me.fullName.split(" ")[1]}`,
      data: me,
    });
  } catch (error) {
    res.status(500).json({ ERROR: error.message });
  }
};
