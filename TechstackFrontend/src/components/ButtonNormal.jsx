import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { ArrowRight } from "lucide-react";

const ButtonNormal = ({ Text, data_aos_delay, href }) => {
  useEffect(() => {
    Aos.init({ duration: 700, once: true });
  }, []);

  return (
    <div data-aos="fade-right" data-aos-delay={data_aos_delay}>
      <button
        onClick={href}
        className="flex justify-center items-center px-5 py-5 gap-2 h-9 w-30 border-none bg-black rounded-lg cursor-pointer hover:bg-gray-800 duration-700"
      >
        <span className="text-white flex items-center justify-center text-lg font-sans tracking-wide leading-5">
          {Text} <ArrowRight className="ml-2 h-4 w-4" />
        </span>
      </button>
    </div>
  );
};

export default ButtonNormal;
