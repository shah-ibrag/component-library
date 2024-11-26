import { render, screen } from '@testing-library/react';
import Dropdown from './Dropdown';

test('renders Dropdown', () => {
  render(<Dropdown options={[{ label: 'Option 1', value: '1' }]} onChange={() => {}} />);
  expect(screen.getByText('Option 1')).toBeVisible();
});