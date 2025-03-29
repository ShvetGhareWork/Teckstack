import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import FeaturedArticle from "../components/FeatureedArticle";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NewsletterAndTopics from "../components/NewsletterAndTopics";

const blogs = [
  {
    title: "The Future of E-commerce: Trends to Watch in 2025",
    description:
      "Discover the latest trends shaping the e-commerce industry and how businesses can adapt to stay ahead in 2025.",
    image: "/blog1.jpg",
    link: "/blogs/future-of-ecommerce",
  },
  {
    title: "How AI is Revolutionizing Customer Experience",
    description:
      "Learn how artificial intelligence is transforming the way businesses interact with customers and deliver personalized experiences.",
    image: "/blog2.jpg",
    link: "/blogs/ai-customer-experience",
  },
  {
    title: "Top 5 Web Development Frameworks in 2025",
    description:
      "Explore the most popular web development frameworks and their use cases to build modern, scalable applications.",
    image: "/blog3.jpg",
    link: "/blogs/top-web-frameworks",
  },
  {
    title: "The Importance of Cybersecurity in the Digital Age",
    description:
      "Understand why cybersecurity is critical for businesses and how to protect sensitive data from cyber threats.",
    image: "/blog4.jpg",
    link: "/blogs/cybersecurity-importance",
  },
];

const Blogs = () => {
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

      <div className="grid p-8   mt-5 mb-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
              <p className="text-gray-600 mb-4">{blog.description}</p>
              <a
                href={blog.link}
                className="inline-block bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>

      <NewsletterAndTopics />
      <Footer />
    </>
  );
};

export default Blogs;
