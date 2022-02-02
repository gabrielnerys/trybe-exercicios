import React, { Component } from "react";
import Select from "./Select";
import TextArea from "./TextArea";
import Checkbox from "./Checkbox";

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

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value

    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <>
        <Select value={this.state.fieldSelect} handleChange={this.handleChange} />
        <TextArea value={this.state.fieldText} handleChange={this.handleChange} />
        <Checkbox value={this.state.checkbox} handleChange={this.handleChange} />
      </>
    )
  }
}

export default Forms;