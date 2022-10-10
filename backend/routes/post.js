const express = require("express");
const { isAuthenticated } = require("../middlewares/auth");
const {
  createPost,
  likeAndUnlikePost,
  deletePost,
  getPostFollowing,
  updateCaption,
  commentOnPost,
  deleteComment,
} = require("../controllers/post");

const router = express.Router();

router.route("/post/upload").post(isAuthenticated, createPost);

router.route("/posts").get(isAuthenticated, getPostFollowing);

router
  .route("/post/:id")
  .get(isAuthenticated, likeAndUnlikePost)
  .put(isAuthenticated, updateCaption)
  .delete(isAuthenticated, deletePost);

router
  .route("/post/comment/:id")
  .put(isAuthenticated, commentOnPost)
  .delete(isAuthenticated, deleteComment);

module.exports = router;
