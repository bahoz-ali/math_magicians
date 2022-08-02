import React, { Component } from 'react';
import './input_style.css'

class Input extends Component {
  render() {
    return (
      <div className="input_container">
        <input
          className="input"
          type="text"
          name="number"
          id="number"
          value={0}
        />
      </div>
    );
  }
}

export default Input;
