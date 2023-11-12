import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HeaderDesktop from './HeaderDesktop';

describe('<HeaderDesktop />', () => {
  test('it should mount', () => {
    render(<HeaderDesktop />);
    
    const headerDesktop = screen.getByTestId('HeaderDesktop');

    expect(headerDesktop).toBeInTheDocument();
  });
});