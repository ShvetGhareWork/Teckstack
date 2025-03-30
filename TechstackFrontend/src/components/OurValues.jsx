import { ShieldCheck } from "lucide-react";
import React from "react";

const OurValues = () => {
  const values = [
    {
      title: "Innovation",
      description:
        "We constantly push the boundaries of what's possible, embracing new technologies and approaches to solve complex problems.",
    },
    {
      title: "Excellence",
      description:
        "We are committed to delivering the highest quality in everything we do, from code to customer service.",
    },
    {
      title: "Collaboration",
      description:
        "We believe in the power of teamwork, both within our company and with our clients, to achieve exceptional results.",
    },
    {
      title: "Integrity",
      description:
        "We operate with honesty, transparency, and ethical practices in all our business dealings.",
    },
    {
      title: "Client Focus",
      description:
        "We put our clients' needs at the center of everything we do, building long-term relationships based on trust and mutual success.",
    },
    {
      title: "Continuous Learning",
      description:
        "We foster a culture of continuous learning and professional development to stay at the forefront of our industry.",
    },
  ];

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">
          Our Values
        </h2>
        <p className="text-gray-600 text-center mb-12">
          The principles that guide everything we do.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-start"
            >
              <div className="flex items-center mb-4 ">
                <ShieldCheck />{" "}
                <h3 className="text-xl pl-2 font-bold text-gray-900">
                  {value.title}
                </h3>
              </div>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValues;
