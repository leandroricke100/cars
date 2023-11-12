import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FormCotacao from './FormCotacao';

describe('<FormCotacao />', () => {
  test('it should mount', () => {
    render(<FormCotacao />);
    
    const formCotacao = screen.getByTestId('FormCotacao');

    expect(formCotacao).toBeInTheDocument();
  });
});