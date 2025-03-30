import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Aos from "aos";
import "aos/dist/aos.css";
import FeaturedCaseStudy from "../components/FeaturedCaseStudy";

export default function Teams() {
  useEffect(() => {
    Aos.init({ duration: 700 });
  }, []);

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description:
        "A full-featured e-commerce platform with payment integration and inventory management.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      team: "Development Team",
      duration: "3 months",
      link: "#",
    },
    {
      id: 2,
      title: "Healthcare Mobile App",
      description:
        "A mobile application for healthcare providers to manage patient appointments and records.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Flutter", "Firebase", "Google Cloud"],
      team: "Mobile Development Team",
      duration: "4 months",
      link: "#",
    },
    {
      id: 3,
      title: "Corporate Website Redesign",
      description:
        "Complete redesign of a corporate website with improved UX and performance.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Next.js", "Tailwind CSS", "Contentful"],
      team: "Design Team & Development Team",
      duration: "2 months",
      link: "#",
    },
    {
      id: 4,
      title: "AI-Powered Chatbot",
      description:
        "An AI-driven chatbot for customer support, handling FAQs and automating responses.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Python", "TensorFlow", "NLP", "Dialogflow"],
      team: "AI & Machine Learning Team",
      duration: "5 months",
      link: "#",
    },
    {
      id: 5,
      title: "Smart Home Automation",
      description:
        "A smart IoT-based home automation system to control lighting, security, and appliances.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Arduino", "Raspberry Pi", "MQTT", "AWS IoT"],
      team: "IoT Development Team",
      duration: "6 months",
      link: "#",
    },
    {
      id: 6,
      title: "Blockchain-Based Voting System",
      description:
        "A decentralized and secure blockchain-based voting platform for transparent elections.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Ethereum", "Solidity", "IPFS", "React"],
      team: "Blockchain Development Team",
      duration: "4 months",
      link: "#",
    },
    {
      id: 7,
      title: "EdTech Learning Platform",
      description:
        "An interactive EdTech platform with courses, quizzes, and live sessions for students.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React", "Node.js", "GraphQL", "PostgreSQL"],
      team: "EdTech Team",
      duration: "5 months",
      link: "#",
    },
    {
      id: 8,
      title: "Automated Resume Screener",
      description:
        "An AI tool that screens resumes and shortlists candidates based on job descriptions.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Python", "FastAPI", "Machine Learning", "OpenAI API"],
      team: "HR Tech Team",
      duration: "3 months",
      link: "#",
    },
    {
      id: 9,
      title: "Virtual Reality Tourism App",
      description:
        "A VR-based application allowing users to explore tourist destinations in an immersive 3D environment.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Unity", "C#", "VR Headsets", "WebGL"],
      team: "VR Development Team",
      duration: "6 months",
      link: "#",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 flex flex-col items-center justify-center text-center">
          <div className="container mx-auto px-4 md:px-6">
            <h1 className="text-2xl font-bold tracking-tighter md:text-4xl xl:text-5xl flex justify-center">
              {"Project Portfolio".split("").map((char, index) => (
                <span
                  key={index}
                  data-aos="fade-in"
                  data-aos-delay={index * 50}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </h1>
            <p
              data-aos="zoom-in"
              data-aos-delay={500}
              className="max-w-[1100px] mx-auto text-center text-gray-500 md:text-xl mt-4"
            >
              Browse through our diverse range of successful projects across
              various industries.
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="border rounded-lg overflow-hidden flex flex-col shadow-sm"
                  data-aos="fade-up"
                  data-aos-delay={project.id * 150}
                >
                  <div className="relative h-48">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                    <p className="text-gray-600 text-sm">
                      {project.description}
                    </p>
                  </div>
                  <div className="p-4 flex-1">
                    <p className="text-sm font-medium mb-1">Technologies:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs bg-gray-200 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm font-medium mt-2">
                      Team: {project.team}
                    </p>
                    <p className="text-sm">Duration: {project.duration}</p>
                  </div>
                  <div className="p-4">
                    <a href={project.link} className="block">
                      <button className="w-full py-2 text-white bg-black rounded">
                        View Project
                      </button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <FeaturedCaseStudy />
      <Footer />
    </>
  );
}
