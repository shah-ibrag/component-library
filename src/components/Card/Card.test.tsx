import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';

test('renders Card', () => {
  render(<Card>This is a card</Card>);
  expect(screen.getByText('This is a card')).toBeVisible();
});