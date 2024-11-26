import React from 'react';
import { render, screen } from '@testing-library/react';
import RadioButton from './RadioButton';

test('renders RadioButton', () => {
  render(<RadioButton label="Radio Button" name="radioGroup" value="1" checked={false} onChange={() => {}} />);
  expect(screen.getByLabelText('Radio Button')).toBeVisible();
});