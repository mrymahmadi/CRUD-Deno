//we dont need to this file
/*import { Client } from "https://deno.land/x/postgres@v0.19.3/mod.ts";
import { IUser } from "../models/users.ts";

const connecingSTR = "postgres://postgres:postgres@localhost:5432/cvProject";

const client = new Client(connecingSTR);

export const getUsers = async (): Promise<IUser[]> => {
  console.log("inside getUsers");
  const result = await client.queryObject<IUser>("SELECT * FROM User");
  return result.rows;
};

export const getUser = async (id: string): Promise<IUser | null> => {
  console.log("inside getUser");
  const findeUser = await client.queryObject<IUser>(
    "SELECT * FROM User WHERE id = $1",
    [id]
  );
  return findeUser.rows[0] || null;
};

export const newUser = async (user: IUser): Promise<IUser> => {
  console.log("inside newUser");
  const result = await client.queryObject<IUser>(
    "INSERT INTO User (name, email, posts) VALUES ($1, $2) RETURNING *",
    [user.name, user.posts, user.email]
  );
  return result.rows[0];
};

export const updateUser = async (id: number, user: IUser): Promise<IUser> => {
  console.log("inside updateUser");
  const result = await client.queryObject<IUser>(
    "UPDATE User SET name = $1, email = $2 WHERE id = $3 RETURNING *",
    [user.email, user.name]
  );
  return result.rows[0];
};

export const deleteUser = async (id: number): Promise<void> => {
  console.log("inside deleteUser");
  await client.queryObject("DELETE FROM User WHERE id = $1,"[id]);
};
*/
