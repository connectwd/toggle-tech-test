import React from "react";
import Question from "@/components/Question";
import { shuffleArray } from "@/utils/shuffle";
import { questions } from "@/data/questions";

const QuestionWithShuffledOptions = shuffleArray(questions);
const Page = () => {

  return (
    <main className="min-h-full min-w-full">
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
