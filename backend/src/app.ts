import express from "express";
import cors from "cors";
import { prisma } from "./lib/prisma.js";
import "dotenv/config";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost",
    credentials: true,
  }),
);

export const port = process.env.PORT || 3000;

app.post("/api/create-post", async (req, res) => {
  const json = req.body;

  if (json.author && json.description) {
    await prisma.post
      .create({
        data: {
          author: json.author,
          description: json.description,
        },
      })
      .then((post) => {
        return res.status(200).json({ post });
      })
      .catch(() => {
        return res.status(500);
      });
  } else res.sendStatus(400);
});

app.get("/api/get-posts", async (req, res) => {
  const allPosts = await prisma.post.findMany().catch(() => {
    return res.status(500);
  });
  res.send(allPosts);
});

export default app;
