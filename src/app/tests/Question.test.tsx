import { render, fireEvent } from '@testing-library/react';
import Question from '@/components/Question';
import '@testing-library/jest-dom';
describe('Question component', () => {
  const question = 'What is the capital of France?';
  const options = [['Paris', 'paris']];
  const correctAnswers = ['paris'];



it('renders the question and options correctly', () => {
    const { getByText } = render(
        <Question question={question} options={options} correctAnswers={correctAnswers} />
    );

    expect(getByText(question)).toBeInTheDocument();
    options.forEach(([optionText]) => {
        expect(getByText(optionText)).toBeInTheDocument();
    });
});

  it('updates selected answers correctly', () => {
    const { getByText } = render(
      <Question question={question} options={options} correctAnswers={correctAnswers} />
    );

    const optionIndex = 0;
    const selectedOption = options[optionIndex][1];

    fireEvent.click(getByText(options[optionIndex][1]));

    expect(getByText(selectedOption)).toHaveClass('optionBody_100');
    expect(getByText('Correct!')).toBeInTheDocument();
  });

  it('displays "Incorrect. Try again." when selected answers are incorrect', () => {
    const { getByText } = render(
      <Question question={question} options={options} correctAnswers={correctAnswers} />
    );

    const optionIndex = 0;

    fireEvent.click(getByText(options[optionIndex][0]));

    expect(getByText('Incorrect. Try again.')).toBeInTheDocument();
  });
});