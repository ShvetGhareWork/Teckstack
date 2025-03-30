import { useState, useEffect } from "react";
import { SquareCheckBig } from "lucide-react";
import Aos from "aos";
import "aos/dist/aos.css";

const plans = [
  {
    name: "Basic",
    description: "Perfect for small projects",
    price: "$5,000",
    features: [
      "Up to 3 team members",
      "Basic project management",
      "1 revision round",
      "30 days support",
    ],
  },
  {
    name: "Standard",
    description: "Ideal for medium-sized projects",
    price: "$12,000",
    features: [
      "Up to 5 team members",
      "Advanced project management",
      "3 revision rounds",
      "60 days support",
      "Weekly progress reports",
    ],
  },
  {
    name: "Premium",
    description: "For complex enterprise projects",
    price: "$25,000",
    features: [
      "Up to 10 team members",
      "Enterprise project management",
      "Unlimited revisions",
      "90 days support",
      "Daily progress reports",
      "Dedicated project manager",
      "24/7 priority support",
    ],
  },
];

const workflowData = [
  {
    day: "Day 1: Project Kickoff",
    tasks: [
      "Initial client meeting",
      "Requirements gathering",
      "Project scope definition",
      "Team assignment",
    ],
  },
  {
    day: "Day 2: Planning & Research",
    tasks: [
      "Market research",
      "Competitor analysis",
      "Technical feasibility assessment",
      "Project plan creation",
    ],
  },
  {
    day: "Day 3: Design Phase Begins",
    tasks: [
      "Wireframing",
      "Initial design concepts",
      "Client feedback collection",
      "Design iterations",
    ],
  },
  {
    day: "Day 4: Design Refinement",
    tasks: [
      "Design finalization",
      "Style guide creation",
      "Asset preparation",
      "Design approval",
    ],
  },
  {
    day: "Day 5: Development Setup",
    tasks: [
      "Development environment setup",
      "Code repository initialization",
      "Technology stack finalization",
      "Development task allocation",
    ],
  },
  {
    day: "Day 6: Core Development",
    tasks: [
      "Frontend development",
      "Backend development",
      "Database setup",
      "API integration",
    ],
  },
  {
    day: "Day 7: Testing & Delivery",
    tasks: [
      "Quality assurance testing",
      "Bug fixing",
      "Performance optimization",
      "Client presentation and handover",
    ],
  },
];

const services = [
  {
    name: "Web Development",
    description:
      "Custom websites and web applications built with the latest technologies",
    details: [
      "Responsive design",
      "E-commerce solutions",
      "Content management systems",
      "Progressive web apps",
      "API development and integration",
    ],
  },
  {
    name: "Mobile Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android",
    details: [
      "iOS app development",
      "Android app development",
      "Cross-platform solutions",
      "App store submission",
      "Maintenance and updates",
    ],
  },
  {
    name: "UI/UX Design",
    description:
      "User-centered design services to create intuitive and engaging experiences",
    details: [
      "User research",
      "Wireframing and prototyping",
      "Visual design",
      "Usability testing",
      "Design systems",
    ],
  },
  {
    name: "Digital Marketing",
    description:
      "Comprehensive digital marketing services to grow your online presence",
    details: [
      "Search engine optimization (SEO)",
      "Content marketing",
      "Social media marketing",
      "Email marketing",
      "Analytics and reporting",
    ],
  },
];

const ServicesPage = () => {
  const [activeTab, setActiveTab] = useState("services");
  useEffect(() => {
    Aos.init({ duration: 700 });
  }, []);

  return (
    <div className="p-6 w-full flex flex-col items-center">
      {/* Tab Navigation */}
      <div className="flex space-x-6 border-b pb-2 mb-6 overflow-x-auto">
        {["services", "pricing", "workflow"].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 whitespace-nowrap ${
              activeTab === tab
                ? "border-b-2 border-black font-bold"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="w-full max-w-6xl">
        {activeTab === "services" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((service, i) => (
              <div
                data-aos="fade-up"
                data-aos-delay={i * 100}
                key={i}
                className="border p-4 rounded-lg"
              >
                <h2 data-aos="fade-in" className="text-xl font-bold">
                  {service.name}
                </h2>
                <p data-aos="fade-in" className="text-gray-600">
                  {service.description}
                </p>
                <ul className="list-disc flex-1 pl-5 text-gray-500 mt-2">
                  {service.details.map((detail, j) => (
                    <li
                      data-aos="fade-right"
                      data-aos-delay={j * 250}
                      className="mt-3"
                      key={j}
                    >
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>

      {activeTab === "pricing" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div
              data-aos="fade-up"
              data-aos-delay={index * 100}
              key={index}
              className="border p-6 rounded-lg shadow-md"
            >
              <h3 data-aos="fade-in" className="text-xl font-semibold">
                {plan.name}
              </h3>
              <p data-aos="fade-in" className="text-gray-500 mb-2">
                {plan.description}
              </p>
              <p data-aos="fade-in" className="text-4xl font-bold">
                {plan.price}
              </p>
              <ul className="mt-4 space-y-2">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    data-aos="fade-in"
                    data-aos-delay={i * 100}
                    className="flex items-center"
                  >
                    <SquareCheckBig />{" "}
                    <span className="ml-2 mt-2">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {activeTab === "workflow" && (
        <div className="p-4 sm:p-8 w-full sm:w-[1100px] border rounded-lg">
          <h2 className="text-2xl mb-7 font-bold">Daily Workflow</h2>
          {workflowData.map((day, index) => (
            <div
              data-aos="fade-right"
              data-aos-delay={index * 100}
              key={index}
              className="border p-4 rounded-lg shadow-md my-4"
            >
              <h3 className="text-lg font-semibold">{day.day}</h3>
              <ul className="space-y-1">
                {day.tasks.map((task, i) => (
                  <li key={i} className="flex items-center">
                    <SquareCheckBig /> <span className="ml-2 mt-2">{task}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ServicesPage;
