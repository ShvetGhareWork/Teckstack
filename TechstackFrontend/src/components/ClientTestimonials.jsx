import React from "react";

const testimonials = [
  {
    name: "Robert Smith",
    title: "CEO, TechInnovate",
    feedback:
      "The team's attention to detail and commitment to quality is unmatched. They delivered our project ahead of schedule and exceeded our expectations in every way.",
  },
  {
    name: "Jennifer Lee",
    title: "Marketing Director, GrowthBrand",
    feedback:
      "Working with this team has transformed our online presence. Their strategic approach and technical expertise have helped us achieve a 200% increase in leads.",
  },
  {
    name: "David Wilson",
    title: "CTO, FinTech Solutions",
    feedback:
      "The development team's technical knowledge is impressive. They not only built a robust platform but also provided valuable insights that improved our original concept.",
  },
  {
    name: "Michelle Rodriguez",
    title: "Product Manager, E-commerce Plus",
    feedback:
      "From the initial consultation to the final delivery, the team was professional, responsive, and dedicated to our success. I highly recommend their services.",
  },
];

const ClientTestimonials = () => {
  return (
    <section className="py-12 bg-white">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 flex flex-col items-center justify-center text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-2xl font-bold tracking-tighter md:text-4xl xl:text-5xl flex justify-center">
            {"Client Testimonials".split("").map((char, index) => (
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
            Here's what our clients have to say about our services and working
            process.
          </p>
        </div>
      </section>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="border mt-12 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                <div>
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.feedback}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;
