import { render } from '@testing-library/react';
import Foott from './componenetes/comp2/comp2';

test('renders copyright text correctly', () => {
  const { getByText } = render(<Foott />);
  const copyrightElement = getByText(/&copy; 2023 Vivero YanCactus/i);
  expect(copyrightElement).toBeInTheDocument();
});
