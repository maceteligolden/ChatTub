import express from "express";
import { Server } from "socket.io";
import cors from "cors";
import http from "http";

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

const server = http.createServer(app);

const io = new Server(server,
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
);

io.on("connection", (socket) => {
    console.log("server connected");
    socket.on("disconnect", () => {
        console.log("server successfully disconnected")
    });

    socket.on("SEND_MESSAGE", (msg: string) => {
        console.log("message sent" +  msg)
    })
});

server.listen(8000, () => {
    console.log("Listening to port")
})





