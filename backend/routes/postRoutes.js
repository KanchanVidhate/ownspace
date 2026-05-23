const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  createPost,
  getUserPosts,
  getAllPosts,
} = require("../controllers/postController");

// CREATE POST
router.post("/create", protect, createPost);

// USER POSTS
router.get("/my-posts", protect, getUserPosts);

// ALL POSTS
router.get("/", getAllPosts);

module.exports = router;