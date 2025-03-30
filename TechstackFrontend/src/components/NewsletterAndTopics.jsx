import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const topics = [
  {
    title: "Web Development",
    description: "Frontend, backend, frameworks, and best practices",
  },
  {
    title: "UI/UX Design",
    description: "User experience, interface design, and usability",
  },
  {
    title: "Mobile Development",
    description: "iOS, Android, and cross-platform solutions",
  },
  {
    title: "Cloud Computing",
    description: "AWS, Azure, Google Cloud, and serverless",
  },
  {
    title: "Artificial Intelligence",
    description: "Machine learning, neural networks, and AI applications",
  },
  {
    title: "DevOps",
    description: "CI/CD, containerization, and infrastructure",
  },
  {
    title: "Cybersecurity",
    description: "Security best practices, threats, and solutions",
  },
  {
    title: "Business Strategy",
    description: "Digital transformation, growth, and innovation",
  },
];

const NewsletterAndTopics = () => {
  useEffect(() => {
    Aos.init({ duration: 700 });
  }, []);

  return (
    <section className="bg-gray-50 py-12">
      {/* Newsletter Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-gray-600 mb-6">
          Stay updated with our latest articles, industry insights, and company
          news.
        </p>
        <div className="flex justify-center items-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition">
            Subscribe
          </button>
        </div>
        <p className="text-gray-500 text-sm mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>

      {/* Explore Topics Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <h2 className="text-3xl font-bold text-center mb-6">Explore Topics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {topics.map((topic, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-lg font-bold mb-2">{topic.title}</h3>
              <p className="text-gray-600">{topic.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsletterAndTopics;
