import React, { Component } from "react";

class Forms extends Component {

  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      fieldText: '',
      fieldSelect: '',
      checkbox: false,
    }
  }

  handleChange({ target }){
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value 

    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <>
        <div>
          <label>
            Campo Select
            <select
              name="fieldSelect"
              value={this.state.fieldSelect}
              onChange={this.handleChange}>
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
              name="fieldText"
              value={this.state.fieldText}
              onChange={this.handleChange}></textarea>
          </label>
        </div>
        <div>
          <label>
            Campo de checkbox
            <input
              type='checkbox'
              name="checkbox"
              value={this.state.checkbox}
              onChange={this.handleChange}>
            </input>
          </label>
        </div>
      </>
    )
  }
}

export default Forms;