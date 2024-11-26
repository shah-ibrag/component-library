import { render, screen } from '@testing-library/react';
import HeroImage from './HeroImage';

test('renders HeroImage', () => {
  render(<HeroImage src="https://via.placeholder.com/1200x400" height="400px" />);
  expect(screen.getByRole('img')).toBeVisible();
});