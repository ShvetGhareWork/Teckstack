import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CountUp from "../Bits/CountUp";
import Journey from "../components/Journey";
import OurValues from "../components/OurValues";
import OurPartners from "../components/OurPartners";
import Aos from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const Aboutus = () => {
  useEffect(() => {
    Aos.init({ duration: 700 }); // Initialize AOS with a duration of 700ms
  }, []);
  return (
    <>
      <Navbar />
      <section className="bg-gray-50 py-12">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 flex flex-col items-center justify-center text-center">
          <div className="container mx-auto px-4 md:px-6">
            <h1 className="text-2xl font-bold tracking-tighter md:text-4xl xl:text-5xl flex justify-center">
              {"About Us".split("").map((char, index) => (
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
              We are a team of passionate professionals dedicated to delivering
              innovative solutions that drive success. Our mission is to empower
              businesses with cutting-edge technology and exceptional service.
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Story
              </h2>
              <p className="text-gray-600 mb-4">
                Founded in 2013, our company began with a simple mission: to
                help businesses leverage technology to achieve their goals. What
                started as a small team of passionate developers has grown into
                a full-service digital agency with expertise across web
                development, mobile applications, design, and digital marketing.
              </p>
              <p className="text-gray-600 mb-4">
                Over the years, we've had the privilege of working with clients
                ranging from startups to Fortune 500 companies, delivering
                solutions that drive growth and innovation. Our commitment to
                quality, collaboration, and continuous improvement has been the
                foundation of our success.
              </p>
              <p className="text-gray-600">
                Today, we continue to push the boundaries of what's possible in
                the digital space, staying at the forefront of emerging
                technologies and trends to provide our clients with cutting-edge
                solutions that deliver real results.
              </p>
            </div>
            <div className="bg-gray-200 h-[300px] rounded-lg flex items-center justify-center">
              <img
                src="/story-placeholder.jpg"
                alt="Our Story"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-4xl font-bold text-gray-900">
                <CountUp from={0} to={10} duration={0.5} />
                <span>+</span>
              </h3>
              <p className="text-gray-600">Years in Business</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-4xl font-bold text-gray-900">
                <CountUp from={0} to={500} duration={0.5} />
                <span>+</span>
              </h3>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-4xl font-bold text-gray-900">
                <CountUp from={0} to={50} duration={0.5} />
                <span>+</span>
              </h3>
              <p className="text-gray-600">Team Members</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-4xl font-bold text-gray-900">
                <CountUp from={0} to={98} duration={0.5} />
                <span>%</span>
              </h3>
              <p className="text-gray-600">Client Satisfaction</p>
            </div>
          </div>
        </div>

        {/* Our Leadership Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">
            Our Leadership
          </h2>
          <p className="text-gray-600 text-center mb-12">
            Meet the talented individuals who guide our company's vision and
            strategy.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "John Doe",
                role: "CEO & Founder",
                description:
                  "John has over 15 years of experience in the tech industry. He founded the company with a vision to create innovative solutions that help businesses grow.",
                image: "/john-placeholder.jpg",
              },
              {
                name: "Jane Smith",
                role: "CTO",
                description:
                  "Jane leads our technical team with her extensive knowledge of software architecture and emerging technologies. She ensures our solutions are cutting-edge and scalable.",
                image: "/jane-placeholder.jpg",
              },
              {
                name: "Michael Johnson",
                role: "COO",
                description:
                  "Michael oversees our day-to-day operations, ensuring that projects are delivered on time and to the highest standards. He has a background in project management and business operations.",
                image: "/michael-placeholder.jpg",
              },
              {
                name: "Sarah Williams",
                role: "Creative Director",
                description:
                  "Sarah brings her creative vision to all our projects. With a background in design and user experience, she ensures our solutions are not only functional but also beautiful and intuitive.",
                image: "/sarah-placeholder.jpg",
              },
            ].map((leader, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                className="bg-white rounded-lg shadow-lg flex flex-col items-start"
              >
                <div className="bg-gray-200 h-[200px] w-full rounded-lg mb-4">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className=" object-cover h-full w-full"
                  />
                </div>
                <div className="p-4 flex flex-col items-start">
                  <h3 className="text-lg font-bold text-left">{leader.name}</h3>
                  <p className="text-gray-600 text-left">{leader.role}</p>
                  <p className="text-gray-500 text-sm mt-2 text-left">
                    {leader.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Journey />
      <OurValues />
      <OurPartners />
      <Footer />
    </>
  );
};

export default Aboutus;
