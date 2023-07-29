import { injectable } from "tsyringe";
import { Request, Response } from "express";
import CreateAccountService from "../service/create-account.service";
import LoginService from "../service/login.service";

@injectable()
export default class AuthController {
    constructor(
        private createAccountService: CreateAccountService,
        private loginService: LoginService,
    ){}

    async createAccount(req: Request, res: Response){
        await this.createAccountService.execute(req, res)
    }

    async login(req: Request, res: Response){
        await this.loginService.execute(req, res)
    }
}