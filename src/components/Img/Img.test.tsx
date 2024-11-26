import { render, screen } from '@testing-library/react';
import Img from './Img';

test('renders Img', () => {
  render(<Img src="https://via.placeholder.com/150" alt="Placeholder Image" />);
  expect(screen.getByAltText('Placeholder Image')).toBeVisible();
});