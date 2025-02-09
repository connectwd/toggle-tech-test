import { render } from '@testing-library/react';
import Toggle from '@/components/Toggle';
import '@testing-library/jest-dom';

describe('Toggle component', () => {
  const options = ['Option 1', 'Option 2', 'Option 3'];
  const selected = 'Option 1';
  const onChange = jest.fn();
  const answers = ['Option 1'];
  const styles = '100';

  it('renders the options correctly', () => {
    const { getByText } = render(
      <Toggle options={options} selected={selected} onChange={onChange} answers={answers} styles={styles} />
    );

    options.forEach((option) => {
      expect(getByText(option)).toBeInTheDocument();
    });
  });

  it('disables selected option', () => {
    const { getByText } = render(
      <Toggle options={options} selected={selected} onChange={onChange} answers={answers} styles={styles} />
    );

    const selectedOption = getByText(selected) as HTMLButtonElement;

    expect(selectedOption.disabled).toBe(true);
  });

});