import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LabelPergunta from './LabelPergunta';

describe('<LabelPergunta />', () => {
  test('it should mount', () => {
    render(<LabelPergunta />);
    
    const labelPergunta = screen.getByTestId('LabelPergunta');

    expect(labelPergunta).toBeInTheDocument();
  });
});