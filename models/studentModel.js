import mongoose from "mongoose";
import bcrypt from "bcrypt";

const studentSchema = new mongoose.Schema(
  {
    fullName: {
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
    year: {
      type: Number,
      enum: {
        values: [100, 200, 300, 400, 500, 600],
        message: "{VALUE} is not a valid Level",
      },
      required: [true, "{PATH} is required"],
    },
    faculty: {
      type: String,
      enum: {
        values: [
          "architecture",
          "arts",
          "basic clinical sciences",
          "basic medical sciences",
          "clinical sciences",
          "communication & media studies",
          "computing & informatics",
          "creative arts",
          "dental sciences",
          "education",
          "engineering",
          "environmental sciences",
          "health professions",
          "law",
          "life sciences",
          "management sciences",
          "pharmacy",
          "physical & earth sciences",
          "social sciences",
        ],
        message: "{VALUE} is not a valid Faculty",
      },
      trim: true,
      lowercase: true,
      required: [true, "{PATH} is required"],
    },
    department: {
      type: String,
      trim: true,
      lowercase: true,
      required: [true, "{PATH} is required"],
    },
    courses: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "course",
    },
  },
  { timestamps: true, versionKey: false },
);

studentSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  this.password = await bcrypt.hash(this.password, 10);
});

export default mongoose.model("student", studentSchema);
