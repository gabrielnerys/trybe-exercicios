const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());

app.use(cors());

app.get('/welcome', (request, response) => {
  console.log("welcome");
  response.status(400).json({ message: "Tudo OK por aqui"});
  }); 

app.use('/sistema', require('./routes/index.js'));

app.listen(3006, () => {
  console.log('Aplicação rodando na porta 3001');
})
