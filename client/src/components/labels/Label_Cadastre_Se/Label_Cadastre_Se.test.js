import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LabelCadastreSe from './LabelCadastreSe';

describe('<LabelCadastreSe />', () => {
  test('it should mount', () => {
    render(<LabelCadastreSe />);
    
    const labelCadastreSe = screen.getByTestId('LabelCadastreSe');

    expect(labelCadastreSe).toBeInTheDocument();
  });
});