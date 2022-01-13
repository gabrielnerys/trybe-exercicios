const fetch = require('node-fetch');

const fetchJoke = () => {
    const url = 'api.chucknorris.io/jokes/random?category=dev';

    fetch(url)
        .then((response) => response.json()) // É passada uma função com argumento, e essa função recebe um argumento que é a resposta do fetch
        .then((data) => console.log(data.value)) //O segundo then recebe uma função como argumento que retorna dos dados do then anterior 
        .catch((error) => console.log(`Algo deu errado :(\n${error}`));
}

fetchJoke();

