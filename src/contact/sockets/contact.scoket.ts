import { Server } from "socket.io";
import { container } from "tsyringe";
import AddContactService from "../service/add-contact.service";
import Contact from "../../common/database/model/contact.model";
import ContactRepository from "../../common/database/repository/contact.repository";
import User from "../../common/database/model/user.model";



export default (io: Server) => {
    const createContact = container.resolve(AddContactService);
    const contactRepository = container.resolve(ContactRepository)

    io.on("connection", (socket) => {
    
        socket.on("disconnect", () => {
            console.log("server successfully disconnected")
        });
    
        socket.on("ADD_CONTACT", async(data: Contact) => {
            const response = createContact.execute(data);
            socket.emit("ADD_CONTACT:RESPONSE", response)
        });

        socket.on("FETCH_CONTACTS", async(data: User) => {
            const response = contactRepository.fetchData({ owner_id: data._id });
            socket.emit("FETCH_CONTACTS:RESPONSE", response);
        });
    });
}