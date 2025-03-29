import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const OurPartners = () => {
  const partners = Array(8).fill("/partner-placeholder.jpg"); // Replace with actual partner logos

  useEffect(() => {
    Aos.init({ duration: 700 }); // Initialize AOS with a duration of 1000ms
  }, []);
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">
          Our Partners
        </h2>
        <p className="text-gray-600 text-center mb-12">
          We collaborate with industry-leading companies to deliver exceptional
          solutions.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-gray-200 h-[150px] rounded-lg flex items-center justify-center"
            >
              <img
                src={partner}
                alt={`Partner ${index + 1}`}
                className="h-full w-full object-contain p-4"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
