import { render, screen } from '@testing-library/react';
import Button from './Button';

test('should render button component', () => {
  render(<Button />);
  const todoElement = screen.getByTestId('test-1');

  expect(todoElement).toBeInTheDocument();
});
