import React, { Component } from "react";

class Forms extends Component {

  constructor() {
    super()

    this.textAreaChange = this.textAreaChange.bind(this);
    this.selectChange = this.selectChange.bind(this);

    this.state = {
      fieldText: '',
      fieldSelect: '',
    }
  }

  selectChange(event) {
    this.setState({
      fieldSelect: event.target.value
    })
  }

  textAreaChange(event) {
    this.setState({
      fieldText: event.target.value
    })
  }

  render() {
    return (
      <>
        <div>
          <label>
            Campo Select
            <select 
            name="Caixa de texto" 
            value={this.state.fieldSelect} 
            onChange={this.selectChange}>
              <option name="" value='' selected ></option>
              <option name="option1" value='Option1'>Option 1</option>
              <option name="option2" value='Option2'>Option 2</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Campo de texto
            <textarea
              name="Caixa de texto"
              value={this.state.fieldText}
              onChange={this.textAreaChange}></textarea>
          </label>
        </div>
      </>
    )
  }
}

export default Forms;