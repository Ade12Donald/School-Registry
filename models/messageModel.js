import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    room: {
      type: String,
      required: true,
      immutable: true,
      index: true,
    },
    message: {
      type: String,
      required: true,
      immutable: true,
      trim: true,
      maxlength: [1000, "Too long"],
    },
  },
  { timestamps: true },
);

export default mongoose.model("message", messageSchema);
