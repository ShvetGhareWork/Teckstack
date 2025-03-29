import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  Globe,
  Smartphone,
  Layers,
  Database,
  Code,
  CheckCircle,
} from "lucide-react";

const Services = () => {
  useEffect(() => {
    Aos.init({ duration: 700 });
  }, []);

  const services = [
    {
      icon: <Globe className="h-12 w-12 hover:text-white" />,
      title: "Web Development",
      description:
        "Modern, responsive websites and web applications using React, Next.js, and Django.",
    },
    {
      icon: <Smartphone className="h-12 w-12 hover:text-white" />,
      title: "Mobile Development",
      description:
        "Cross-platform mobile applications using React Native and Flutter.",
    },
    {
      icon: <Layers className="h-12 w-12 hover:text-white" />,
      title: "UI/UX Design",
      description:
        "User-centered design that enhances user experience and drives engagement.",
    },
    {
      icon: <Database className="h-12 w-12 hover:text-white" />,
      title: "Backend Development",
      description:
        "Robust backend systems using Django, Node.js, and other modern frameworks.",
    },
    {
      icon: <Code className="h-12 w-12 hover:text-white" />,
      title: "Custom Software",
      description:
        "Tailored software solutions designed to meet your specific business needs.",
    },
    {
      icon: <CheckCircle className="h-12 w-12 hover:text-white" />,
      title: "Quality Assurance",
      description:
        "Comprehensive testing to ensure your application is bug-free and performs optimally.",
    },
  ];

  return (
    <div>
      {/* Services Section */}
      <section id="services" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter md:text-4xl xl:text-5xl">
                {"Our Services".split("").map((char, index) => (
                  <span
                    key={index}
                    data-aos="fade-up"
                    data-aos-delay={index * 50} // Faster animation
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </h1>
              <p
                data-aos="zoom-in"
                data-aos-delay={1000}
                className="max-w-[900px] text-muted-foreground md:text-xl"
              >
                We offer a comprehensive range of development services to bring
                your vision to life.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12 py-8">
              {services.map((service, i) => (
                <div
                  key={i}
                  data-aos="zoom-in"
                  data-aos-delay={150 * i}
                  className="flex flex-col items-center space-y-2 cursor-pointer rounded-lg border p-6 shadow-sm transition-all transform hover:scale-105 hover:shadow-md duration-300 ease-out hover:bg-black hover:text-white"
                >
                  {service.icon}
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="text-center text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
