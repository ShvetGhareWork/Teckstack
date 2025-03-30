import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Tech = () => {
  useEffect(() => {
    Aos.init({ duration: 700 });
  }, []);

  const techStack = [
    { name: "React", src: "/react.svg" },
    { name: "Next.js", src: "/nextjs.svg" },
    { name: "Django", src: "/django.svg" },
    { name: "React Native", src: "/react.svg" },
    { name: "Flutter", src: "/flutter.svg" },
    { name: "Node.js", src: "/nodejs.svg" },
    { name: "TypeScript", src: "/typescript.svg" },
    { name: "Python", src: "/python.svg" },
  ];

  return (
    <div>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          {/* Title Section */}
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter md:text-4xl xl:text-5xl">
                {"Our Tech Stack".split("").map((char, index) => (
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
                We use the latest technologies to build fast, scalable, and
                maintainable applications.
              </p>
            </div>
          </div>

          {/* Tech Stack Grid */}
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 md:grid-cols-4 lg:gap-12 py-8">
            {techStack.map((tech, i) => (
              <div
                key={i}
                className="flex flex-col items-center space-y-2"
                data-aos="fade-up"
                data-aos-delay={i * 150}
              >
                {/* Icon Container */}
                <div
                  className="flex h-20 w-20 items-center justify-center rounded-full bg-background shadow-sm"
                  data-aos="zoom-in"
                  data-aos-delay={i * 150}
                >
                  <img src={tech.src} alt={tech.name} className="h-10 w-10" />
                </div>

                {/* Tech Name with Animation */}
                <h3 className="text-lg font-bold">
                  {tech.name.split("").map((char, index) => (
                    <span
                      key={index}
                      data-aos="fade-up"
                      data-aos-delay={i * 150 + index * 50}
                    >
                      {char === " " ? "\u00A0" : char}
                    </span>
                  ))}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tech;
