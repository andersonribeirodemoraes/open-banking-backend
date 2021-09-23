import { UserRepositoryImpl } from "src/repositories/implementations/sequelize/UserRepositoryImpl";
import { LoginController } from "./LoginController";
import { LoginUseCase } from "./LoginUseCase";

const userRepositoryImpl = new UserRepositoryImpl();

const loginUseCase = new LoginUseCase(userRepositoryImpl);

const loginController = new LoginController(loginUseCase);

export { loginUseCase, loginController };
