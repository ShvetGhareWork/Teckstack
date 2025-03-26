import React from "react";
import Navbar from "../components/Navbar";
import { NavLink } from "react-router-dom";
import {
  Globe,
  Smartphone,
  Layers,
  Database,
  Code,
  CheckCircle,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Hero from "../components/Hero";
import Aos from "aos";
import Services from "../components/Services";
import Tech from "../components/Tech";
import Text from "../components/Text";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import Stats from "../components/Stats";
import FAQs from "../components/FAQs";

export default function Home() {
  Aos.init({ duration: 700 });

  const images = [
    "/image1.png",
    "/image2.jpg",
    "/image3.jpg",
    "/image4.jpg",
    "/image3.jpg",
    "/image4.jpg",
  ];

  return (
    <>
      <Navbar />
      <div className="flex min-h-screen items-center justify-center flex-col">
        {/* Header */}

        <main className="flex-1">
          {/* Hero Section */}
          <Hero />

          {/* Trusted By Section */}
          <section className="w-full mt-10 py-12 md:py-24 lg:py-32 bg-muted">
            <div className="container px-4 md:px-6">
              {/* Heading Section */}
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-6">
                  <h2
                    data-aos="fade-up"
                    className="text-3xl font-bold tracking-tighter md:text-4xl"
                  >
                    Trusted By Industry Leaders
                  </h2>
                  <p
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className="max-w-[1100px] text-muted-foreground md:text-3xl"
                  >
                    We've helped businesses of all sizes achieve their digital
                    transformation goals.
                  </p>
                </div>
              </div>

              {/* Responsive Image Grid */}
              <div
                data-aos="fade-up"
                className="mx-auto grid items-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6 md:gap-8 lg:gap-10 py-8"
              >
                {images.map((image, i) => (
                  <div
                    key={i}
                    data-aos="fade-up"
                    data-aos-delay={150 * i}
                    className="flex items-center justify-center transition-transform duration-300 ease-in-out transform hover:scale-110"
                  >
                    <img
                      src={image}
                      alt={`Client logo ${i + 1}`}
                      className="w-[90px] sm:w-[100px] md:w-[120px] lg:w-[140px] xl:w-[160px] h-auto object-contain opacity-80 transition-opacity hover:opacity-100"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Services Section */}
          <Services />
          {/* Technologies Section */}
          <Tech />
          {/* Process Section */}
          <section id="process" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter md:text-4xl xl:text-5xl">
                    {"Our Development Process".split("").map((char, index) => (
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
                    We follow a structured approach to ensure your project is
                    delivered on time and exceeds expectations.
                  </p>
                </div>
              </div>
              <Text />
            </div>
          </section>

          {/* Portfolio Section */}
          <Portfolio />

          {/* Testimonials Section */}
          <Testimonials />

          {/* Stats Section */}
          <Stats />
          {/* FAQ Section */}
          <FAQs />

          {/* CTA Section */}
          <section
            id="contact"
            className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground"
          >
            <div className="container px-4 bg md:px-6">
              <div className="grid gap-8 md:grid-cols-2">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                      Ready to Start Your Project?
                    </h2>
                    <p className="text-primary-foreground/80 md:text-xl">
                      Let's discuss how we can help you achieve your business
                      goals with a custom software solution.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Mail className="h-5 w-5" />
                      <span>contact@techcraft.com</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-5 w-5" />
                      <span>+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-5 w-5" />
                      <span>123 Tech Street, San Francisco, CA 94107</span>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg bg-background p-6 shadow-lg">
                  <form className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <label
                          htmlFor="name"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Name
                        </label>
                        <input
                          id="name"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="company"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Company
                      </label>
                      <input
                        id="company"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Acme Inc."
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="project"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Project Details
                      </label>
                      <textarea
                        id="project"
                        className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Tell us about your project..."
                      />
                    </div>
                    <button type="submit" className="w-full">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="w-full border-t bg-background py-6">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="space-y-4">
                <NavLink href="/" className="flex items-center space-x-2">
                  <Code className="h-6 w-6" />
                  <span className="font-bold">TechCraft</span>
                </NavLink>
                <p className="text-sm text-muted-foreground">
                  We craft exceptional web and mobile applications using
                  cutting-edge technologies.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-bold">Services</h3>
                <ul className="space-y-2">
                  <li>
                    <NavLink
                      href="#"
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      Web Development
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      href="#"
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      Mobile Development
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      href="#"
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      UI/UX Design
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      href="#"
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      Backend Development
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      href="#"
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      Custom Software
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-bold">Company</h3>
                <ul className="space-y-2">
                  <li>
                    <NavLink
                      href="#"
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      About Us
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      href="#"
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      Our Team
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      href="#"
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      Careers
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      href="#"
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      Blog
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      href="#"
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-bold">Legal</h3>
                <ul className="space-y-2">
                  <li>
                    <NavLink
                      href="#"
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      Privacy Policy
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      href="#"
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      Terms of Service
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      href="#"
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      Cookie Policy
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 border-t pt-6">
              <p className="text-center text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} TechCraft. All rights
                reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
