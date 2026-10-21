import { Server } from "socket.io";

export const serverInit = (server) => {
  const io = new Server(server);
  io.on("connection", (socket) => {
    console.log("Socket is ready");
  });
  return io;
};
