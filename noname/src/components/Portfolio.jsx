import React from "react";
import { NavLink } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Button from "./Button";
import ButtonNormal from "./ButtonNormal";
const Portfolio = () => {
  return (
    <div>
      <section
        id="portfolio"
        className="w-full py-12 md:py-24 lg:py-32 bg-muted"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter md:text-4xl xl:text-5xl">
                {"Our PortFolio".split("").map((char, index) => (
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
                Take a look at some of our recent projects and see how we've
                helped our clients achieve their goals.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 py-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 200}
                className="group relative overflow-hidden rounded-lg shadow-lg"
              >
                <img
                  src={`/placeholder.svg?height=300&width=400&text=Project+${
                    i + 1
                  }`}
                  width={400}
                  height={300}
                  alt={`Project ${i + 1}`}
                  className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <h3 className="text-xl font-bold text-white">
                    Project {i + 1}
                  </h3>
                  <p className="text-sm text-white/80">
                    {
                      [
                        "Web App",
                        "Mobile App",
                        "E-commerce",
                        "Dashboard",
                        "CMS",
                        "Enterprise Solution",
                      ][i % 6]
                    }
                  </p>
                  <button variant="secondary" size="sm" className="mt-4">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <div>
              <ButtonNormal Text="Start Your Project" href="/" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
