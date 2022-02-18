import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Testa inputs no formulário', () => {
  
  it('Verifica se o valor do campo "Name" é alterado e testa o valor guardado', () => {
    render(<App />);
      const inputName = screen.getByRole('textbox', { name: /nome/i });
      expect(inputName).toBeInTheDocument();
      expect(inputName).toHaveValue('');
      userEvent.type(inputName, 'Estudante da Trybe');
      expect(inputName).toHaveValue('Estudante da Trybe');
  });

  it('Verifica se o valor do campo "Email" é alterado e testa o valor guardado', () => {
    render(<App />);
      const inputEmail = screen.getByRole('textbox', { name: /e-mail/i });
      expect(inputEmail).toBeInTheDocument();
      expect(inputEmail).toHaveValue('');
      userEvent.type(inputEmail, 'estudante@trybe.com');
      expect(inputEmail).toHaveValue('estudante@trybe.com');
  });

});
