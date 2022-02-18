import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    name: '',
    email: '',
  }

  handleInput = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    this.setState({ [name]: value })
  }

  render() {

    const { name, email } = this.state;

    return (
      <div className="App">
        <h1>Formulário</h1>
        <label htmlFor='name'>Nome:
          <input
            type="text"
            name="name"
            id="name"
            value={ name }
            onChange={ (e) => this.handleInput(e) }
          />
        </label>
        <br />
        <label htmlFor='email'>E-mail:
          <input
            type="email"
            name="email"
            id="email"
            value={ email }
            onChange={ (e) => this.handleInput(e) }
          />
        </label>
      </div>
    );
  }
}

export default App;
