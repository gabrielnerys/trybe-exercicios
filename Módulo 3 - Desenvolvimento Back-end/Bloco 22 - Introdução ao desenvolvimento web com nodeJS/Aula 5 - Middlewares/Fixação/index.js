const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());

app.use(cors());

app.use('/sistema', require('./routes/index'));

app.get('/welcome', (request, response) => {
    console.log("welcome");
    response.status(400).json({ message: "Tudo OK por aqui"});
    }); 

app.listen(3001, () => {
    console.log('Aplicação rodando na porta 3001');
})
