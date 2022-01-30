import React, { Component } from "react";

function handleClick1() {
  console.log("Olá");
}
function handleClick2() {
  console.log("como vai?");
}
function handleClick3() {
  console.log("Mui bien!");
}

class App extends Component {
  render() {
    return (
      <>
        <button onClick={ handleClick1 }>Button 1</button>
        <button onClick={ handleClick2 }>Button 2</button>
        <button onClick={ handleClick3 }>Button 3</button>
      </>
    );
  }
}

export default App;
