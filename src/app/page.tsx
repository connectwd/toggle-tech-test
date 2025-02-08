import React from "react";
import Question from "@/components/Question";
import { shuffleArray } from "@/utils/shuffle";
import { questions } from "@/data/questions";
const Page = () => {
  // Shuffle the options for randomness
  const shuffledQuestions = shuffleArray(questions);

  return (
    <main className="min-h-screen p-8 md:py-24">
      {shuffledQuestions.map((q, index) => (
        <Question
          key={index}
          question={q.question}
          options={shuffleArray(q.options)}
          correctAnswers={q.correctAnswers}
        />
      ))}
    </main>
  );
};

export default Page;
