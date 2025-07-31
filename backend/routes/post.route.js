//Defines post-related API endpoints (/posts/, /posts/:slug, etc.) and connects them to controller functions.
import express from "express";
const router = express.Router();

import {
  getPosts,
  getPost,
  createPost,
  deletePost,
} from "../controllers/post.controller.js";
router.get("/", getPosts);
router.get("/:slug", getPost);
router.post("/", createPost);
router.delete("/:id", deletePost);

export default router;
