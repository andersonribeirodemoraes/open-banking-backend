import { Request, Response } from "express";
import { LoginUseCase } from "./LoginUseCase";

export class LoginController {
  constructor(private loginUseCase: LoginUseCase) {}

  async login(request: Request, response: Response) {}
}
