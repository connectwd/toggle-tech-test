"use client";
import { ToggleProps } from "@/types/types";
import React from "react";


const Toggle: React.FC<ToggleProps> = ({ options, selected, onChange, answers }) => {
    return (
        <div className={`relative flex border-2 border-[#F8CAA3] transition-all duration-300 hover:shadow-md overflow-hidden w-full text-nowrap flex-wrap md:flex-nowrap ${options.length > 2 ? "flex-col md:flex-row rounded-3xl md:rounded-full" : "flex-row rounded-full"}`}>
            {options.map((option, index) => (
                <button
                    disabled={answers.includes(selected)}
                    key={option}
                    className={`relative flex items-center justify-center align-middle flex-1 text-lg xl:text-2xl font-medium p-3 transition-discreet duration-500
            ${selected === option ? "text-[#9F938B]  bg-[#F8CAA3]" : "text-white bg-[#F8CAA3]/0"}
            ${options.length > 2 ? "flex-col w-full md:rounded-full" : "w-1/2 rounded-full"}
          `}
                    onClick={() => onChange(option)}
                >
                    {option}
                </button>
            ))}
        </div>
    );
};

export default Toggle;
