import React from "react";

const ButtonNormal = ({ Text }) => {
  return (
    <div>
      <button className="flex justify-center items-center px-5 py-5 gap-2 h-9 w-30 border-none bg-black rounded-lg cursor-pointer hover:bg-gray-800 duration-700">
        <span className="text-white text-lg font-sans tracking-wide leading-5">
          {Text}
        </span>
      </button>
      <style>
        {` .animate-spin-on-hover:hover { animation: spin 2s linear infinite; }
             @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}
      </style>
    </div>
  );
};

export default ButtonNormal;
