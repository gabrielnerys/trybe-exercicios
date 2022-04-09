import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const inputLabel = screen.getByLabelText(/email/i);
  expect(inputLabel).toBeInTheDocument();
  expect(inputLabel).toHaveProperty('type', 'email');
});

test('Verifica se existe um botão', () => {
  render(<App />);
  const button = screen.getAllByRole('button');
  expect(button).toHaveLength(2);
})

test('Verifica se existe um botão com o data-testid="id-send"', () => {
  render(<App />);
  const buttonId = screen.getByTestId('id-send');
  expect(buttonId).toBeInTheDocument();
  expect(buttonId).toHaveProperty('type', 'button');
  expect(buttonId).toHaveValue('Enviar');
})

test('Veri')