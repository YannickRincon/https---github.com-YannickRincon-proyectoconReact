import { render } from '@testing-library/react';
import Heade from './componenetes/comp1/comp1';

test('renders header text correctly', () => {
  const { getByText } = render(<Heade/>);
  const headerElement = getByText(/Vivero YanCactus/i);
  expect(headerElement).toBeInTheDocument();
});

//Este test evalua si el texto "Vivero YanCatus" se encuentra en el componente correctamente