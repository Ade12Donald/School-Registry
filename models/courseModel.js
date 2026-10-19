import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    course: {
      type: String,
      lowercase: true,
      trim: true,
      required: [true, "{PATH} is required"],
    },
    code: {
      type: String,
      uppercase: true,
      trim: true,
      required: [true, "{PATH} is required"],
    },
    lecturer: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "lecturer",
      required: [true, "{PATH} is required"],
    },
    units: {
      type: Number,
      default: 1,
    },
    studentCount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true, versionKey: false },
);

export default mongoose.model("course", courseSchema);
