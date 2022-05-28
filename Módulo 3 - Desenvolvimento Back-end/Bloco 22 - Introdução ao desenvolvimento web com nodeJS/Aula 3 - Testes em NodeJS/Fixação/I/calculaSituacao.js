const calculaSituacao = (media) => {
  if (media >= 7) {
    return 'aprovado';
  }
  if (media < 7) {
    return 'reprovado';
  }
  if (media === undefined) {
    return 'Valor informado não é um número válido';
  }
}

module.exports = calculaSituacao;