const express = require('express');

const app = express();
app.use(express.json());

const routes = require('./routes/index');

app.use('/', routes);

app.all('*', (req, res) => {
	return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});