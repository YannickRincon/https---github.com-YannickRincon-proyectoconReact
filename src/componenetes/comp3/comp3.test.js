import { render } from '@testing-library/react';
import PlantImages from './componenetes/comp3/comp3';

test('renders loading state', () => {
  const { getByText } = render(<PlantImages />);
  const loadingElement = getByText(/Loading.../i);
  expect(loadingElement).toBeInTheDocument();
});

//Este test eevalua tambien texto, pero este solo aparece brevemente mientras
//llega la informacion de la imagen desde la API que se llama