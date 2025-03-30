// import img from "next/img";
import React, { useEffect } from "react";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TeamDetails from "../components/TeamDetails";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Teams() {
  // Sample team data
  useEffect(() => {
    Aos.init({ duration: 700 });
  }, []);
  return (
    <>
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 flex flex-col items-center justify-center text-center">
          <div className="container mx-auto px-4 md:px-6">
            <h1 className="text-3xl font-bold tracking-tighter md:text-4xl xl:text-5xl flex justify-center">
              {"Our Expert Teams".split("").map((char, index) => (
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
              className="max-w-[1100px] mx-auto text-center text-gray-500 text-muted-foreground md:text-xl mt-4"
            >
              Meet the talented professionals who make our company exceptional.
            </p>
          </div>
        </section>

        {/* Teams Section */}
        <TeamDetails />

        {/* Team Spotlight Section */}
        <section className="mt-16 bg-gray-50 py-12">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-xl font-bold tracking-tighter md:text-3xl xl:text-4xl flex justify-center">
              {"Team Spotlight".split("").map((char, index) => (
                <span
                  key={index}
                  data-aos="fade-in"
                  data-aos-delay={index * 50}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </h2>
            <p
              data-aos="zoom-in"
              data-aos-delay={500}
              className="max-w-[1100px] mx-auto text-center text-gray-500 text-muted-foreground md:text-xl mt-4"
            >
              Get to know some of our exceptional team members who make our
              company great.{" "}
            </p>
          </div>

          <div className="container bg-cover mx-auto px-4 md:px-6 grid gap-8 md:grid-cols-3 mt-10">
            {[
              {
                id: 1,
                name: "Alex Johnson",
                role: "Lead Developer",
                description:
                  "With over 10 years of experience in web development, Alex leads our development team with expertise in React, Node.js, and cloud architecture.",
                img: "/image3.jpg",
              },
              {
                id: 2,
                name: "Sophia Chen",
                role: "UX Design Lead",
                description:
                  "Sophia brings creativity and user-centered thinking to every project. Her background in psychology helps her create intuitive and engaging user experiences.",
                img: "/image3.jpg",
              },
              {
                id: 3,
                name: "Marcus Williams",
                role: "DevOps Engineer",
                description:
                  "Marcus ensures our infrastructure runs smoothly and securely. His expertise in CI/CD pipelines and cloud services keeps our deployments reliable and efficient.",
                img: "/image3.jpg",
              },
            ].map((member) => (
              <div
                key={member.name}
                className="flex flex-col items-center text-center"
                data-aos="zoom-in"
                data-aos-delay={member.id * 150}
              >
                <div className="h-40 w-40 rounded-full overflow-hidden border">
                  <img
                    src={member.img}
                    alt={member.name}
                    width={160}
                    height={160}
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.role}</p>
                <p className="mt-2 text-sm text-gray-600">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
