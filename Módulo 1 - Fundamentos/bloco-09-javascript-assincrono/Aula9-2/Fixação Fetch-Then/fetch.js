const fetch = require('node-fetch');

const fetchJoke = async () => {
    const url = 'https://api.chucknorris.io/jokes/random?category=dev';

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.value)
    } catch (error){
        console.log(`Algo deu errado :(\n${error}`);
    }
}
//     const result = await fetch(url)
//         .then((response) => response.json()) // É passada uma função com argumento, e essa função recebe um argumento que é a resposta do fetch
//         .then((data) => data.value) //O segundo then recebe uma função como argumento que retorna dos dados do then anterior 
//         .catch((error) => console.log(`Algo deu errado :(\n${error}`));

//     console.log(result)
// }

fetchJoke();

