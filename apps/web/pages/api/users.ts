// pages/api/users.ts
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@repo/orm/prisma";

/**
 * Handles all the API routes for users.
 *
 * Supported methods: POST, DELETE, GET
 *
 * POST: Adds a new user to the database.
 * DELETE: Removes the user with the given ID from the database.
 * GET: Fetches all the users from the database.
 *
 * @param {NextApiRequest} req - The request coming from the client.
 * @param {NextApiResponse} res - The response that will be sent back to the client.
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  switch (method) {
    case "POST": {
      // Add User
      const { name, email } = req.body;
      try {
        console.log("trying to upload the user...");
        const newUser = await prisma.user.create({
          data: { name, email },
        });
        res.status(201).json(newUser);
      } catch (error) {
        console.log("getting this error" + error);
        res.status(500).json({ error: "Error creating user" });
      }
      break;
    }

    case "DELETE": {
      // Remove User
      const { id } = req.body;
      try {
        const deletedUser = await prisma.user.delete({
          where: { id: parseInt(id) },
        });
        res.status(200).json(deletedUser);
      } catch (error) {
        res.status(500).json({ error: "Error deleting user" });
      }
      break;
    }

    case "GET":
      // Fetch Users
      try {
        const users = await prisma.user.findMany();
        res.status(200).json(users);
      } catch (error) {
        res.status(500).json({ error: "Error fetching users" });
      }
      break;

    default:
      res.setHeader("Allow", ["POST", "DELETE", "GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
