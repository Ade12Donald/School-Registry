//import from node modules
import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";
import { createServer } from "http";
import { Server } from "socket.io";

//import from Server folder
import studentRouter from "./routers/studentRouter.js";
import courseRouter from "./routers/courseRouter.js";
import lecturerRouter from "./routers/lecturerRoute.js";
import corsOption from "./utils/corsOptions.js";

//Configuration
dotenv.config();
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);
const corsConfig = corsOption(5173);

//VARIABLES
const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.COMPASS_URI;

//Middleware
app.use(cors(corsConfig));
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));

app.use("/portal/student", studentRouter);
app.use("/portal/courses", courseRouter);
app.use("/portal/lecturer", lecturerRouter);

app.use((req, res) => {
  res.status(404).json({ ERROR: "PAGE NOT FOUND" });
});

//Connection
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("MONGODB CONNECTED");
    httpServer.listen(PORT, () =>
      console.log(`Server is running on PORT: ${PORT}`),
    );
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
