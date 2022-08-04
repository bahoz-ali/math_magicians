import React, { Component } from 'react';
import './button_style.css';

class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { icon, theme, number, handleCalculate } = this.props;
    const colorTheme = theme ? `btn ${theme}` : 'btn btn--secondary';
    const numberClass = number ? `btn_container ${number}` : 'btn_container';

    return (
      <div className={numberClass}>
        <button
          onClick={handleCalculate}
          name={icon}
          type="button"
          className={colorTheme}>
          {icon}
        </button>
      </div>
    );
  }
}

export default Button;
