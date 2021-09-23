import { User } from "@models/User";
import { IUserRepository } from "src/repositories/interfaces/IUserRepository";

export class UserRepositoryImpl implements IUserRepository {
  async findByCpf(cpf: string): Promise<User> {
    const user = new User({
      cpf: "12345678912",
      name: "Anderson",
      password: "123456",
    });
    return user;
  }
}
