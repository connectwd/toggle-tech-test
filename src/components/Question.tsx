"use client";
import React, { useState, useEffect, useMemo } from "react";
import Toggle from "./Toggle";
import { QuestionProps } from "@/types/types";


const Question: React.FC<QuestionProps> = ({ question, options = [], correctAnswers = [] }) => {
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [correctnessPercentage, setCorrectnessPercentage] = useState(0);
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

  const checkCorrectness = () => {
    // Calculate how many answers are correct
    const correctCount = selectedAnswers.filter((answer) => correctAnswers.includes(answer)).length;
    const percentage = Math.round((correctCount / correctAnswers.length) * 100);
    setCorrectnessPercentage(percentage);

    return percentage === 100;
  };

  useEffect(() => {
    checkCorrectness();
  }, [selectedAnswers]);

  useEffect(() => {
    if (correctnessPercentage === 100) {
      // Force a re-render when correctnessPercentage hits 100
      setCorrectnessPercentage(prev => prev);
    }
  }, [correctnessPercentage]);

  const backgroundColor = correctnessPercentage === 100 ? "100" : 
    correctnessPercentage >= 50 ? "50" : "0";

  console.log(correctnessPercentage, backgroundColor);

  return (
    <div className={`size-full text-white mx-auto space-y-4 text-center questionBody_${backgroundColor}`}>
      <h2 className="text-xl font-semibold mx-5">{question}</h2>

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

      <div
        className={`mt-4 p-2 rounded-md transition-colors duration-300`}
      >
        {correctnessPercentage === 100 ? "Correct!" : "Incorrect. Try again."}
      </div>
    </div>
  );
};

export default Question;