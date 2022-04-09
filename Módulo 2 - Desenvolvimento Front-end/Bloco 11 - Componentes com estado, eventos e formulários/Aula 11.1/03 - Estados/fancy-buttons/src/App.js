import React, { Component } from "react";

class App extends Component {

  constructor() {

    super();
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);

    this.state = {
      clickButtonOne: 0,
      clickButtonTwo: 0,
      clickButtonThree: 0,
    };
  }

  handleClick1() {
    this.setState(({ clickButtonOne }) => ({
      clickButtonOne: clickButtonOne + 1,
    }));
    // this.setState(() => ({
    //   clicksBtnOne: 1,         setState passado para atualizar o valor do state para um valor específico.
  }

  handleClick2() {
    this.setState(({ clickButtonTwo }) => ({
      clickButtonTwo: clickButtonTwo + 1,
    }));
  }

  handleClick3() {
    this.setState(({ clickButtonThree }) => ({
      clickButtonThree: clickButtonThree + 1,
    }));
  }
  render() {
    return (
      <>
        <button onClick={ this.handleClick1 }>Button 1 | Count:{ this.state.clickButtonOne }</button>
        <button onClick={ this.handleClick2 }>Button 2 | Count:{ this.state.clickButtonTwo }</button>
        <button onClick={ this.handleClick3 }>Button 3 | Count:{ this.state.clickButtonThree }</button>
      </>
    );
  }
}

export default App;
