import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import FeaturedArticle from "../components/FeatureedArticle";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NewsletterAndTopics from "../components/NewsletterAndTopics";
import axios from "axios";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/blogs/list`
        );
        if (response.data.success) {
          setBlogs(response.data.blogs);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  useEffect(() => {
    // Initialize AOS
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <Navbar />
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 flex flex-col items-center justify-center text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-2xl font-bold tracking-tighter md:text-4xl xl:text-5xl flex justify-center">
            {"Our Blogs".split("").map((char, index) => (
              <span key={index} data-aos="fade-in" data-aos-delay={index * 50}>
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>
          <p
            data-aos="zoom-in"
            data-aos-delay={500}
            className="max-w-[1100px] mx-auto text-center text-gray-500 md:text-xl mt-4"
          >
            Stay updated with the latest insights, trends, and tips from our
            experts.
          </p>
        </div>
      </section>

      <FeaturedArticle />

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Our Blogs</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog._id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={blog.image || "https://via.placeholder.com/300"}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold">{blog.title}</h2>
                <p className="text-gray-600">{blog.summary}</p>
                <a
                  href={`/blogs/${blog._id}`}
                  className="text-blue-600 hover:underline mt-2 block"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <NewsletterAndTopics />
      <Footer />
    </>
  );
};

export default Blogs;
