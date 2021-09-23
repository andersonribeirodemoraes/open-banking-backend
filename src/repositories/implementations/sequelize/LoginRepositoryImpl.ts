import { ILoginRepository } from "src/repositories/interfaces/ILoginRepository";
import { LoginDTO } from "src/useCases/Login/LoginDTO";

export class LoginRepositoryImpl implements ILoginRepository {
  async login(loginDTO: LoginDTO): Promise<string> {
    return "";
  }
}
