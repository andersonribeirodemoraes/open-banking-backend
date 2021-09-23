import { Router } from "express";

const loginRouter = Router();

loginRouter.post("/", (request, response) => {
  return response.json({ message: "Hello World" });
});

export default loginRouter;
