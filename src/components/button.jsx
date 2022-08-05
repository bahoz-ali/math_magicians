import React, { Component } from 'react';
import './button_style.css';

const Button = (props) => {
  const { icon, theme, number, handleCalculate } = props;
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
};

export default Button;
