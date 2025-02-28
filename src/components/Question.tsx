"use client";
import React, { useState } from "react";
import Toggle from "./Toggle";
import { QuestionProps } from "@/types/types";

const Question: React.FC<QuestionProps> = ({ question, options = [], correctAnswers = [] }) => {
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>(() => options.map(option => option[0]));

  const handleToggleChange = (index: number, value: string) => {
    setSelectedAnswers(prevAnswers => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[index] = value;
      return updatedAnswers;
    });
  };

  const correctnessPercentage = Math.round(
    (selectedAnswers.filter(answer => correctAnswers.includes(answer)).length / correctAnswers.length) * 100
  );

  const backgroundColor = correctnessPercentage === 100 ? "100" : 
    correctnessPercentage >= 50 ? "50" : "0";

  return (
    <div className={`min-h-screen text-white mx-auto p-8 md:py-24 space-y-4 text-center questionBody_${backgroundColor}`}>
      <h2 className="text-3xl font-semibold mx-6 py-4">{question}</h2>

      {options.map((optionPair, index) => (
        <div key={index} className="flex items-center justify-between">
          <Toggle
            options={optionPair}
            selected={selectedAnswers[index]}
            onChange={(value) => handleToggleChange(index, value)}
            answers={correctAnswers}
            styles={backgroundColor}
          />
        </div>
      ))}

      <div className={`mt-4 p-4 text-2xl rounded-md transition-colors duration-300`}>
        {correctnessPercentage === 100 ? "Correct!" : "Incorrect. Try again."}
      </div>
    </div>
  );
};

export default Question;