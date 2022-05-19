const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use('/sistema', require('./Routes/index'));

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001')
});

