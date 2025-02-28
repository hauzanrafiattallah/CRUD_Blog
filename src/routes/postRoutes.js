const express = require("express");
const {
  getPosts,
  createPost,
  updatePost,
} = require("../controllers/postController");

const postRoutes = express.Router();

postRoutes.get("/posts", getPosts);
postRoutes.post("/posts", createPost);
postRoutes.put("/posts/:id", updatePost);

module.exports = postRoutes;
