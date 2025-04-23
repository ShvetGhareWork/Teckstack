const BlogModel = require("../models/BlogModel");

// Create Blog
const createBlog = async (req, res) => {
  try {
    const { title, summary, content, author } = req.body;

    if (!title || !summary || !content || !author) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required." });
    }

    const newBlog = new BlogModel({ title, summary, content, author });
    const savedBlog = await newBlog.save();

    res.status(201).json({ success: true, blog: savedBlog });
  } catch (error) {
    console.error("Error creating blog:", error);
    res.status(500).json({ success: false, message: "Internal server error." });
  }
};

// Get Blogs
const getBlogs = async (req, res) => {
  try {
    const blogs = await BlogModel.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, blogs });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    res.status(500).json({ success: false, message: "Internal server error." });
  }
};

// Delete Blog
const deleteBlog = async (req, res) => {
  try {
    const { blogId } = req.params;

    // Find and delete the blog by its ID
    const deletedBlog = await BlogModel.findByIdAndDelete(blogId);

    if (!deletedBlog) {
      return res
        .status(404)
        .json({ success: false, message: "Blog not found." });
    }

    res
      .status(200)
      .json({ success: true, message: "Blog deleted successfully." });
  } catch (error) {
    console.error("Error deleting blog:", error);
    res.status(500).json({ success: false, message: "Internal server error." });
  }
};

module.exports = { createBlog, getBlogs, deleteBlog };
