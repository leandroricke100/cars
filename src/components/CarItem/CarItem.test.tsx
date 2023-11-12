import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CarItem from './CarItem';

describe('<CarItem />', () => {
  test('it should mount', () => {
    render(<CarItem />);
    
    const carItem = screen.getByTestId('CarItem');

    expect(carItem).toBeInTheDocument();
  });
});