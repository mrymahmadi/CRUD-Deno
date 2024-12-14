import { FastifyInstance } from "npm:fastify@5.1.0";
import * as userController from "../controllers/users.ts";

export default function (fastify: FastifyInstance) {
  fastify.get("/users", userController.getUsers); //true
  fastify.get("/users/:id", userController.getUser); //true
  fastify.post("/users", userController.newUser); ///true
  fastify.put("/users/:id", userController.updateUser); //true
  fastify.delete("/users/:id", userController.deleteUser); //true
}
