import Fastify, { FastifyRequest, FastifyReply } from "npm:fastify";
import { createRequire } from "node:module";
import userRoutes from "./src/routes/users.ts";
import { PrismaClient } from "./generated/client/deno/index.d.ts";

const fastify = Fastify({ logger: false });
const require = createRequire(import.meta.url);
const Prisma = require("./generated/client/index.js");
const prisma: PrismaClient = new Prisma.PrismaClient();

fastify.register(userRoutes);
fastify.get("/", (_, res: FastifyReply) => {
  res.send("hey girl");
});
//first test for action db with prisma and fastify - Deno
fastify.post(
  "/new",
  async (
    req: FastifyRequest<{ Body: { name: string; email: string; posts: any } }>,
    res: FastifyReply
  ) => {
    const { name, email, posts } = req.body;
    const newU = await prisma.user.create({ data: { name, email, posts } });

    res.send(newU);
  }
);

fastify.listen({ port: 2000 }, (err, server) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`listening on ${server} `);
  }
});
