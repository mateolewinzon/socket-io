import { createServer } from "http";
import { Server, Socket } from "socket.io";
import express from "express";

const app = express();

const httpServer = createServer(app);
const io = new Server(httpServer, {
  // ...
});

io.on("connection", (socket: Socket) => {
  // ...
});

app.use("/test", (req, res) => res.send("Express server listening!"));

httpServer.listen(3000);
