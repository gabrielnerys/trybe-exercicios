import React, { Component } from "react";

class Checkbox extends Component {
 
  render() {

    const { value, handleChange } = this.props;

    return (
      <div>
      <label>
        Campo de checkbox
        <input
          type='checkbox'
          name="checkbox"
          value={value}
          onChange={handleChange}>
        </input>
      </label>
    </div>
    )
  }
}

export default Checkbox;