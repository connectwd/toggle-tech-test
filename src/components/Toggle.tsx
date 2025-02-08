"use client";
import { ToggleProps } from "@/types/types";
import React from "react";


const Toggle: React.FC<ToggleProps> = ({ options, selected, onChange }) => {
  return (
    <div className={`relative flex border-2 border-[#F8CAA3] transition-all duration-300 hover:shadow-md overflow-hidden w-full text-nowrap flex-wrap md:flex-nowrap ${options.length > 2 ? "flex-col rounded-3xl" : "flex-row rounded-full"}`}>
      {options.map((option, index) => (
        <button
          key={option}
          className={`relative flex items-center justify-center align-middle flex-1 text-lg xl:text-2xl font-medium p-3 transition-discreet duration-500
            ${selected === option ? "text-[#9F938B]  bg-[#F8CAA3]" : "text-white bg-[#F8CAA3]/0"}
            ${options.length > 2 ? "flex-col w-full" : "w-1/2 rounded-full"}
          `}
          onClick={() => onChange(option)}
        >
          {option}
        </button>
      ))}
      {/* <div
        className={`absolute top-1 bottom-1 w-1/2 bg-blue-500/10 rounded-full transition-all duration-300 ${
          selected != options[0] ? "right-1" : `left-1`
        }`}
      /> */}
    </div>
  );
};

export default Toggle;
