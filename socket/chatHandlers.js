export default (socket, io) => {
  // client join room
  socket.on("join", async (room, acknowledgement) => {
    await socket.join(room);
    console.log("Joined room:", JSON.stringify(room));
    console.log("Current socket ID:", socket.id);
    console.log("Socket rooms:", [...socket.rooms]);
    acknowledgement({
      room,
      success: true,
      status: 201,
      message: "Room joined Successfully",
    });
  });

  // client to send message to room
  socket.on("anonymousMessage", (data, acknowledgement) => {
    console.log("Message room:", JSON.stringify(data.room));
    console.log("Current socket ID:", socket.id);
    console.log("Socket rooms:", [...socket.rooms]);

    if (!socket.rooms.has(data.room)) {
      return acknowledgement({
        room: data.room,
        success: false,
        status: 403,
        message: "You have not joined room yet",
      });
    }
    socket.to(data.room).emit("receivedAnonymous", data.message);
    acknowledgement({
      room: data.room,
      success: true,
      status: 200,
      message: "Message received successfully",
    });
  });
};
