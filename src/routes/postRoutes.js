const express = require("express");
const { getPosts, createPost } = require("../controllers/postController");

const postRoutes = express.Router();

postRoutes.get("/posts", getPosts);
postRoutes.post("/posts", createPost);

module.exports = postRoutes;
