const prisma = require("../helpers/prisma");
const { postSchema } = require("../helpers/schema");

const getPosts = async (req, res) => {
  try {
    const posts = await prisma.post.findMany();

    return res.json({
      success: true,
      message: "Get data posts successfully",
      data: posts,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Get data posts failed",
      data: null,
    });
  }
};

const createPost = async (req, res) => {
  try {
    const parse = postSchema.safeParse(req.body);

    if (!parse.success) {
      const errorMessages = parse.error.issues.map(
        (error) => `${error.path} - ${error.message}`
      );
      return res.status(400).json({
        success: false,
        message: errorMessages,
        data: null,
      });
    }

    const post = await prisma.post.create({
      data: {
        title: parse.data.title,
        author_name: parse.data.author_name,
        content: parse.data.content,
        published: parse.data.published,
      },
    });

    return res.json({
      success: true,
      message: "Create post successfully",
      data: post,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Create post failed",
      data: null,
    });
  }
};

const updatePost = async (req, res) => {
  try {
    const { id } = req.params;

    const parse = postSchema.safeParse(req.body);

    if (!parse.success) {
      const errorMessages = parse.error.issues.map(
        (error) => `${error.path} - ${error.message}`
      );
      return res.status(400).json({
        success: false,
        message: errorMessages,
        data: null,
      });
    }

    const post = await prisma.post.update({
      where: {
        id: parseInt(id),
      },
      data: {
        title: parse.data.title,
        author_name: parse.data.author_name,
        content: parse.data.content,
        published: parse.data.published,
      },
    });
    return res.json({
      success: true,
      message: "Update post successfully",
      data: post,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Update post failed",
      data: null,
    });
  }
};

const deletePost = async (req, res) => {
  try {
    const { id } = req.params;

    const post = await prisma.post.findFirst({
      where: {
        id: parseInt(id),
      },
    });

    await prisma.post.delete({
      where: {
        id: parseInt(id),
      },
    });

    return res.json({
      success: true,
      message: "Delete post successfully",
      data: post,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Delete post failed",
    });
  }
};

module.exports = {
  getPosts,
  createPost,
  updatePost,
  deletePost,
};
