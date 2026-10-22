import { Server } from "socket.io";
import corsOption from "../utils/corsOptions.js";
import registerHandler from "./chatHandlers.js";

export const serverInit = (server) => {
  const io = new Server(server, { cors: corsOption(5173) });
  io.on("connection", (socket) => {
    console.log("Socket is ready");
    registerHandler(socket, io);
  });
  return io;
};
