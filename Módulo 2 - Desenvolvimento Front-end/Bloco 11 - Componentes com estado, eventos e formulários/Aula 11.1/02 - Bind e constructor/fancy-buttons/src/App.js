import React, { Component } from "react";

class App extends Component {

  constructor() {

    super();
    this.handleClick1 = this.handleClick1.bind(this);

  }

  handleClick1() {
    console.log("Olá");
  }

  handleClick2() {
    console.log("como vai?");
  }

  handleClick3() {
    console.log("Mui Bien!");
  }
  render() {
    return (
      <>
        <button onClick={this.handleClick1}>Button 1</button>
        <button onClick={this.handleClick2}>Button 2</button>
        <button onClick={this.handleClick3}>Button 3</button>
      </>
    );
  }
}

export default App;
