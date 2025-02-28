const express = require("express");
const { getPosts } = require("../controllers/postController");

const postRoutes = express.Router();

postRoutes.get("/posts", getPosts);

module.exports = postRoutes;
