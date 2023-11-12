import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HeaderFixed from './HeaderFixed';

describe('<HeaderFixed />', () => {
  test('it should mount', () => {
    render(<HeaderFixed />);
    
    const headerFixed = screen.getByTestId('HeaderFixed');

    expect(headerFixed).toBeInTheDocument();
  });
});