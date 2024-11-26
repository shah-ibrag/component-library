import { render, screen } from '@testing-library/react';
import Button from './Button';

test('Button is visible', () => {
  render(<Button label="Test Button" />);
  const buttonElement = screen.getByText(/Test Button/i);
  expect(buttonElement).toBeVisible();
});

test('Button is disabled', () => {
  render(<Button label="Disabled" disabled />);
  const buttonElement = screen.getByText(/Disabled/i);
  expect(buttonElement).toBeDisabled();
});
