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

export default function Home() {
  Aos.init({ duration: 700 });

  const images = ["/image1.png", "/image2.jpg", "/image3.jpg", "/image4.jpg"];

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
              <div
                data-aos="fade-up"
                className="mx-auto grid max-w-7xl grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10 lg:gap-12 py-8"
              >
                {images.map((image, i) => (
                  <div
                    key={i}
                    data-aos="fade-up"
                    data-aos-delay={250 * i}
                    className="flex items-center justify-center"
                  >
                    <img
                      src={image}
                      width={120}
                      height={160}
                      alt={`Client logo ${i + 1}`}
                      className="h-auto w-3/4 sm:w-2/4 md:w-1/3 lg:w-1/4 object-contain"
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
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                    Our Development Process
                  </h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl">
                    We follow a structured approach to ensure your project is
                    delivered on time and exceeds expectations.
                  </p>
                </div>
              </div>
              <div className="mx-auto max-w-5xl py-8">
                <div className="grid gap-8 md:grid-cols-2">
                  <div className="flex flex-col space-y-2">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      1
                    </div>
                    <h3 className="text-xl font-bold">Discovery & Planning</h3>
                    <p className="text-muted-foreground">
                      We start by understanding your business goals, target
                      audience, and project requirements.
                    </p>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      2
                    </div>
                    <h3 className="text-xl font-bold">Design & Prototyping</h3>
                    <p className="text-muted-foreground">
                      Our designers create wireframes and interactive prototypes
                      to visualize the user experience.
                    </p>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      3
                    </div>
                    <h3 className="text-xl font-bold">Development</h3>
                    <p className="text-muted-foreground">
                      Our developers bring the designs to life using the most
                      appropriate technologies for your project.
                    </p>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      4
                    </div>
                    <h3 className="text-xl font-bold">
                      Testing & Quality Assurance
                    </h3>
                    <p className="text-muted-foreground">
                      We rigorously test your application to ensure it's
                      bug-free and performs optimally.
                    </p>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      5
                    </div>
                    <h3 className="text-xl font-bold">Deployment</h3>
                    <p className="text-muted-foreground">
                      We deploy your application to your preferred hosting
                      environment and ensure everything runs smoothly.
                    </p>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      6
                    </div>
                    <h3 className="text-xl font-bold">Maintenance & Support</h3>
                    <p className="text-muted-foreground">
                      We provide ongoing maintenance and support to keep your
                      application running smoothly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Portfolio Section */}
          <section
            id="portfolio"
            className="w-full py-12 md:py-24 lg:py-32 bg-muted"
          >
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                    Our Portfolio
                  </h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl">
                    Take a look at some of our recent projects and see how we've
                    helped our clients achieve their goals.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 py-8">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
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
                <button>
                  <NavLink href="#contact">
                    Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
                  </NavLink>
                </button>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                    What Our Clients Say
                  </h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl">
                    Don't just take our word for it. Here's what our clients
                    have to say about working with us.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 py-8">
                {[
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
                ].map((testimonial, i) => (
                  <div
                    key={i}
                    className="flex flex-col space-y-4 rounded-lg border p-6 shadow-sm"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="h-12 w-12 rounded-full bg-muted" />
                      <div>
                        <h3 className="text-lg font-bold">
                          {testimonial.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      "{testimonial.quote}"
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
            <div className="container px-4 md:px-6">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <div className="flex flex-col items-center justify-center space-y-2 text-center">
                  <div className="text-4xl font-bold">100+</div>
                  <p className="text-muted-foreground">Projects Completed</p>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2 text-center">
                  <div className="text-4xl font-bold">50+</div>
                  <p className="text-muted-foreground">Happy Clients</p>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2 text-center">
                  <div className="text-4xl font-bold">15+</div>
                  <p className="text-muted-foreground">Team Members</p>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2 text-center">
                  <div className="text-4xl font-bold">5+</div>
                  <p className="text-muted-foreground">Years of Experience</p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                    Frequently Asked Questions
                  </h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl">
                    Have questions? We've got answers. If you don't see what
                    you're looking for, feel free to contact us.
                  </p>
                </div>
              </div>
              <div className="mx-auto max-w-3xl space-y-4 py-8">
                {[
                  {
                    question:
                      "How long does it take to develop a web or mobile application?",
                    answer:
                      "The timeline varies depending on the complexity of the project. A simple website might take 4-6 weeks, while a complex application could take 3-6 months. We'll provide a detailed timeline during the discovery phase.",
                  },
                  {
                    question: "What is your pricing model?",
                    answer:
                      "We offer flexible pricing models including fixed-price projects, time and materials, and retainer arrangements. The best model depends on your project's scope and requirements.",
                  },
                  {
                    question: "Do you provide ongoing maintenance and support?",
                    answer:
                      "Yes, we offer ongoing maintenance and support packages to ensure your application continues to run smoothly after launch. We can also implement new features and updates as needed.",
                  },
                  {
                    question: "How do you ensure the quality of your work?",
                    answer:
                      "We follow industry best practices and have a rigorous quality assurance process. Our developers write clean, maintainable code, and our QA team thoroughly tests each application before delivery.",
                  },
                  {
                    question: "Can you work with our existing team?",
                    answer:
                      "We're happy to collaborate with your in-house team or other partners. We can provide specialized expertise or additional resources as needed.",
                  },
                ].map((faq, i) => (
                  <div key={i} className="rounded-lg border p-6 shadow-sm">
                    <h3 className="text-lg font-bold">{faq.question}</h3>
                    <p className="mt-2 text-muted-foreground">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section
            id="contact"
            className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground"
          >
            <div className="container px-4 md:px-6">
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
