import { IUserRepository } from "src/repositories/interfaces/IUserRepository";

export class UserRepositoryImpl implements IUserRepository {
  async findByCpf(cpf: string): Promise<any> {
    return "";
  }
}
