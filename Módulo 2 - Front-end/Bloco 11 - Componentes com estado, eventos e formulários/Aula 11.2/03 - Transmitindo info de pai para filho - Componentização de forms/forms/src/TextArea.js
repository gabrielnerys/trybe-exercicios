import React, { Component } from "react";

class TextArea extends Component {
 
  render() {

    const { value, handleChange } = this.props;

    return (
      <div>
          <label>
            Campo de texto
            <textarea
              name="fieldText"
              value={value}
              onChange={handleChange}></textarea>
          </label>
        </div>
    )
  }
}

export default TextArea;