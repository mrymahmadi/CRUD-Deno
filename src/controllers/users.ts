import Fastify, {
  FastifyRequest,
  FastifyReply,
  FastifyInstance,
} from "npm:fastify@5.1.0";
//import { Pool } from "https://deno.land/x/postgres/mod.ts";

import * as users from "../services/users.ts";
import { PrismaClient } from "../../generated/client/index.d.ts";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const Prisma = require("../../generated/client/index.js");
const prisma: PrismaClient = new Prisma.PrismaClient();

const fastify: FastifyInstance = Fastify();

export const getUsers = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const allUsers = await prisma.user.findMany();
  reply.send(allUsers);
};

export const getUser = async (
  request: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
) => {
  const id = parseInt(request.params.id);
  console.log(id);
  if (id) {
    const user = await prisma.user.findUnique({
      where: { id },
      select: { id: true, name: true, email: true, posts: true },
    });
    reply.send(user);
  } else {
    reply.status(404).send("user not found");
  }
};

export const newUser = async (
  request: FastifyRequest<{ Body: { name: string; email: string } }>,
  reply: FastifyReply
) => {
  const { name, email } = request.body;
  const newUser = await prisma.user.create({ data: { name, email } });
  reply.status(201).send(newUser);
};

export const updateUser = async (
  request: FastifyRequest<{
    Params: { id: string };
    Body: { name: string; email: string };
  }>,
  reply: FastifyReply
) => {
  const id = parseInt(request.params.id);
  const { name, email } = request.body;
  const newInfo = await prisma.user.update({
    where: { id },
    data: { name, email },
  });
  reply.status(201).send(newInfo);
};

export const deleteUser = async (
  request: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
) => {
  const id = parseInt(request.params.id);
  await prisma.user.delete({ where: { id } });
  reply.send({ message: "User deleted" });
};
