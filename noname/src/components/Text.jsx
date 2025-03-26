import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Text = () => {
  useEffect(() => {
    Aos.init({ duration: 700 });
  }, []);

  const steps = [
    {
      title: "Discovery & Planning",
      description:
        "We start by understanding your business goals, target audience, and project requirements.",
    },
    {
      title: "Design & Prototyping",
      description:
        "Our designers create wireframes and interactive prototypes to visualize the user experience.",
    },
    {
      title: "Development",
      description:
        "Our developers bring the designs to life using the most appropriate technologies for your project.",
    },
    {
      title: "Testing & Quality Assurance",
      description:
        "We rigorously test your application to ensure it's bug-free and performs optimally.",
    },
    {
      title: "Deployment",
      description:
        "We deploy your application to your preferred hosting environment and ensure everything runs smoothly.",
    },
    {
      title: "Maintenance & Support",
      description:
        "We provide ongoing maintenance and support to keep your application running smoothly.",
    },
  ];

  return (
    <div className="mx-auto max-w-5xl py-8">
      <div className="grid gap-8 md:grid-cols-2">
        {steps.map((step, i) => (
          <div
            key={i}
            className="flex flex-col space-y-2"
            data-aos="fade-right"
            data-aos-delay={i * 200} // Sequential delay
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
              {i + 1}
            </div>
            <h3 className="text-xl font-bold">{step.title}</h3>
            <p className="text-muted-foreground">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Text;
