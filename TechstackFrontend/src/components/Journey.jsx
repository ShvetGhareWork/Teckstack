import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"; // Import AOS styles
const Journey = () => {
  useEffect(() => {
    Aos.init({ duration: 700 }); // Initialize AOS with a duration of 700ms
  }, []);
  return (
    <div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">
          Our Journey
        </h2>
        <p className="text-gray-600 text-center mb-12">
          The key milestones that have shaped our company's growth and success.
        </p>
        <div className="relative border-l border-gray-300">
          {[
            {
              year: "2013",
              title: "Company Founded",
              description:
                "Our company was founded with a vision to create innovative digital solutions for businesses of all sizes.",
            },
            {
              year: "2015",
              title: "First Major Client",
              description:
                "Secured our first enterprise client and expanded our team to 15 members to meet growing demand.",
            },
            {
              year: "2017",
              title: "Office Expansion",
              description:
                "Opened our second office to accommodate our growing team and client base.",
            },
            {
              year: "2020",
              title: "Global Recognition",
              description:
                "Recognized as a leader in the industry, serving clients across multiple continents.",
            },
            {
              year: "2023",
              title: "Innovation Award",
              description:
                "Received an award for innovation in technology and outstanding client service.",
            },
          ].map((milestone, index) => (
            <div
              key={index}
              data-aos="fade-left"
              data-aos-delay={index * 100}
              className="mb-10 ml-6 flex flex-col items-start"
            >
              <div className="absolute -left-3 w-6 h-6 bg-black rounded-full"></div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-900">
                  {milestone.year}
                </h3>
                <h4 className="text-md font-semibold text-gray-800 mt-2">
                  {milestone.title}
                </h4>
                <p className="text-gray-600 mt-2">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Journey;
