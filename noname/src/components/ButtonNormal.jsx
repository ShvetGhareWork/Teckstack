import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const ButtonNormal = ({ Text, data_aos_delay }) => {
  useEffect(() => {
    Aos.init({ duration: 700, once: true });
  }, []);

  return (
    <div data-aos="fade-right" data-aos-delay={data_aos_delay}>
      <button className="flex justify-center items-center px-5 py-5 gap-2 h-9 w-30 border-none bg-black rounded-lg cursor-pointer hover:bg-gray-800 duration-700">
        <span className="text-white text-lg font-sans tracking-wide leading-5">
          {Text}
        </span>
      </button>
    </div>
  );
};

export default ButtonNormal;
