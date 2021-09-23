import { User } from "@models/User";

export interface IUserRepository {
  findByCpf(cpf: string): Promise<User>;
}
