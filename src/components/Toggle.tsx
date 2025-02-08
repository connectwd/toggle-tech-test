"use client";
import { ToggleProps } from "@/types/types";
import React from "react";


const Toggle: React.FC<ToggleProps> = ({ options, selected, onChange }) => {
  return (
    <div className="relative flex items-center bg-gray-200 rounded-full w-full p-1">
      {options.map((option, index) => (
        <button
          key={option}
          className={`relative flex-1 text-sm font-medium py-2 transition-all duration-300
            ${selected === option ? "text-white  bg-blue-500/10 rounded-full" : "text-gray-700"}
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
