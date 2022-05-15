const { expect } = require('chai');
const calculaSituacao = require('../calculaSituacao');

describe('Verifica retorno de resultados', () => {
  it('Retorna "Reprovado" quando resultado é menor que 7', () => {
    const resposta = calculaSituacao(6);

    expect(resposta).equals('reprovado')
  });
  it('Retorna "Aprovado" quando resultado é maior que 7', () => {
    const resposta = calculaSituacao(8);

    expect(resposta).equals('aprovado')
  });
});
