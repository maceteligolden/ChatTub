import 'reflect-metadata';
import express from "express";
import { Server } from "socket.io";
import cors from "cors";
import http from "http";
import auth_router from './auth/auth.route';
import ContactSocket from './contact/sockets/contact.scoket';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/v1/auth', auth_router);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

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


server.listen(8000, () => {
    console.log("Listening to port")
})





