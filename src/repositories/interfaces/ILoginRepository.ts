import { User } from "@models/User";
import { LoginDTO } from "src/useCases/Login/LoginDTO";

export interface ILoginRepository {
  login(loginDTO: LoginDTO): Promise<string>;
}
