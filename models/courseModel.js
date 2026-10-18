import mongoose from "mongoose";
const courseSchema = new mongoose.Schema({
  course: {
    type: String,
    lowercase: true,
    trim: true,
    required: [true, "{PATH} is required"],
  },
  lecturer: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "lecturer",
    required: [true, "{PATH} is required"],
  },
  studentCount: {
    type: Number,
    default: 0,
  },
});

export default mongoose.model("course", courseSchema);
