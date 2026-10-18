import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import dotenv from "dotenv";

import studentRouter from "./routers/studentRouter.js";
import courseRouter from "./routers/courseRouter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.COMPASS_URI;

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("MONGODB CONNECTED");
    app.listen(PORT, console.log(`Server is running on PORT: ${PORT}`));
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

app.use(express.json());
app.use(morgan("dev"));

app.use("/studentPortal/student", studentRouter);
app.use("/StaffPortal/courses", courseRouter);

app.use((req, res) => {
  res.status(404).json({ ERROR: "PAGE NOT FOUND" });
});
