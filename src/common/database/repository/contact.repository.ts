import { injectable } from "tsyringe";
import IRepository from "../../interface/repository.interface";
import Contact from "../model/contact.model";

@injectable()
export default class ContactRepository implements IRepository<Contact> {
    constructor(){}
    createData(args: Contact): Promise<Contact> {
        throw new Error("Method not implemented.");
    }
    updateData(id: string, body: Contact): Promise<Contact> {
        throw new Error("Method not implemented.");
    }
    fetchData(args: Contact): Promise<Contact[]> {
        throw new Error("Method not implemented.");
    }
    fetchOneData(id: string): Promise<Contact> {
        throw new Error("Method not implemented.");
    }
    deleteData(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
}