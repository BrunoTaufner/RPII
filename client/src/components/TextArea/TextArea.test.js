import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TextArea from './TextArea';

describe('<TextArea />', () => {
  test('it should mount', () => {
    render(<TextArea />);
    
    const textArea = screen.getByTestId('TextArea');

    expect(textArea).toBeInTheDocument();
  });
});