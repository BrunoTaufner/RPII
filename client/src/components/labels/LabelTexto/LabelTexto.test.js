import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LabelTexto from './LabelTexto';

describe('<LabelTexto />', () => {
  test('it should mount', () => {
    render(<LabelTexto />);
    
    const labelTexto = screen.getByTestId('LabelTexto');

    expect(labelTexto).toBeInTheDocument();
  });
});