import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Icon from '.' 
import { ICON_COMPONENT_DATA_TEST_ID } from '@/utils/constants';

describe('Icon Component', () => {
  const mockClick = jest.fn();
  const src = "test-image.png";
  const alt = "Test Icon";
  const styles = { borderRadius: '50%' };
  const width = "50px";
  const height = "50px";

  it('renders the icon with given props', () => {
    render(
      <Icon
        src={src}
        alt={alt}
        width={width}
        height={height}
        styles={styles}
        onClick={mockClick}
      />
    );

    const iconElement = screen.getByTestId(ICON_COMPONENT_DATA_TEST_ID); 
    expect(iconElement).toBeInTheDocument();
    expect(iconElement).toHaveAttribute('src', src);
    expect(iconElement).toHaveAttribute('alt', alt);
    expect(iconElement).toHaveStyle(`width: ${width}px`);
    expect(iconElement).toHaveStyle(`height: ${height}px`);
    expect(iconElement).toHaveStyle('border-radius: 50%');
  });

  it('calls onClick when the icon is clicked', () => {
    render(
      <Icon
        src={src}
        alt={alt}
        width={width}
        height={height}
        styles={styles}
        onClick={mockClick}
      />
    );

    const iconElement = screen.getByTestId(ICON_COMPONENT_DATA_TEST_ID); 
    fireEvent.click(iconElement);

    expect(mockClick).toHaveBeenCalled();
  });
});
