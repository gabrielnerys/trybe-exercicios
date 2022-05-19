const fs = require('fs');

const arquivo = 'meuArquivo.txt'

try{
  const data = fs.readFileSync(arquivo, 'utf-8');
  console.log(data);
} catch (err) {
  console.error(`Erro ao ler arquivo: ${err.path}`);
  console.log(err);
}