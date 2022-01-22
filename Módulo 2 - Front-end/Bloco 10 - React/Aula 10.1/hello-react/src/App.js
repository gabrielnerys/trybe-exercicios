import React from 'react';
import { Component } from 'react/cjs/react.production.min';
import './App.css';
// import Title from './Title';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const lista = ['Acordar', 'Tomar café', 'Exercitar', 'Ler um livro', 'Meditar'];

class App extends Component {
  render(){
    return (
      <ul>{ lista.map(lista => Task(lista)) }</ul>
    );
  }
}


// function App() {
//   return <Title />
// }

export default App;
