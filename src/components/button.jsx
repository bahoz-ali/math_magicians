import React, { Component } from 'react';
import './button_style.css';

class Button extends Component {
  constructor(props) {
    super(props);
  }

  colorTheme = () => {
    const { theme, number } = this.props;

    let classes = theme ? `btn ${theme} ` : 'btn btn--secondary ';
    return number ? classes + number : classes;
  };

  render() {
    const { icon, theme, number } = this.props;
    const colorTheme = theme ? `btn ${theme}` : 'btn btn--secondary';
    const numberClass = number ? `btn_container ${number}` : 'btn_container';

    return (
      <div className={numberClass}>
        <button type="button" className={colorTheme}>
          {icon}
        </button>
      </div>
    );
  }
}

export default Button;
