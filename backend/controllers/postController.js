const Post = require("../models/Post");

// CREATE POST
exports.createPost = async (req, res) => {
  try {
    const { title, content } = req.body;

    const post = await Post.create({
      userId: req.user.id,
      title,
      content,
    });

    res.json(post);

  } catch (err) {
    res.status(500).json(err.message);
  }
};

// GET USER POSTS
exports.getUserPosts = async (req, res) => {
  try {

    const posts = await Post.find({
      userId: req.user.id,
    }).sort({
      createdAt: -1,
    });

    res.json(posts);

  } catch (err) {

    res.status(500).json(err.message);

  }
};

// GET ALL POSTS (PUBLIC FEED)
exports.getAllPosts = async (req, res) => {

  try {

    const posts = await Post.find()
      .populate("userId", "username")
      .sort({ createdAt: -1 });

    res.json(posts);

  } catch (err) {

res.status(500).json({
  message: err.message,
});
  }
};