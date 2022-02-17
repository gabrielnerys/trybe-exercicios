import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <label htmlFor="id-email">
          Email
          <input id="id-email" type="email" />
        </label>
        <input id="btn-send" type="button" data-testid="id-send" value="Enviar"/>
        <input id="btn-send" type="button" value="Voltar"/>
      </div>
    );
  }
}

export default App;
