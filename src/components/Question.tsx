"use client";

import React, { useState, useEffect } from "react";
import Toggle from "./Toggle";
import { QuestionProps } from "@/types/types";

const Question: React.FC<QuestionProps> = ({ question, options, correctAnswers = [] }) => {
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [locked, setLocked] = useState<boolean>(false);

  // Set the initial selected answers to the first option of each question
  useEffect(() => {
    const selectedOnLoad: string[] = options.map(option => option[0]);
    setSelectedAnswers(selectedOnLoad);
  }, []);

  const handleToggleChange = (index: number, value: string) => {
    if (locked) return;
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[index] = value;
    setSelectedAnswers(updatedAnswers);
  };

  const checkCorrectness = () => {
    // Check if each selected answer is in the correct answers array
    console.log(selectedAnswers, correctAnswers);
    return selectedAnswers.every((answer, index) => correctAnswers.includes(answer));
  };

  const isCorrect = checkCorrectness();

  return (
    <div className="max-w-5xl text-white mx-auto space-y-4 text-center">
      <h2 className="text-xl font-semibold mx-5">{question}</h2>

      {options.map((optionPair, index) => (
        <div key={index} className="flex items-center justify-between">
          <Toggle
            options={optionPair}
            selected={selectedAnswers[index]}
            onChange={(value) => handleToggleChange(index, value)}
          />
        </div>
      ))}

      <div
        className={`mt-4 p-2 rounded-md transition-colors duration-300`}
      >
        {isCorrect ? "Correct!" : "Incorrect. Try again."}
      </div>
    </div>
  );
};

export default Question;
