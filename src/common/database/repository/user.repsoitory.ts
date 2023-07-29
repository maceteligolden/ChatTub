import { injectable } from "tsyringe";
import IRepository from "../../interface/repository.interface";
import User from "../model/user.model";

@injectable()
export default class UserRepository implements IRepository<User> {
    constructor(){}
    createData(args: User): Promise<User> {
        throw new Error("Method not implemented.");
    }
    updateData(id: string, body: User): Promise<User> {
        throw new Error("Method not implemented.");
    }
    fetchData(args: User): Promise<User[]> {
        throw new Error("Method not implemented.");
    }
    fetchOneData(id: string): Promise<User> {
        throw new Error("Method not implemented.");
    }
    deleteData(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
}