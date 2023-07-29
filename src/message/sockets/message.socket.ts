import { Server } from "socket.io";
import { container } from "tsyringe";
import MessageRepository from "../../common/database/repository/message.repository";
import Message from "../../common/database/model/message.model";
import Contact from "../../common/database/model/contact.model";



export default (io: Server) => {
    const messageRepository = container.resolve(MessageRepository)

    io.on("connection", (socket) => {
    
        socket.on("disconnect", () => {
            console.log("server successfully disconnected")
        });
    
        socket.on("SEND_MESSAGE", async(contact: Contact, data: Message) => {
            const response = await messageRepository.createData(data);
            socket.in(contact.room ? contact.room : "").emit(response.message ? response.message : "");
        });

        socket.on("FETCH_MESSAGE", async(contact: Contact) => {
            socket.join(contact.room ? contact.room : "")
            const response = await messageRepository.fetchData({ room: contact.room})
            socket.emit("FETCH_CONTACTS:RESPONSE", response);
        });
    });
}