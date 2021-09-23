import { ILoginRepository } from "src/repositories/interfaces/ILoginRepository";

export class LoginUseCase {
  constructor(private loginRepository: ILoginRepository) {}

  async execute() {}
}
