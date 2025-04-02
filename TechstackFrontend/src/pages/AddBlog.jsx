import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [summary, setSummary] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user")); // Retrieve user from localStorage

    console.log("User from localStorage:", user); // Debugging

    if (!user) {
      alert("You must be logged in to create a blog.");
      navigate("/login"); // Redirect to login page
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/blogs/create`,
        {
          title,
          content,
          summary,
          image,
          author: user.name, // Pass the author's name or ID
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (response.data.success) {
        alert("Blog created successfully!");
        navigate("/blogs");
      } else {
        alert("Failed to create blog.");
      }
    } catch (error) {
      console.error("Error creating blog:", error);
      alert("An error occurred while creating the blog.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto max-w-3xl py-10 px-4">
        <h1 className="text-2xl font-bold mb-6">Add Blog</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Summary
            </label>
            <input
              type="text"
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Content
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm"
              rows="6"
              required
            ></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Image URL
            </label>
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800"
          >
            Publish Blog
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default AddBlog;
