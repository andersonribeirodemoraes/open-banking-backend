import { ILoginRepository } from "src/repositories/interfaces/ILoginRepository";
import { IUserRepository } from "src/repositories/interfaces/IUserRepository";
import { LoginDTO } from "./LoginDTO";

export class LoginUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(login: LoginDTO) {
    const user = await this.userRepository.findByCpf(login.cpf);

    if (!user) {
      throw new Error("User does not exist");
    }
  }
}
