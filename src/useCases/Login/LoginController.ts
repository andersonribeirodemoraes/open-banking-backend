import { Request, Response } from "express";
import { LoginUseCase } from "./LoginUseCase";

export class LoginController {
  constructor(private loginUseCase: LoginUseCase) {}

  async login(request: Request, response: Response) {
    const { cpf, password } = request.body;

    try {
      const token = await this.loginUseCase.execute({
        cpf,
        password,
      });

      return response.status(200).json({
        token,
      });
    } catch (err: any) {
      return response.status(400).json({
        message: err.message || "Server Error",
      });
    }
  }
}
