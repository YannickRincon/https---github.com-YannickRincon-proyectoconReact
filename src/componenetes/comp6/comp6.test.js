import { render, fireEvent } from '@testing-library/react';
import Main from './componenetes/comp6/comp6';

test('renders the main component and handles increment and decrement', () => {
  const { getByText, getByTestId } = render(<Main />);

  const incrementButton = getByText('+', { selector: 'button' });
  const decrementButton = getByText('-', { selector: 'button' });
  const unitsDisplay = getByTestId('units-display');

  expect(unitsDisplay).toHaveTextContent('0');

  fireEvent.click(incrementButton);
  expect(unitsDisplay).toHaveTextContent('1');

  fireEvent.click(decrementButton);
  expect(unitsDisplay).toHaveTextContent('0');
});
