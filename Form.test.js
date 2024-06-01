import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Form from './Form';

test('Envía datos correctamente', () => {
  const { getByPlaceholderText, getByText } = render(<Form />);
  fireEvent.changeText(getByPlaceholderText('Nombre'), 'John Doe');
  fireEvent.changeText(getByPlaceholderText('Email'), 'john@example.com');
  fireEvent.press(getByText('Enviar'));

  expect(fetch).toHaveBeenCalledWith('https://example.com/api/form', expect.anything());
});
