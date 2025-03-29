import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Aos from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 700 }); // Initialize AOS with a duration of 700ms
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message. We'll get back to you soon!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 flex flex-col items-center justify-center text-center">
          <div className="container mx-auto px-4 md:px-6">
            <h1 className="text-2xl font-bold tracking-tighter md:text-4xl xl:text-5xl flex justify-center">
              {"Contact Us".split("").map((char, index) => (
                <span
                  key={index}
                  data-aos="fade-in"
                  data-aos-delay={index * 50}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </h1>
            <p
              data-aos="zoom-in"
              data-aos-delay={500}
              className="max-w-[1100px] mx-auto text-center text-gray-500 md:text-xl mt-4"
            >
              Scroll down to get in touch with our team. We're here to help with
              any questions or inquiries.
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              {/* Form */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Get in Touch</h2>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you as soon as
                  possible.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block  text-sm font-medium text-gray-700"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Your email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="Subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Your message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
                      rows="4"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-gray-800"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Contact Information</h2>
                <p className="text-gray-600">
                  You can also reach us using the following contact details.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Mail className="h-6 w-6 text-gray-700" />
                    <div>
                      <h3 className="font-bold">Email</h3>
                      <p>
                        <a
                          href="mailto:info@company.com"
                          className="text-gray-700 hover:underline"
                        >
                          info@company.com
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Phone className="h-6 w-6 text-gray-700" />
                    <div>
                      <h3 className="font-bold">Phone</h3>
                      <p>
                        <a
                          href="tel:+1234567890"
                          className="text-gray-700 hover:underline"
                        >
                          +1 (234) 567-890
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPin className="h-6 w-6 text-gray-700" />
                    <div>
                      <h3 className="font-bold">Address</h3>
                      <p>
                        123 Business Street, Suite 100, San Francisco, CA 94103
                      </p>
                    </div>
                  </div>
                </div>
                <div className="h-[300px] rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.7317022276957!2d72.80790897498659!3d19.423994981853546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a96753f93e43%3A0xf2fd47cc1df932ef!2sPoonam%20Everest%2C%20POONAM%20EVEREST%2C%201st%20Road%2C%20Sriprastha%2C%20Morya%20Nagar%2C%20Nala%20Sopara%2C%20Maharashtra%20401203!5e0!3m2!1sen!2sin!4v1743268399411!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
