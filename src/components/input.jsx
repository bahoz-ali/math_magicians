import React from 'react';
import './input_style.css';

const Input = (props) => {
  const getCalculateData = () => {
    const { total, next, operation } = props.result;
    if (total && next && operation) return `${total} ${operation} ${next}`;
    if (total && operation) return `${total} ${operation} `;
    if (total && !next) return `${total}`;
    if (!total && next) return `${next}`;

    // if there is no data like total and next return 0
    return 0;
  };

  return (
    <div className="input_container">
      <input
        className="input"
        type="text"
        name="number"
        id="number"
        disabled
        value={getCalculateData()}
      />
    </div>
  );
};

export default Input;
