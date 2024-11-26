import { render, screen } from '@testing-library/react';
import Label from './Label';

test('Label is visible', () => {
  render(<Label text="Test Label" />);
  const labelElement = screen.getByText(/Test Label/i);
  expect(labelElement).toBeVisible();
});

test('Label has correct text', () => {
  render(<Label text="Label Text" />);
  const labelElement = screen.getByText(/Label Text/i);
  expect(labelElement).toHaveTextContent('Label Text');
});
