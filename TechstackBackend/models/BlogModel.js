const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    summary: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true }, // User's name or ID
    date: { type: Date, default: Date.now },
    // image: { type: String }, // Optional image URL
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blog", BlogSchema);
