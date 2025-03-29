import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const FeaturedCaseStudy = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1
          className="text-2xl font-bold tracking-tighter md:text-4xl xl:text-5xl flex justify-center"
          data-aos="fade-up"
        >
          {"Featured Case Study".split("").map((char, index) => (
            <span key={index} data-aos="fade-in" data-aos-delay={index * 50}>
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>
        <p
          data-aos="zoom-in"
          data-aos-delay={500}
          className="max-w-[1100px] mx-auto text-center text-gray-500 md:text-xl mt-4 mb-6"
        >
          A deeper look at one of our most successful projects.
        </p>
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          {/* Image Placeholder */}
          <div
            className="bg-gray-200 h-[400px] rounded-lg flex items-center justify-center"
            data-aos="fade-right"
            data-aos-delay="700"
          >
            <div className="text-gray-400 text-2xl">
              <img
                src="/image3.jpg"
                alt="Case Study"
                className="fas rounded-lg shadow-lg fa-image"
              />
            </div>
          </div>

          {/* Case Study Content */}
          <div data-aos="fade-left" data-aos-delay="800">
            <h3 className="text-2xl font-bold mb-4">
              E-commerce Platform Transformation
            </h3>
            <p className="text-gray-700 mb-4">
              Our client, a growing retail business, needed to transition from a
              traditional brick-and-mortar model to an omnichannel approach with
              a robust online presence.
            </p>
            <h4 className="text-lg font-semibold mb-2">The Challenge</h4>
            <p className="text-gray-700 mb-4">
              The client needed a scalable e-commerce solution that could handle
              their growing product catalog, integrate with their existing
              inventory system, and provide a seamless customer experience
              across devices.
            </p>
            <h4 className="text-lg font-semibold mb-2">Our Approach</h4>
            <p className="text-gray-700 mb-4">
              We developed a custom e-commerce platform using React for the
              frontend and Node.js for the backend. We implemented a
              microservices architecture to ensure scalability and integrated
              with their existing ERP system for inventory management.
            </p>
            <h4 className="text-lg font-semibold mb-2">Results</h4>
            <ul className="list-disc pl-5 text-gray-700 mb-6">
              <li data-aos="fade-right" data-aos-delay="900">
                300% increase in online sales within the first 6 months
              </li>
              <li data-aos="fade-right" data-aos-delay="1000">
                50% reduction in cart abandonment rate
              </li>
              <li data-aos="fade-right" data-aos-delay="1100">
                Seamless inventory management across online and physical stores
              </li>
              <li data-aos="fade-right" data-aos-delay="1200">
                Mobile conversion rate improved by 75%
              </li>
            </ul>
            <button
              className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
              data-aos="zoom-in"
              data-aos-delay="1300"
            >
              Read Full Case Study
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCaseStudy;
