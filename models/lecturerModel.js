import mongoose from "mongoose";
import bcrypt from "bcrypt";

const studentSchema = new mongoose.Schema({
  lecturer: {
    type: String,
    trim: true,
    minlength: [5, "{PATH} should have a minimum of 5 characters"],
    maxlength: [25, "{PATH} should have a maximum of 25 characters"],
    required: [true, "{PATH} is required"],
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    required: [true, "{PATH} is required"],
  },
  password: {
    type: String,
    trim: true,
    required: [true, "{PATH} is required"],
    minlength: [6, "{PATH} should have a minimum of 6characters"],
  },
  department: {
    type: String,
    trim: true,
    lowercase: true,
    required: [true, "{PATH} is required"],
  },
});

studentSchema.pre("save", async () => {
  if (!this.isModified("password")) return;
  this.password = await bcrypt.hash(this.password, 10);
});

export default mongoose.model("lecturer", studentSchema);
