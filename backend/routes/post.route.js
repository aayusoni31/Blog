import express from "express";
const router = express.Router();

import {
  getPosts,
  getPost,
  createPost,
} from "../controllers/post.controller.js";
router.get("/", getPosts);
router.get("/:slug", getPost);
router.get("/", createPost);

export default router;
