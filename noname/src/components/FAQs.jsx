import React, { useState } from "react";

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How long does it take to develop a web or mobile application?",
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
  ];

  return (
    <div>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                Have questions? We've got answers. If you don't see what you're
                looking for, feel free to contact us.
              </p>
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="mx-auto max-w-3xl space-y-4 py-8">
            {faqs.map((faq, index) => (
              <div
                key={index}
                data-aos="fade-right"
                data-aos-delay={index * 200}
                className="rounded-lg border shadow-sm"
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between p-6 text-left focus:outline-none"
                >
                  <h3 className="text-lg font-bold">{faq.question}</h3>
                  {/* Arrow Icon */}
                  <svg
                    className={`h-5 w-5 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : "rotate-0"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>

                {/* Answer (Collapsible) */}
                <div
                  className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden px-6 pb-6 text-muted-foreground">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQs;
