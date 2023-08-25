import { render, fireEvent } from '@testing-library/react';
import Main from './componenetes/comp6/comp6';

test('renders the main component and handles increment and decrement', () => {
  const { getByText, getByTestId } = render(<Main />);

  const incrementButton = getByText('+', { selector: 'button' });
  const unitsDisplay = getByTestId('units-display');

  expect(unitsDisplay).toHaveTextContent('0');

  fireEvent.click(incrementButton);
  expect(unitsDisplay).toHaveTextContent('1');
});

//Este test evalua si se muestra el cero al principio en el elemento y tambien
//si al ejecutar el evento de hacer click en el boton de incremento si 
//se evidencia dicho incremento