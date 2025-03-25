import React from "react";
import ButtonNormal from "./ButtonNormal";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 100, once: true });
  }, []);
  return (
    <div>
      <section className="w-full mt-2 py-12 flex items-center justify-center md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 items-center lg:grid-cols-2 lg:gap-16">
            {/* Text Section */}
            <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl">
                  {"Transforming Ideas into".split("").map((char, index) => (
                    <span
                      key={index}
                      data-aos="fade-up"
                      data-aos-delay={index * 50} // Faster animation
                    >
                      {char === " " ? "\u00A0" : char}
                    </span>
                  ))}
                </h1>
                <h1 className="text-3xl font-bold tracking-tighter pb-4 sm:text-4xl md:text-5xl xl:text-6xl">
                  {"Digital Reality".split("").map((char, index) => (
                    <span
                      key={index}
                      data-aos="fade-up"
                      data-aos-delay={1100 + index * 50} // Faster animation
                    >
                      {char === " " ? "\u00A0" : char}
                    </span>
                  ))}
                </h1>

                <p
                  className="max-w-[600px] mx-auto lg:mx-0 pb-4 text-muted-foreground md:text-lg"
                  data-aos="fade-in"
                  data-aos-delay={1500}
                >
                  We craft exceptional web and mobile applications using
                  cutting-edge technologies like React, Django, React Native,
                  and Flutter.
                </p>
              </div>
              {/* Buttons */}
              <div
                className="flex flex-col gap-4 min-[400px]:flex-row justify-center lg:justify-start"
                data-aos="fade-up"
                data-aos-delay={2000}
              >
                <ButtonNormal Text="Start Your Project" />
                <ButtonNormal Text="View Our Work" />
              </div>
            </div>
            {/* Image Section */}
            <div className="flex justify-center lg:order-last">
              <img
                src="/Hero.png?height=650&width=650"
                alt="Hero img"
                className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] xl:max-w-[750px] aspect-video rounded-xl object-cover"
                data-aos="fade-left"
                data-aos-delay={2500}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
