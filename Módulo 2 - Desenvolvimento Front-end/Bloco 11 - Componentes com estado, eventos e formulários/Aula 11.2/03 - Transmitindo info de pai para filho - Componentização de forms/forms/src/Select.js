import React, { Component } from "react";

class Select extends Component {
 
  render() {
 
    const { value, handleChange } = this.props;

    return (
      <div>
        <label>
          Campo Select 
          <select
            name="fieldSelect"
            value={value}
            onChange={handleChange}>
            <option name="" value='' selected ></option>
            <option name="option1" value='Option1'>Option 1</option>
            <option name="option2" value='Option2'>Option 2</option>
          </select>
        </label>
      </div>
    )
  }
}

export default Select;