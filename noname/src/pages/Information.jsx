import React from "react";
import ServicesPage from "../components/ServicesPage";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ClientTestimonials from "../components/ClientTestimonials";
import FeaturedCaseStudy from "../components/FeaturedCaseStudy";

const Information = () => {
  return (
    <div>
      <Navbar />
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 flex flex-col items-center justify-center text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-2xl font-bold tracking-tighter md:text-4xl xl:text-5xl flex justify-center">
            {"How we work".split("").map((char, index) => (
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
            We blend creativity with efficiency, turning ideas into reality
            through collaboration, innovation, and precision.
          </p>
        </div>
      </section>
      <ServicesPage />
      <ClientTestimonials />

      <Footer />
    </div>
  );
};

export default Information;
