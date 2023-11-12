import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FooterFixed from './FooterFixed';

describe('<FooterFixed />', () => {
  test('it should mount', () => {
    render(<FooterFixed />);
    
    const footerFixed = screen.getByTestId('FooterFixed');

    expect(footerFixed).toBeInTheDocument();
  });
});