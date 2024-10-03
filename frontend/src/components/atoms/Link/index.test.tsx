import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Link from '.'; 
import { LINK_TARGET, LINK_REL } from '@/utils/constants';

describe('Link Component', () => {
  test('renders with correct href and children', () => {
    render(<Link href="https://www.example.com">Visit Example</Link>);

    const linkElement = screen.getByText(/Visit Example/i);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', 'https://www.example.com');
  });

  test('applies default target and rel', () => {
    render(<Link href="https://www.example.com">Visit Example</Link>);

    const linkElement = screen.getByText(/Visit Example/i);
    expect(linkElement).toHaveAttribute('target', LINK_TARGET.Self);
    expect(linkElement).toHaveAttribute('rel', LINK_REL); // Assuming LINK_REL is defined correctly
  });

  test('applies custom className', () => {
    render(
      <Link href="https://www.example.com" className="my-custom-class">
        Visit Example
      </Link>
    );

    const linkElement = screen.getByText(/Visit Example/i);
    expect(linkElement).toHaveClass('my-custom-class');
  });

  test('applies styles correctly', () => {
    const styles = { color: 'red', fontSize: '20px' };
    render(
      <Link href="https://www.example.com" styles={styles}>
        Visit Example
      </Link>
    );

    const linkElement = screen.getByText(/Visit Example/i);
    expect(linkElement).toHaveStyle(`color: ${styles.color}`);
    expect(linkElement).toHaveStyle(`font-size: ${styles.fontSize}`);
  });
});
