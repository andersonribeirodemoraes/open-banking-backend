import { IUserRepository } from "src/repositories/interfaces/IUserRepository";
import { LoginDTO } from "./LoginDTO";

export class LoginUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(login: LoginDTO): Promise<string> {
    const user = await this.userRepository.findByCpf(login.cpf);

    if (!user) {
      throw new Error("User does not exist");
    }

    //Implementar comparação de senha com criptografia
    if (login.password != user.password) {
      throw new Error("Incorrect password");
    }

    //Criar token
    const token = "1t23u1g3g187bt187bx7812b";

    return token;
  }
}
