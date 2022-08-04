import React, { Component } from 'react';
import './input_style.css';

class Input extends Component {
  constructor(props) {
    super(props);
  }

  getCalculateData = () => {
    const { total, next, operation } = this.props.result;
    if (total && next && operation) return `${total} ${operation} ${next}`;
    if (total && operation) return `${total} ${operation} `;
    if (total && !next) return `${total}`;
    if (!total && next) return `${next}`;

    // if there is no data like total and next return 0
    return 0;
  };

  render() {
    return (
      <div className="input_container">
        <input
          className="input"
          type="text"
          name="number"
          id="number"
          disabled
          value={this.getCalculateData()}
        />
      </div>
    );
  }
}

export default Input;
