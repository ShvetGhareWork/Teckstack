import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/blogs/${id}`
        );
        if (response.data.success) {
          setBlog(response.data.blog);
        }
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    };

    fetchBlog();
  }, [id]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
        <p className="text-gray-600 mb-4">By {blog.author.name}</p>
        <img
          src={blog.image || "https://via.placeholder.com/600"}
          alt={blog.title}
          className="w-full h-96 object-cover rounded-lg mb-6"
        />
        <p className="text-gray-700">{blog.content}</p>
      </div>
      <Footer />
    </>
  );
};

export default BlogDetails;
