import { Router } from "express";
import { loginController } from "src/useCases/Login";

const loginRouter = Router();

loginRouter.post("/", (request, response) => {
  return loginController.login(request, response);
});

export default loginRouter;
