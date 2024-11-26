import { render } from '@testing-library/react';
import Text from './Text';

describe('Text Component', () => {
  it('renders correctly with given content', () => {
    const { getByText } = render(<Text content="Hello, World!" />);
    expect(getByText('Hello, World!')).toBeInTheDocument();
  });

  it('applies the correct color and font size', () => {
    const { getByText } = render(<Text content="Styled Text" color="red" fontSize="20px" />);
    const textElement = getByText('Styled Text');
    expect(textElement).toHaveStyle('color: red');
    expect(textElement).toHaveStyle('font-size: 20px');
  });
});
