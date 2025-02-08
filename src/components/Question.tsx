"use client";

import React, { useState, useEffect, useMemo } from "react";
import Toggle from "./Toggle";
import { QuestionProps } from "@/types/types";

const Question: React.FC<QuestionProps> = ({ question, options = [], correctAnswers = [] }) => {
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);

  // Set the initial selectedAnswers to the first option of each question
  useEffect(() => {
    const selectedOnLoad: string[] = options.map(option => option[0]);
    setSelectedAnswers(selectedOnLoad);
  }, [options]);

  const handleToggleChange = (index: number, value: string) => {
    setSelectedAnswers(prevAnswers => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[index] = value;
      return updatedAnswers;
    });
  };

  const checkCorrectness = useMemo(() => {
    return selectedAnswers.every((answer, index) => correctAnswers.includes(answer));
  }, [selectedAnswers, correctAnswers]);

  return (
    <div className="max-w-5xl text-white mx-auto space-y-4 text-center">
      <h2 className="text-xl font-semibold mx-5">{question}</h2>

      {options.map((optionPair, index) => (
        <div key={index} className="flex items-center justify-between">
          <Toggle
            options={optionPair}
            selected={selectedAnswers[index]}
            onChange={(value) => handleToggleChange(index, value)}
            answers={correctAnswers}
          />
        </div>
      ))}

      <div
        className={`mt-4 p-2 rounded-md transition-colors duration-300`}
      >
        {checkCorrectness ? "Correct!" : "Incorrect. Try again."}
      </div>
    </div>
  );
};

export default Question;