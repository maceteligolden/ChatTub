import { injectable } from "tsyringe";
import { Request, Response } from "express";
import IService from "../../common/interface/service.interface";
import UserRepository from "../../common/database/repository/user.repsoitory";
import User from "../../common/database/model/user.model";

@injectable()
export default class CreateAccountService implements IService<Request, Response> {
    constructor(
        private userRepository: UserRepository
    ){

    }

    async execute(req: Request, res: Response): Promise<void> {
        try {

            const { name, phone, status, avatar } = req.body;

            const userData: User = {
                name,
                phone,
                status,
                avatar: avatar ? avatar : ""
            }
            const data = await this.userRepository.createData(userData);

            res.status(201).json({
                message: "account successfully created",
                data
            })
        } catch(err: any){
            res.status(500).json({
                message: err.message
            })
        }
    }
}