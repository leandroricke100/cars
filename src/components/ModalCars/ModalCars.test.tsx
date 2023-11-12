import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ModalCars from './ModalCars';

describe('<ModalCars />', () => {
  test('it should mount', () => {
    render(<ModalCars />);
    
    const modalCars = screen.getByTestId('ModalCars');

    expect(modalCars).toBeInTheDocument();
  });
});