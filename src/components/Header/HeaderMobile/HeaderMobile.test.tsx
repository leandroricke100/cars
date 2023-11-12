import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HeaderMobile from './HeaderMobile';

describe('<HeaderMobile />', () => {
  test('it should mount', () => {
    render(<HeaderMobile />);
    
    const headerMobile = screen.getByTestId('HeaderMobile');

    expect(headerMobile).toBeInTheDocument();
  });
});