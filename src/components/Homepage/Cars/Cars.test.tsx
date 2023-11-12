import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Cars from './Cars';

describe('<Cars />', () => {
  test('it should mount', () => {
    render(<Cars />);
    
    const cars = screen.getByTestId('Cars');

    expect(cars).toBeInTheDocument();
  });
});