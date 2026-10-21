import lecturerModel from "../models/lecturerModel.js";
import errorHandling from "../utils/errorHandling.js";
import { signToken } from "../utils/token.js";

export const createLecturer = async (req, res) => {
  try {
    const { fullName, email, password, department } = req.body;

    const lecturer = await lecturerModel.create({
      fullName,
      email,
      password,
      department,
    });

    signToken(res, lecturer.tag, lecturer._id, "lecturerToken");

    res.status(201).json({
      message: "Lecturer created successfully",
      data: lecturer,
      greeting: `Welcome, ${lecturer.fullName.split(" ")[1]}`,
    });
  } catch (error) {
    errorHandling(error, res);
  }
};

export const getLecturer = async (req, res) => {
  try {
    const { id: myId } = req.params;

    if (!mongoose.isValidObjectId(myId)) {
      return res.status(400).json({ Error: "Input a valid user Id" });
    }

    const me = await lecturerModel.findById(myId).select("-password");
    if (!me) {
      return res.status(404).json({
        ERROR: "User NOT FOUND",
      });
    }

    res.status(200).json({
      message: "Lecturer fetched successfully",
      greeting: `Welcome, ${me.fullName.split(" ")[2]}`,
      data: me,
    });
  } catch (error) {
    errorHandling(error, res);
  }
};

export const updateLecturer = async (req, res) => {
  try {
    const { id: myId } = req.user;
    const { fullName, email, password, department } = req.body;

    if (!mongoose.isValidObjectId(myId)) {
      return res.status(400).json({ Error: "Input a valid user Id" });
    }

    const me = await lecturerModel.findByIdAndUpdate(
      myId,
      { fullName, email, department },
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
      message: "Lecturer updated successfully",
      data: me,
    });
  } catch (error) {
    errorHandling(error, res);
  }
};

export const deleteLecturer = async (req, res) => {
  try {
    const { id: myId } = req.user;

    if (!mongoose.isValidObjectId(myId)) {
      return res.status(400).json({ Error: "Input a valid user Id" });
    }

    const me = await lecturerModel.findByIdAndDelete(myId);
    if (!me) {
      return res.status(404).json({
        ERROR: "User NOT FOUND",
      });
    }

    res.status(200).json({
      message: "Lecturer updated successfully",
      greeting: `Bye, ${me.fullName.split(" ")[1]}`,
      data: me,
    });
  } catch (error) {
    errorHandling(error, res);
  }
};

export const loginLecturer = async (req, res) => {
  try {
    const { email, password } = req.body;

    const me = await lecturerModel.findOne({ email });

    if (!me) {
      return res.status(404).json("Invalid email or password");
    }
    if (!(await bcrypt.compare(password, me.password))) {
      return res.status(404).json("Invalid email or password");
    }
    res.status(200).json({
      message: "Lecturer logged in successfully",
      greeting: `Welcome, ${me.fullName.split(" ")[2]}`,
      data: me,
    });
  } catch (error) {
    errorHandling(error, res);
  }
};
