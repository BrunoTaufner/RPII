import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SelectTipoOng from './SelectTipoOng';

describe('<SelectTipoOng />', () => {
  test('it should mount', () => {
    render(<SelectTipoOng />);
    
    const selectTipoOng = screen.getByTestId('SelectTipoOng');

    expect(selectTipoOng).toBeInTheDocument();
  });
});