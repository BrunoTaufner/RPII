import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TopFormulario from './TopFormulario';

describe('<TopFormulario />', () => {
  test('it should mount', () => {
    render(<TopFormulario />);
    
    const topFormulario = screen.getByTestId('TopFormulario');

    expect(topFormulario).toBeInTheDocument();
  });
});