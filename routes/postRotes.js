const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

// Get all posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find().sort({ date: -1 });
    res.send(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

// Store post
router.post("/", async (req, res) => {
  const storePost = new Post({
    title: req.body.title,
    category: req.body.category,
    description: req.body.description,
  });

  await storePost
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ error: err });
    });
});

// Get a single post
router.get("/:id", async (req, res) => {
  try {
    const posts = await Post.findById(req.params.id);
    res.send(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

// Delete a single post
router.delete("/:id", async (req, res) => {
  try {
    const posts = await Post.remove({ _id: req.params.id });
    res.send("Post deleted successfully!");
  } catch (err) {
    res.json({ message: err });
  }
});

// Update a single post
router.patch("/:id", async (req, res) => {
  try {
    const updatePost = await Post.updateOne(
      { _id: req.params.id },
      {
        $set: {
          title: req.body.title,
          category: req.body.category,
          description: req.body.description,
        },
      }
    );
    res.send(updatePost);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
