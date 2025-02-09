export type OptionGroup = string[] | [];
export interface CorrectnessProp {
    correctness: number;
    setCorrectness: React.Dispatch<React.SetStateAction<number>>;
  }

export interface QuestionProps {
    question: string;
    options: OptionArray;
    correctAnswers: string[];
  }

export type OptionArray = OptionGroup[];

export interface ToggleProps {
    options: OptionGroup;
    selected: string;
    onChange: (value: string) => void;
    answers: string[];
    styles: string;
  }