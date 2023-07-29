import { injectable } from "tsyringe";
import IRepository from "../../interface/repository.interface";
import Contact from "../model/contact.model";
import Message from "../model/message.model";

@injectable()
export default class MessageRepository implements IRepository<Message> {
    constructor(){}
    createData(args: Message): Promise<Message> {
        throw new Error("Method not implemented.");
    }
    updateData(id: string, body: Message): Promise<Message> {
        throw new Error("Method not implemented.");
    }
    fetchData(args: Message): Promise<Message[]> {
        throw new Error("Method not implemented.");
    }
    fetchOneData(id: string): Promise<Message> {
        throw new Error("Method not implemented.");
    }
    deleteData(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    
}