import { render } from '@testing-library/react';
import PlantImages from './componenetes/comp3/comp3';

test('renders loading state', () => {
  const { getByText } = render(<PlantImages />);
  const loadingElement = getByText(/Loading.../i);
  expect(loadingElement).toBeInTheDocument();
});

test('renders error state', () => {
  const { getByText } = render(<PlantImages />);
  const errorElement = getByText(/Error:/i);
  expect(errorElement).toBeInTheDocument();
});
