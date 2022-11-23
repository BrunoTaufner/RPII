import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LabelTitulo from './LabelTitulo';

describe('<LabelTitulo />', () => {
  test('it should mount', () => {
    render(<LabelTitulo />);
    
    const labelTitulo = screen.getByTestId('LabelTitulo');

    expect(labelTitulo).toBeInTheDocument();
  });
});