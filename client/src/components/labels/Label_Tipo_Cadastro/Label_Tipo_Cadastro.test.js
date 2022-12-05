import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LabelTipoCadastro from './LabelTipoCadastro';

describe('<LabelTipoCadastro />', () => {
  test('it should mount', () => {
    render(<LabelTipoCadastro />);
    
    const labelTipoCadastro = screen.getByTestId('LabelTipoCadastro');

    expect(labelTipoCadastro).toBeInTheDocument();
  });
});