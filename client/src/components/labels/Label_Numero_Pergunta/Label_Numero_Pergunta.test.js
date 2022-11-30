import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LabelNumeroPergunta from './LabelNumeroPergunta';

describe('<LabelNumeroPergunta />', () => {
  test('it should mount', () => {
    render(<LabelNumeroPergunta />);
    
    const labelNumeroPergunta = screen.getByTestId('LabelNumeroPergunta');

    expect(labelNumeroPergunta).toBeInTheDocument();
  });
});