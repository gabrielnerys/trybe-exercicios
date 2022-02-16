import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('Verifica se o texto "carregando..." aparece na tela', () => {
  render(<App />);
  const loading = screen.getByText(/carregando.../i);
  expect(loading).toBeInTheDocument();
});

test('Verifica se o jogo com texto "Minecraft" aparece na tela', async () => {
  render(<App />);
  const minecraftText = await screen.findAllByText(/minecraft/i);
  expect(minecraftText[0]).toBeInTheDocument();
})

test('Verifica se a tela exibe as informações "Release Year" e "Sales" após clicar no link "Ver Detalhes"', async () => {
  render(<App />);
  const buttonDetails = await screen.findAllByText(/ver detalhes/i)   //Busca por todos os elementos com o texto e retorna um array
  userEvent.click(buttonDetails[1])                                   //Simula evento de clique em um elemento em um elemento especifico do array retornado
  const releaseYear = await screen.findByText(/release year/i);       //Busca por elementos unicos
  const sales = await screen.findByText(/sales/i);                    //Busca por elementos unicos
  expect(releaseYear && sales).toBeInTheDocument();                   //Define um comportamento esperado pela aplicação, no caso, que os elementos sejam renderizados

})
