export type OptionPair = string[];

export interface QuestionProps {
    question: string;
    options: OptionArray;
    correctAnswers: string[];
  }

export type OptionArray = OptionPair[];

export interface ToggleProps {
    options: OptionPair;
    selected: string;
    onChange: (value: string) => void;
  }