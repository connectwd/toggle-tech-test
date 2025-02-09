import React from "react";
import Question from "@/components/Question";
import { shuffleArray } from "@/utils/shuffle";
import { questions } from "@/data/questions";
const Page = () => {
  // Shuffle the options for the question
  const QuestionWithShuffledOptions = shuffleArray(questions);

  return (
    <main className="min-h-screen min-w-full">
      {QuestionWithShuffledOptions.map((q, index) => (
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
