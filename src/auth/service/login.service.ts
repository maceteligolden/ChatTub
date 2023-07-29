import { injectable } from "tsyringe";
import { Request, Response } from "express";
import IService from "../../common/interface/service.interface";
import UserRepository from "../../common/database/repository/user.repsoitory";
import User from "../../common/database/model/user.model";

@injectable()
export default class LoginService implements IService<Request, Response> {
    constructor(
        private userRepository: UserRepository
    ){

    }

    async execute(req: Request, res: Response): Promise<void> {
        try {

            const { phone } = req.body;

            const data = await this.userRepository.fetchData({phone});

            if(!data) {
                res.status(404).json({
                    message: "account not found",
                })
            }

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