const prisma = require("../helpers/prisma");

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
    });
  }
};

module.exports = {
  getPosts,
};
