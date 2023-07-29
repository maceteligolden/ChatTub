import express from "express";
import { container } from "tsyringe";
import AuthController from "./controller/auth.controller";

const auth_router = express.Router();
const auth_controller = container.resolve(AuthController);

auth_router.post("/signup", auth_controller.createAccount);
auth_router.post("/signin", auth_controller.login);

export default auth_router;