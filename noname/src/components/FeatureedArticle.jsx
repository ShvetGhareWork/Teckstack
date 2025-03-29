import React, { useState, useEffect } from "react";

const articles = [
  {
    title: "The Evolution of Web Development: Past, Present, and Future",
    description:
      "From static HTML pages to dynamic, interactive applications, web development has undergone a remarkable transformation over the past few decades. This article explores the key milestones in web development history and looks ahead to emerging trends that will shape the future of the web.",
    category: "Technology",
    readTime: "12 min read",
    date: "July 15, 2023",
    author: "Robert Johnson",
    image: "/placeholder.jpg",
    link: "/blogs/evolution-of-web-development",
  },
  {
    title: "The Rise of AI in Everyday Life",
    description:
      "Artificial intelligence is no longer a futuristic concept. Learn how AI is being integrated into our daily lives and transforming industries worldwide.",
    category: "Artificial Intelligence",
    readTime: "8 min read",
    date: "August 10, 2023",
    author: "Emily Davis",
    image: "/placeholder.jpg",
    link: "/blogs/rise-of-ai",
  },
  {
    title: "Top 10 Cybersecurity Practices for 2025",
    description:
      "As cyber threats evolve, businesses must stay ahead. Discover the top 10 cybersecurity practices to protect your data and systems in 2025.",
    category: "Cybersecurity",
    readTime: "10 min read",
    date: "June 5, 2023",
    author: "Michael Brown",
    image: "/placeholder.jpg",
    link: "/blogs/cybersecurity-practices",
  },
  {
    title: "The Future of Remote Work",
    description:
      "Remote work is here to stay. Explore how businesses are adapting to this new normal and what the future holds for remote teams.",
    category: "Workplace",
    readTime: "7 min read",
    date: "May 20, 2023",
    author: "Sarah Wilson",
    image: "/placeholder.jpg",
    link: "/blogs/future-of-remote-work",
  },
  {
    title: "How Blockchain is Revolutionizing Finance",
    description:
      "Blockchain technology is transforming the financial industry. Learn how decentralized systems are creating new opportunities and challenges.",
    category: "Finance",
    readTime: "9 min read",
    date: "April 15, 2023",
    author: "David Lee",
    image: "/placeholder.jpg",
    link: "/blogs/blockchain-in-finance",
  },
  {
    title: "The Importance of Mental Health in the Workplace",
    description:
      "Mental health is a critical aspect of employee well-being. Discover strategies to create a supportive and healthy work environment.",
    category: "Health",
    readTime: "6 min read",
    date: "March 10, 2023",
    author: "Anna Smith",
    image: "/placeholder.jpg",
    link: "/blogs/mental-health-workplace",
  },
  {
    title: "The Role of Big Data in Decision Making",
    description:
      "Big data is changing the way businesses make decisions. Learn how to leverage data analytics to drive growth and innovation.",
    category: "Data Science",
    readTime: "11 min read",
    date: "February 25, 2023",
    author: "Chris Martin",
    image: "/placeholder.jpg",
    link: "/blogs/big-data-decision-making",
  },
  {
    title: "The Impact of Social Media on Modern Marketing",
    description:
      "Social media has revolutionized marketing strategies. Explore how businesses are using social platforms to connect with their audiences.",
    category: "Marketing",
    readTime: "8 min read",
    date: "January 15, 2023",
    author: "Laura Johnson",
    image: "/placeholder.jpg",
    link: "/blogs/social-media-marketing",
  },
  {
    title: "The Benefits of Cloud Computing for Small Businesses",
    description:
      "Cloud computing is leveling the playing field for small businesses. Learn how to take advantage of cloud technology to grow your business.",
    category: "Cloud Computing",
    readTime: "10 min read",
    date: "December 5, 2022",
    author: "James Anderson",
    image: "/placeholder.jpg",
    link: "/blogs/cloud-computing-benefits",
  },
  {
    title: "The Evolution of Mobile Apps: What's Next?",
    description:
      "Mobile apps have come a long way. Discover the latest trends and innovations shaping the future of mobile applications.",
    category: "Mobile Development",
    readTime: "9 min read",
    date: "November 20, 2022",
    author: "Sophia Taylor",
    image: "/placeholder.jpg",
    link: "/blogs/evolution-of-mobile-apps",
  },
];

const FeaturedArticle = () => {
  const [featuredArticle, setFeaturedArticle] = useState(null);

  useEffect(() => {
    // Randomly select an article from the array
    const randomIndex = Math.floor(Math.random() * articles.length);
    setFeaturedArticle(articles[randomIndex]);
  }, []);

  if (!featuredArticle) return null;

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tighter md:text-4xl xl:text-5xl mb-6">
          Featured Article
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div className="bg-gray-200 h-[400px] rounded-lg flex items-center justify-center">
            <img
              src={featuredArticle.image}
              alt={featuredArticle.title}
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Article Content */}
          <div>
            <span className="bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full inline-block mb-3">
              {featuredArticle.category} • {featuredArticle.readTime}
            </span>
            <h3 className="text-2xl font-bold mb-4">{featuredArticle.title}</h3>
            <p className="text-gray-700 mb-4">{featuredArticle.description}</p>
            <p className="text-gray-500 text-sm mb-6">
              {featuredArticle.date} • By {featuredArticle.author}
            </p>
            <a
              href={featuredArticle.link}
              className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
            >
              Read Article
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticle;
