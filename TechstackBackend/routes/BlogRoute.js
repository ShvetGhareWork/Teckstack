const express = require("express");
const Blog = require("../models/BlogModel");
const router = express.Router();
const { deleteBlog } = require("../controllers/BlogController");

// Create a new blog
router.post("/create", async (req, res) => {
  try {
    const { title, content, summary, image, author } = req.body;

    const newBlog = new Blog({ title, content, summary, image, author });
    const savedBlog = await newBlog.save();

    res.status(201).json({ success: true, blog: savedBlog });
  } catch (error) {
    console.error("Error creating blog:", error);
    res.status(500).json({ success: false, message: "Internal server error." });
  }
});

// Get all blogs
router.get("/list", async (req, res) => {
  try {
    const blogs = await Blog.find().populate("author", "name");
    res.status(200).json({ success: true, blogs });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    res.status(500).json({ success: false, message: "Internal server error." });
  }
});

// Get a single blog by ID
router.get("/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id).populate("author", "name");
    if (!blog) {
      return res
        .status(404)
        .json({ success: false, message: "Blog not found." });
    }
    res.status(200).json({ success: true, blog });
  } catch (error) {
    console.error("Error fetching blog:", error);
    res.status(500).json({ success: false, message: "Internal server error." });
  }
});

router.delete("/blog/:id", deleteBlog);

module.exports = router;
