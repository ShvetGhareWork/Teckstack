import React, { useEffect, useState } from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      quote:
        "Working with TechCraft was a game-changer for our business. They delivered a stunning web application that exceeded our expectations.",
    },
    {
      name: "Michael Chen",
      role: "CTO, GrowthLabs",
      quote:
        "The team at TechCraft is incredibly talented and professional. They built our mobile app on time and within budget.",
    },
    {
      name: "Emily Rodriguez",
      role: "Founder, EcoSolutions",
      quote:
        "TechCraft understood our vision from day one and translated it into a beautiful, functional website that our customers love.",
    },
    {
      name: "David Kim",
      role: "Product Manager, InnovateCorp",
      quote:
        "The attention to detail and technical expertise of the TechCraft team is unmatched. They're our go-to development partner.",
    },
    {
      name: "Lisa Patel",
      role: "Marketing Director, BrandBoost",
      quote:
        "Our e-commerce platform built by TechCraft has significantly increased our conversion rates and customer satisfaction.",
    },
    {
      name: "James Wilson",
      role: "Founder, HealthTech",
      quote:
        "TechCraft delivered a complex healthcare application that met all regulatory requirements while providing an intuitive user experience.",
    },
  ];

  const [typedQuotes, setTypedQuotes] = useState(
    Array(testimonials.length).fill("")
  );

  useEffect(() => {
    testimonials.forEach((testimonial, i) => {
      let index = 0;
      const typingInterval = setInterval(() => {
        if (index <= testimonial.quote.length) {
          setTypedQuotes((prevQuotes) => {
            const newQuotes = [...prevQuotes];
            newQuotes[i] = testimonial.quote.slice(0, index);
            return newQuotes;
          });
          index++;
        } else {
          clearInterval(typingInterval);
        }
      }, 25); // Adjust typing speed
      return () => clearInterval(typingInterval);
    });
  }, []);

  return (
    <div>
      <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter md:text-4xl xl:text-5xl">
                {"What our clients say".split("").map((char, index) => (
                  <span
                    key={index}
                    data-aos="fade-up"
                    data-aos-delay={index * 50}
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </h1>
              <p
                data-aos="zoom-in"
                data-aos-delay={500}
                className="max-w-[900px] text-muted-foreground md:text-xl"
              >
                Don't just take our word for it. Here's what our clients have to
                say about working with us.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 py-8">
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 200}
                className="flex flex-col space-y-4 rounded-lg border p-6 shadow-sm"
              >
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 rounded-full bg-muted" />
                  <div>
                    <h3 className="text-lg font-bold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                {/* Typing Animation */}
                <p className="text-muted-foreground">
                  "{typedQuotes[i]}"
                  {typedQuotes[i].length < testimonial.quote.length && (
                    <span className="animate-blink">|</span>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <style>
        {`
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
          .animate-blink {
            animation: blink 1s step-start infinite;
          }
        `}
      </style>
    </div>
  );
};

export default Testimonials;
