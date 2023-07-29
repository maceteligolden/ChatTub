import 'reflect-metadata';
import express from "express";
import { Server } from "socket.io";
import cors from "cors";
import http from "http";
import auth_router from './auth/auth.route';
import ContactSocket from './contact/sockets/contact.scoket';
import messageSocket from './message/sockets/message.socket';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/v1/auth', auth_router);

const server = http.createServer(app);

const io = new Server(server,
    {
        cors: {
            origin: "*",
            methods: ["GET", "POST"]
        }
    }
);

ContactSocket(io);
messageSocket(io);

server.listen(8000, () => {
    console.log("Listening to port")
})





